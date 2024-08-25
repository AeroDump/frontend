"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { useRouter } from "next/navigation";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

interface Web3AuthContextType {
  provider: IProvider | null;
  loggedIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getUserInfo: () => Promise<any>;
}

const Web3AuthContext = createContext<Web3AuthContextType | undefined>(undefined);

export const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0xaa36a7",
    rpcTarget: "https://rpc.ankr.com/eth_sepolia",
    displayName: "Ethereum Sepolia Testnet",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    ticker: "ETH",
    tickerName: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  };

  const privateKeyProvider = useMemo(() => new EthereumPrivateKeyProvider({ config: { chainConfig } }), []);

  const web3auth = useMemo(() => new Web3Auth({
    clientId,
    web3AuthNetwork: "sapphire_mainnet",
    privateKeyProvider,
  }), [clientId, privateKeyProvider]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
          router.push("/dashboard"); // Redirect to if logged in
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [web3auth, router]);

  const login = async () => {
    try {
      setLoading(true);
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setLoggedIn(true);
      router.push("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserInfo = async () => {
    if (!provider) {
      console.error("Provider not initialized");
      return;
    }
    return await web3auth.getUserInfo();
  };

  const contextValue = useMemo(() => ({
    provider,
    loggedIn,
    login,
    logout,
    getUserInfo,
  }), [provider, loggedIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Web3AuthContext.Provider value={contextValue}>
      {children}
    </Web3AuthContext.Provider>
  );
};

export const useWeb3Auth = () => {
  const context = useContext(Web3AuthContext);
  if (!context) {
    throw new Error("useWeb3Auth must be used within a Web3AuthProvider");
  }
  return context;
};

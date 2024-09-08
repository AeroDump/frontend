"use client";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { createConfig, http, WagmiProvider } from "wagmi";
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { baseSepolia, Chain, optimismSepolia, arbitrumSepolia, fantomTestnet, bscTestnet, avalancheFuji, polygonMumbai } from "viem/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";
import { useEffect, useState, useMemo } from 'react';

const queryClient = new QueryClient() 

export default function Web3AuthProvider({ children }: { children: React.ReactNode }) {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(null);

  const Web3AuthConnectorInstance = useMemo(() => {
    return (chains: Chain[]) => {
 
      const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!

      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x" + chains[0].id.toString(16),
        rpcTarget: chains[0].rpcUrls.default.http[0],
        displayName: chains[0].name,
        tickerName: chains[0].nativeCurrency?.name,
        ticker: chains[0].nativeCurrency?.symbol,
        blockExplorerUrl: chains[0].blockExplorers?.default.url[0] as string,
        logo: "https://web3auth.io/images/web3authlogodark.png",
      };

      const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
    
      const web3AuthInstance = new Web3Auth({
        clientId,
        chainConfig,
        privateKeyProvider,
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
        enableLogging: true,
        // uiConfig: {
        //   appName: 'aerodump',
        //   defaultLanguage: "en",
        //   modalZIndex: "2147483647",
        //   logoLight: "https://web3auth.io/images/web3authlog.png",
        //   logoDark: "https://web3auth.io/images/web3authlogodark.png",
        //   uxMode: "redirect",
        //   mode: "dark",
        // },
      });
    
      const walletServicesPlugin = new WalletServicesPlugin({
        walletInitOptions: {
          // whiteLabel: {
          //   showWidgetButton: true,
          // }
        }
      });
      web3AuthInstance.addPlugin(walletServicesPlugin);
        
      const modalConfig = {
        [WALLET_ADAPTERS.OPENLOGIN]: {
          label: "openlogin",
          loginMethods: {},
          showOnModal: true,
        },
      }

      return Web3AuthConnector({
        web3AuthInstance,
        modalConfig
      })
    }
  }, []);

  const config = useMemo(() => createConfig({
    chains: [
      baseSepolia,
      optimismSepolia, 
      arbitrumSepolia, fantomTestnet, bscTestnet, avalancheFuji, polygonMumbai
    ],
    transports: {
      [baseSepolia.id]: http('https://base-sepolia-rpc.publicnode.com'),
      [optimismSepolia.id]: http('https://sepolia.optimism.io'),
      [arbitrumSepolia.id]: http('https://arbitrum-sepolia.publicnode.com'),
      [fantomTestnet.id]: http('https://rpc.ankr.com/fantom_testnet'),
      [bscTestnet.id]: http('https://bsc-testnet.publicnode.com'),
      [avalancheFuji.id]: http('https://avalanche-fuji.publicnode.com'),
      [polygonMumbai.id]: http('https://polygon-mumbai.publicnode.com'),
    },
    connectors: [
      Web3AuthConnectorInstance([baseSepolia]),
    ],
  }), [Web3AuthConnectorInstance]);

  useEffect(() => {
    const initWeb3Auth = async () => {
      if (config.connectors[0] instanceof Web3AuthConnector) {
        const web3AuthConnector = config.connectors[0] as any;
        const web3AuthInstance = await web3AuthConnector.getWeb3AuthInstance();
        setWeb3AuthInstance(web3AuthInstance);
        await web3AuthInstance.initModal();
      }
    };

    initWeb3Auth();

    return () => {
      if (web3AuthInstance) {
        web3AuthInstance.logout();
      }
    };
  }, [config]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};


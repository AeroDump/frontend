"use client";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { createConfig, http, WagmiProvider } from "wagmi";
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { baseSepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";

const queryClient = new QueryClient() 

export default function Web3AuthProvider({ children }: { children: React.ReactNode }) {

  const Web3AuthConnectorInstance = (chains: any[]) => {
    const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";

    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x" + chains[0].id.toString(16),
      rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
      displayName: chains[0].name,
      tickerName: chains[0].nativeCurrency?.name,
      ticker: chains[0].nativeCurrency?.symbol,
      blockExplorerUrl: chains[0].blockExplorers?.default.url[0] as string,
    };

    const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
  
    const web3AuthInstance = new Web3Auth({
      clientId,
      privateKeyProvider,
      web3AuthNetwork: "sapphire_mainnet",
      enableLogging: true,
    });
  
    const walletServicesPlugin = new WalletServicesPlugin({
      walletInitOptions: {
        whiteLabel: {
          showWidgetButton: true,
        }
      }
    });
    web3AuthInstance.addPlugin(walletServicesPlugin);
  
    const modalConfig = {
      [WALLET_ADAPTERS.OPENLOGIN]: {
        label: "openlogin",
        // setting it to false will hide all social login methods from modal.
        showOnModal: true,
      }
    }

    return Web3AuthConnector({
      web3AuthInstance,
      modalConfig
    })
  }
  
  const config = createConfig({
    chains: [baseSepolia],
    transports: {
      [baseSepolia.id]: http('https://sepolia.base.org'),
    },
    connectors: [
      Web3AuthConnectorInstance([baseSepolia]),
    ],
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};


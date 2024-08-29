export const supportedChains = ["Ethereum", "ETH Sepolia"] as const;
export const supportedCurrencies = ["ETH", "ETH Sepolia", "USDC", "USDT"] as const;

export type SupportedChain = (typeof supportedChains)[number];
export type supportedCurrency = (typeof supportedCurrencies)[number];

export type TokenTransferInfo = {
  walletAddress?: `0x${string}` | "";
  chain: SupportedChain | "";
  amount: number | 0;
  currency: supportedCurrency | ""
};

export type TokenTransferInfo = {
    walletAddress : `0x${string}`
    chain: string
    amount: number 
    currency: "ETH" | "USDC" | "USDT"
}

export const sampleTokenTransferInfo: TokenTransferInfo[] = [
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 0.0,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 0.5,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 1.0,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 1.5,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 2.0,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 2.5,
    currency: "ETH",
  },
  {
    walletAddress:
      "0x0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627",
    chain: "Ethereum",
    amount: 3.0,
    currency: "ETH",
  },
];

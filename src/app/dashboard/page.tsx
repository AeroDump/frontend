"use client";
import React, { memo, useEffect } from "react";
import { useDisconnect, useAccount, useBalance } from "wagmi";
import { auth } from "@/components/auth";
import { Heading, FadeInAnimation } from "@/components/animations";
import { Chain } from "viem";
import { useContractInteraction } from "@/hooks/useContractInteraction";

function Dashboard() {
  const { address, chain } = useContractInteraction();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
      <Heading text="Dashboard" />
      <FadeInAnimation>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <FadeInAnimation delay={0.2}>
            <AccountInfo address={address!} balance={balance} chain={chain} />
          </FadeInAnimation>
          <FadeInAnimation delay={0.4}>
            <button
              className="w-full bg-red-500 hover:bg-red-600 transition-colors duration-300 text-lg py-3 rounded-xl"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </button>
          </FadeInAnimation>
        </div>
      </FadeInAnimation>
    </div>
  );
}

const AccountInfo = memo(({ address, balance, chain }: { address: string, balance: any, chain: Chain | undefined }) => (
  <div className="mb-8 text-white">
    <h2 className="text-2xl font-bold mb-4">Account Information</h2>
    <div className="bg-gray-800 p-6 rounded-xl">
      <p className="mb-4"><strong>Address:</strong> <span className="text-purple-400">{address}</span></p>
      <p><strong>Chain:</strong> <span className="text-green-400">{chain ? `${chain.name}` : 'Loading...'}</span></p>
      <p><strong>Balance:</strong> <span className="text-green-400">{balance ? `${balance.value} ${balance.symbol}` : 'Loading...'}</span></p>
    </div>
  </div>
));

AccountInfo.displayName = 'AccountInfo';

export default auth(Dashboard);

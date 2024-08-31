"use client";
import { useDisconnect, useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
import { auth } from "@/components/auth";

function Dashboard() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {isConnected && (
        <div className="mb-6">
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Balance:</strong> {balance ? `${formatEther(balance.value)} ${balance.symbol}` : 'Loading...'}</p>
        </div>
      )}
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
    </div>
  );
}

export default auth(Dashboard);

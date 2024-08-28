"use client";
import { useDisconnect } from "wagmi";

export default function Dashboard() {
  const { disconnect } = useDisconnect();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <button className="card"  onClick={() => disconnect()}>
        disconnect
      </button>
    </div>
  );
}

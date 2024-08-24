"use client";
import { useWeb3Auth } from "@/config/web3AuthProvider";
import { useEffect, useState } from "react";
import RPC from "../../config/viemRPC";

export default function Dashboard() {
  const { provider, getUserInfo, logout } = useWeb3Auth();
  const [userInfo, setUserInfo] = useState(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [balance, setBalance] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [transaction, setTransaction] = useState<any | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
    };

    fetchUserInfo();
  }, [getUserInfo]);

  const fetchAccounts = async () => {
    if (!provider) return;
    const accounts = await RPC.getAccounts(provider);
    setAccounts(accounts);
  };

  const fetchBalance = async () => {
    if (!provider) return;
    const balance = await RPC.getBalance(provider);
    setBalance(balance);
  };

  const signMessage = async () => {
    if (!provider) return;
    const signedMessage = await RPC.signMessage(provider);
    setMessage(signedMessage);
  };

  const sendTransaction = async () => {
    if (!provider) return;
    const transactionReceipt = await RPC.sendTransaction(provider);
    setTransaction(transactionReceipt);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {userInfo && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold">User Information</h2>
          <pre className="mt-2">{JSON.stringify(userInfo, null, 2)}</pre>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button onClick={fetchAccounts} className="p-4 bg-blue-500 text-white rounded-md">
          Get Accounts
        </button>
        <button onClick={fetchBalance} className="p-4 bg-green-500 text-white rounded-md">
          Get Balance
        </button>
        <button onClick={signMessage} className="p-4 bg-yellow-500 text-white rounded-md">
          Sign Message
        </button>
        <button onClick={sendTransaction} className="p-4 bg-red-500 text-white rounded-md">
          Send Transaction
        </button>
        <button onClick={logout} className="p-4 bg-gray-500 text-white rounded-md">
          Log Out
        </button>
      </div>
      {accounts.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Accounts</h2>
          <pre className="mt-2">{JSON.stringify(accounts, null, 2)}</pre>
        </div>
      )}
      {balance && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Balance</h2>
          <pre className="mt-2">{balance}</pre>
        </div>
      )}
      {message && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Signed Message</h2>
          <pre className="mt-2">{message}</pre>
        </div>
      )}
      {transaction && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Transaction</h2>
          <pre className="mt-2">{JSON.stringify(transaction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

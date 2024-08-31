"use client";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from 'next/navigation';
import { useAccount, useConnect } from "wagmi";
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function Home() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full h-full"
        rangeY={180} particleCount={1000}
        rangeSpeed={1.7}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-white text-4xl md:text-8xl font-bold mb-4">
            Aerodump.
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto mb-8">
            Seamless, Secure, and Automated Multi-Network Token Distribution.
          </p>
          <h3 className="text-white text-xl mb-4">Connect with</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-x-4"
          >
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect({ connector })}
                className="bg-white text-black hover:bg-gray-200 transition-colors duration-200 text-lg py-3 px-8 rounded-full"
              >
                {connector.name}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </Vortex>
    </div>
  );
}
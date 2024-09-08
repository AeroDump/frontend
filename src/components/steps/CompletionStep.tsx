"use client";

import { useContractInteraction } from '@/hooks/useContractInteraction';
import React from 'react';

export const CompletionStep: React.FC = () => {
  const { hash } = useContractInteraction();
  return (
    <div className="text-white space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Transaction Complete</h2>
      <p className="text-lg mb-4">Your transaction has been successfully completed.</p>
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Transaction Details</h3>
        <p>Transaction ID: <span className="text-purple-400">{hash}</span></p>
      </div>
    </div>
  );
};

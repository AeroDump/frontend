"use client";

import React from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';

export const CompletionStep: React.FC = () => {
  // const { transactionId } = useMultiStepContext();

  return (
    <div className="text-white space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Transaction Complete</h2>
      <p className="mb-4">Your transaction has been successfully completed.</p>
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Transaction Details</h3>
        {/* <p>Transaction ID: <span className="text-purple-400">{transactionId}</span></p> */}
      </div>
    </div>
  );
};

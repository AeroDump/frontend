"use client";

import React, { useState } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { useContractInteraction } from '@/hooks/useContractInteraction';

export const SendFromVault: React.FC = () => {
  const { recipients, chain, setCurrentStepIndex} = useMultiStepContext();
  const { projectIdCrossChain, queueEqualDistribution} = useContractInteraction();
  const [isSending, setIsSending] = useState(false);

  const handleSendFromVault = () => {
    setIsSending(true);
    if (!projectIdCrossChain) {
      console.error('Project ID is not set');
      return;
    }
    const recipientAddresses = recipients?.map((recipient) => recipient.walletAddress) ?? [];
    queueEqualDistribution(projectIdCrossChain.toString(), recipientAddresses, chain);
    setCurrentStepIndex(4)
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">Send Tokens from Vault</h2>
      <p className="mb-4">Click the button below to queue the airdrop for equal distribution to all recipients.</p>
      <button
        onClick={handleSendFromVault} 
        className={`btn-primary ${isSending ? 'opacity-50' : ''}`}
        disabled={isSending}
      >
        Queue Airdrop For Equal Distribution
      </button>
    </div>
  );
};

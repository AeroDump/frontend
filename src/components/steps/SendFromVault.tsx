"use client";

import React, { useEffect, useState } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { useContractInteraction } from '@/hooks/useContractInteraction';
import { toast } from 'sonner';

export const SendFromVault: React.FC = () => {
  const { recipients, chain, setCurrentStepIndex} = useMultiStepContext();
  const { projectIdCrossChain, queueEqualDistribution} = useContractInteraction();
  const [isSending, setIsSending] = useState(false);
  const [totalAmount, setTotalAmount] = useState<string>('0');

  useEffect(() => {
    const totalAmount = recipients.reduce((acc, recipient) => {
      return acc + Number(recipient.amount);
    }, 0);
    setTotalAmount(totalAmount.toString());
  }, [recipients]);

  const handleSendFromVault = () => {
    setIsSending(true);
    if (!projectIdCrossChain) {
      console.error('Project ID is not set');
      return;
    }
    const recipientAddresses = recipients?.map((recipient) => recipient.walletAddress) ?? [];
    queueEqualDistribution(projectIdCrossChain.toString(), recipientAddresses, chain);
    toast.success('Airdrop queued for equal distribution');
    setCurrentStepIndex(4);
    setIsSending(false);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">Send Tokens from Vault</h2>
      <p className="mb-6">
        Click the button below to queue the airdrop for equal distribution to all recipients.
      </p>
      <div className="stat-container mb-6">
        <div className="important-stat">
          <span className="stat-highlight">{recipients.length}</span>
          <span className="stat-label">Recipients</span>
        </div>
        <div className="important-stat">
          <span className="stat-highlight">{totalAmount}</span>
          <span className="stat-label">Total Amount (micro usdc)</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSendFromVault} 
          className={`btn-primary ${isSending ? 'opacity-50' : ''}`}
          disabled={isSending}
        >
          Queue Airdrop For Equal Distribution
        </button>
      </div>
    </div>
  );
};

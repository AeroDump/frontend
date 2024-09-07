"use client";

import React, { useState, useEffect } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { useContractInteraction } from '@/hooks/useContractInteraction';
import { useSwitchChain } from 'wagmi';

export const VaultLockingForm: React.FC = () => {
  const { switchChain } = useSwitchChain();
  const { projectIdCrossChain, allowance, approveUSDC, lockTokens, lockedTokens, chain: connectedChain } = useContractInteraction();
  const { recipients, currency, chain, setCurrentStepIndex } = useMultiStepContext();
  const [showApproveButton, setShowApproveButton] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [totalAmount, setTotalAmount] = useState<string>('0');

  useEffect(() => {
    switchChain({ chainId: 11155420 })
  }, []);

  useEffect(() => {
    const totalAmount = recipients.reduce((acc, recipient) => {
      return acc + Number(recipient.amount);
    }, 0);
    setTotalAmount(totalAmount.toString());
  }, [recipients]);

  useEffect(() => {
    const formattedAllowance = Number(allowance);
    const formattedTotalAmount = Number(totalAmount);
    setShowApproveButton(formattedAllowance < formattedTotalAmount);
  }, [allowance, totalAmount]);

  useEffect(() => {
    console.log("lockedTokens", lockedTokens)
    const formattedlockedTokens = Number(lockedTokens);
    const formattedTotalAmount = Number(totalAmount);
    if (formattedlockedTokens >= formattedTotalAmount) {
      setCurrentStepIndex(3);
    }
  }, [lockedTokens, totalAmount])

  const renderApproveButton = () => {
    if (showApproveButton) {
      return (
        <button
          onClick={() => {
            approveUSDC(BigInt(totalAmount));
            setIsApproving(true);
          }}
          className="btn-primary"
          disabled={isApproving}
        >
          {isApproving ? 'Approving...' : 'Approve USDC'}
        </button>
      )
    }
  }

  const renderLockButton = () => {
    return (
      <button
        onClick={() => {
          if (!projectIdCrossChain) {
            console.error('Project ID or chain is not set');
            return;
          }
          lockTokens(Number(projectIdCrossChain), BigInt(totalAmount), chain);
          setIsLocking(true);
        }}
        className="btn-primary"
        disabled={isLocking || showApproveButton}
      >
        {isLocking ? 'Locking...' : 'Lock Vault'}
      </button>
    )
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">Vault Locking</h2>
      <p className="mb-4">Total amount to be locked in the vault:</p>
      <input
        type="text"
        value={totalAmount.toString()}
        onChange={(e) => setTotalAmount(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white"
      />
      <p className="mb-4">Currency: <span className="text-purple-400">{currency}</span></p>
      <p className="mb-4">From Chain: <span className="text-purple-400">{connectedChain?.name} ({connectedChain?.id})</span></p>
      <p className="mb-4">To Chain: <span className="text-purple-400">Base Sepolia ({chain})</span></p>
      <p className="mb-4">Project ID: <span className="text-purple-400">{projectIdCrossChain ? projectIdCrossChain.toString() : 'Not available'}</span></p>
      <div className="flex justify-end mt-6">
        {renderApproveButton()}
        {renderLockButton()}
      </div>
    </div>
  );
};

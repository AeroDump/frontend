"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { useContractInteraction } from '@/hooks/useContractInteraction';

export const VaultLockingForm: React.FC = () => {
  const { projectId, allowance, approveUSDC, lockTokens, project } = useContractInteraction();
  const { currency, chain, recipients } = useMultiStepContext();
  const [showApproveButton, setShowApproveButton] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [totalAmount, setTotalAmount] = useState<string>('0');

  useEffect(() => {
    const totalAmount = recipients.reduce((acc, recipient) => {
      return acc + Number(recipient.amount);
    }, 0);
    setTotalAmount(totalAmount.toString());
  }, [recipients]);

  useEffect(() => {
    console.log('project');
    console.log(project);
  }, [project]);

  useEffect(() => {
    const formattedAllowance = Number(allowance);
    const formattedTotalAmount = Number(totalAmount);
    setShowApproveButton(formattedAllowance < formattedTotalAmount);
  }, [allowance, totalAmount]);

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
          if (!projectId) {
            console.error('Project ID or chain is not set');
            return;
          }
          lockTokens(projectId, BigInt(totalAmount), chain);
          setIsLocking(true);
        }}
        className="btn-primary"
        disabled={isLocking}
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
      <p className="mb-4">Chain: <span className="text-purple-400">{chain}</span></p>
      <p className="mb-4">Project ID: <span className="text-purple-400">{projectId ? projectId.toString() : 'Not available'}</span></p>
      <div className="flex justify-end mt-6">
        {renderApproveButton()}
        {renderLockButton()}
      </div>
    </div>
  );
};

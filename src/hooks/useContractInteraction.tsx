import { useWriteContract, useReadContract, useAccount, useWaitForTransactionReceipt, useBalance } from 'wagmi';
import { OPTIMISM_SEPOLIA_USDC_CONTRACT, OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA, ATTESTATIONS_CONTRACT_BASE_SEPOLIA } from '@/contracts';
import { Address, parseEther } from 'viem';
import { toast } from "sonner";
import { useEffect } from 'react';

export const useContractInteraction = () => {
  const { address } = useAccount();
  const { data: hash, writeContract, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isConfirming) {
      toast.info(`Transaction is confirming... ${hash}`);
    } else if (isConfirmed) {
      toast.success(`Transaction confirmed successfully! ${hash}`);
    } else if (error) {
      console.log('error', error);
      toast.error(`Error: ${error.message} ${hash}`);
    }
  }, [isConfirming, isConfirmed, error, hash]);

  const {data: isProjectVerified} = useReadContract({
    ...ATTESTATIONS_CONTRACT_BASE_SEPOLIA,
    functionName: 'getIsProjectVerified',
    args: [address as Address],
  });

  const {data: projectId} = useReadContract({
    ...ATTESTATIONS_CONTRACT_BASE_SEPOLIA,
    functionName: 'getProjectId',
    args: [address as Address],
  });

  const {data: projectIdCrossChain } = useReadContract({
    ...OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA,
    functionName: 'getProjectOwnerToId',
    args: [address as Address],
  });

  const {data: allowance} = useReadContract({
    ...OPTIMISM_SEPOLIA_USDC_CONTRACT,
    functionName: 'allowance',
    args: [address as Address, OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA.address],
  });

  const {data: project} = useReadContract({
    ...OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA,
    functionName: 'getProjectDetailsByAddress',
    args: [address as Address],
  });

  const approveUSDC = (amount: bigint) => {
    console.log('approveUSDC', amount);
    return writeContract({
      ...OPTIMISM_SEPOLIA_USDC_CONTRACT,
      functionName: 'approve',
      args: [OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA.address, amount],
    });
  };

  const lockTokens = (projectId: string, amount: bigint, chain: number) => {
    console.log('lockTokens', projectId, amount, chain);
    return writeContract({
      ...OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA,
      functionName: 'lockTokens',
      args: [projectId, amount, amount, chain],
    });
  };

  const verifyProject = (name: string, description: string, website: string, twitter: string) => {
    console.log('verifyProject', name, description, website, twitter);
    return writeContract({
      ...ATTESTATIONS_CONTRACT_BASE_SEPOLIA,
      functionName: 'verifyProject',
      args: [name, description, website, twitter],
      value: parseEther('0.0008'),
    });
  };

  const queueEqualDistribution = (projectId: string, addresses: Address[], chain: number) => {
    console.log('queueEqualDistribution', projectId, addresses, chain);
    return writeContract({
      ...OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA,
      functionName: 'queueAirdropWithEqualDistribution',
      args: [projectId, addresses, chain],
    });
  }

  return {
    approveUSDC,
    lockTokens,
    verifyProject,
    isProjectVerified,
    projectId: projectId ? projectId.toString() :  projectIdCrossChain ? projectIdCrossChain.toString() : undefined,
    allowance,
    project,
    queueEqualDistribution
  };
};
function useWaitForTransaction(arg0: { hash: any; }): { isLoading: any; } {
  throw new Error('Function not implemented.');
}


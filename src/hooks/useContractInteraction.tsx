import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { BASE_SEPOLIA_USDC_CONTRACT, OFTADAPTER_CONTRACT, ATTESTATIONS_CONTRACT } from '@/contracts';
import { Address } from 'viem';

export const useContractInteraction = () => {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const {data: isProjectVerified} = useReadContract({
    ...ATTESTATIONS_CONTRACT,
    functionName: 'getIsProjectVerified',
    args: [address as Address],
  });

  const {data: projectId} = useReadContract({
    ...ATTESTATIONS_CONTRACT,
    functionName: 'getProjectId',
    args: [address as Address],
  });

  const {data: allowance} = useReadContract({
    ...BASE_SEPOLIA_USDC_CONTRACT,
    functionName: 'allowance',
    args: [address as Address, OFTADAPTER_CONTRACT.address],
  });

  const {data: project} = useReadContract({
    ...OFTADAPTER_CONTRACT,
    functionName: 'getProjectDetailsForProjectOwner',
    args: [],
  });

  const approveUSDC = (amount: bigint) => {
    console.log('approveUSDC', amount);
    return writeContract({
      ...BASE_SEPOLIA_USDC_CONTRACT,
      functionName: 'approve',
      args: [OFTADAPTER_CONTRACT.address, amount],
    });
  };

  const lockTokens = (projectId: string, amount: bigint, chain: number) => {
    console.log('lockTokens', projectId, amount, chain);
    return writeContract({
      ...OFTADAPTER_CONTRACT,
      functionName: 'lockTokens',
      args: [projectId, amount, amount, chain],
    });
  };

  const verifyProject = (name: string, description: string, website: string, twitter: string) => {
    console.log('verifyProject', name, description, website, twitter);
    return writeContract({
      ...ATTESTATIONS_CONTRACT,
      functionName: 'verifyProject',
      args: [name, description, website, twitter],
    });
  };

  const queueEqualDistribution = (projectId: string, addresses: Address[], chain: number) => {
    console.log('queueEqualDistribution', projectId, addresses, chain);
    return writeContract({
      ...OFTADAPTER_CONTRACT,
      functionName: 'queueAirdropWithEqualDistribution',
      args: [projectId, addresses, chain],
    });
  }

  return {
    approveUSDC,
    lockTokens,
    verifyProject,
    isProjectVerified,
    projectId: projectId ? projectId.toString() : undefined,
    allowance,
    project,
    queueEqualDistribution
  };
};

import { createContext, ReactNode, useContext, useState, useMemo, useEffect } from 'react';
import { TokenTransferInfo, ProjectDetails } from '@/types';

interface MultiStepContextType {
  chain: number;
  setChain: (chain: number) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  recipients: TokenTransferInfo[];
  setRecipients: (recipients: TokenTransferInfo[]) => void;
  projectDetails: ProjectDetails;
  setProjectDetails: (details: ProjectDetails) => void;
  isVaultLocked: boolean;
  setIsVaultLocked: (isLocked: boolean) => void;
  isApproved: boolean;
  setIsApproved: (isApproved: boolean) => void;
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const MultiStepContext = createContext<MultiStepContextType | undefined>(undefined);

export const MultiStepProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [chain, setChain] = useState<number>(84532);
  const [currency, setCurrency] = useState<string>('usdc');
  const [recipients, setRecipients] = useState<TokenTransferInfo[]>([]);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    id: null,
    name: '',
    description: '',
    website: '',
    twitter: '',
  });
  const [isVaultLocked, setIsVaultLocked] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    return () => {
      setChain(84532);
      setCurrency('usdc');
      setRecipients([]);
      setProjectDetails({
        id: null,
        name: '',
        description: '',
        website: '',
        twitter: '',
      });
      setIsVaultLocked(false);
      setIsApproved(false);
      setCurrentStepIndex(0);
    };
  }, []);

  const value = useMemo(() => ({
    chain,
    setChain,
    currency,
    setCurrency,
    recipients,
    setRecipients,
    projectDetails,
    setProjectDetails,
    isVaultLocked,
    setIsVaultLocked,
    isApproved,
    setIsApproved,
    currentStepIndex,
    setCurrentStepIndex,
  }), [chain, currency, recipients, projectDetails, isVaultLocked, isApproved, currentStepIndex]);

  return (
    <MultiStepContext.Provider value={value}>
      {children}
    </MultiStepContext.Provider>
  );
};

export const useMultiStepContext = () => {
  const context = useContext(MultiStepContext);
  if (context === undefined) {
    throw new Error('useMultiStepContext must be used within a MultiStepProvider');
  }
  return context;
};

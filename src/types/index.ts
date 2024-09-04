import { BigNumberish } from "ethers";
import { Address } from "viem";

export interface TokenTransferInfo {
  walletAddress: Address;
  amount: BigNumberish;
}

export interface ProjectDetails {
  id: string | null;
  name: string;
  description: string;
  website: string;
  twitter: string;
}

export interface MultiStepContextType {
  chain: number;
  setChain: (chain: number) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  recipients: TokenTransferInfo[];
  setRecipients: (recipients: TokenTransferInfo[]) => void;
  projectDetails: ProjectDetails;
  setProjectDetails: (details: ProjectDetails) => void;
  isProjectRegistered: boolean;
  setIsProjectRegistered: (isRegistered: boolean) => void;
  isVaultLocked: boolean;
  setIsVaultLocked: (isLocked: boolean) => void;
}

export interface ProjectRegistrationHook {
  formData: ProjectDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  slides: { label: string; placeholders: string[] }[];
  verifyProject: () => void;
  isVerifyingProject: boolean;
  isProjectVerified: boolean;
}

export interface VaultLockingHook {
  isApproved: boolean;
  setIsApproved: (isApproved: boolean) => void;
  isVaultLocked: boolean;
  setIsVaultLocked: (isLocked: boolean) => void;
  // Add other necessary properties here
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  fieldErrors: { [key: string]: string };
}

export interface Step {
  key: string;
  component: React.ComponentType<any>;
  label: string;
}

export interface MultiStepFormHook {
  currentStep: Step;
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  progress: number;
  fieldErrors: { [key: string]: string };
  validateCurrentStep: () => Promise<boolean>;
}

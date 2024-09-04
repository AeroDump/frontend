"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { ProjectRegistrationForm } from './steps/ProjectRegistrationForm';
import { RecipientForm } from './steps/RecipientForm';
import { ChainCurrencySelectionForm } from './steps/ChainCurrencySelectionForm';
import { VaultLockingForm } from './steps/VaultLockingForm';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { Progress } from './ui/progress';
import { Step } from '@/types';
import { SendFromVault } from './steps/SendFromVault';

const steps: Step[] = [
  { key: 'chainCurrency', component: ChainCurrencySelectionForm, label: 'Select Chain and Currency' },
  { key: 'recipients', component: RecipientForm, label: 'Add Recipients' },
  { key: 'project', component: ProjectRegistrationForm, label: 'Project Registration' },
  { key: 'vault', component: VaultLockingForm, label: 'Lock Vault' },
  { key: 'send', component: SendFromVault, label: 'Send from Vault' },
];

export const MultiStepForm = React.memo(() => {
  const { currentStepIndex } = useMultiStepContext();

  const currentStep = useMemo(() => steps[currentStepIndex], [currentStepIndex]);

  const CurrentStepComponent = currentStep.component;
  
  return (
    <div className="space-y-6 text-white bg-gray-900 grid-background p-6 rounded-xl bg-grid-pattern">
      <Progress value={((currentStepIndex + 1) / steps.length) * 100} className="mb-4" />
      <CurrentStepComponent />
    </div>
  );
});

MultiStepForm.displayName = 'MultiStepForm';

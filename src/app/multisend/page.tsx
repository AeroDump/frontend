"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect, use } from "react";
import { Heading, AnimatedPage } from "@/components/animations";
import { auth } from "@/components/auth";
import { MultiStepProvider } from '@/contexts/MultiStepContext';
import { useContractInteraction } from '@/hooks/useContractInteraction';
import { useAccount } from 'wagmi';

const ProjectRegistrationForm = dynamic(() => import('@/components/ProjectRegistrationForm').then((mod) => mod.ProjectRegistrationForm), {
  loading: () => <div>Loading form...</div>,
});

const MultiStepForm = dynamic(() => import('@/components/MultistepForm').then((mod) => mod.MultiStepForm), {
  loading: () => <div>Loading form...</div>,
});

function MultiSend() {
  const { isProjectVerified, isVerifiedUser, chain} = useContractInteraction();

  useEffect(() => {
  },[isProjectVerified, isVerifiedUser])

  const renderForm = () => {
    // const isVerified = isProjectVerified || chain?.id === 11155420; //do this for now to prevent rerender
    if (isProjectVerified || chain?.id === 11155420) {
      return (
        <MultiStepProvider>
          <MultiStepForm />
        </MultiStepProvider>
      )
    }
    return (
      <ProjectRegistrationForm />
    )
  }

  return (
    <AnimatedPage>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        <Heading text="Multi-Send Crypto" />
        {renderForm()}
      </div>
    </AnimatedPage>
  )
}

MultiSend.displayName = 'MultiSend';

export default auth(MultiSend);
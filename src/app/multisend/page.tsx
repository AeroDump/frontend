"use client"
import dynamic from 'next/dynamic';
import React from "react";
import { Heading, AnimatedPage } from "@/components/animations";
import { auth } from "@/components/auth";
import { MultiStepProvider } from '@/contexts/MultiStepContext';
function MultiSend() {
  return (
    <MultiStepProvider>
      <AnimatedPage>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
          <Heading text="Multi-Send Crypto" />
          <MultiStepForm />
        </div>
      </AnimatedPage>
    </MultiStepProvider>
  )
}
MultiSend.displayName = 'MultiSend';

const MultiStepForm = dynamic(() => import('@/components/MultistepForm').then((mod) => mod.MultiStepForm), {
  loading: () => <div>Loading form...</div>,
});

export default auth(MultiSend);
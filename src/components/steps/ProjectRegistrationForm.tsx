"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { toast } from "sonner";
import { useContractInteraction } from '@/hooks/useContractInteraction';
import { validateProjectDetails } from '@/utils/validateProjectDetails';
import { ProjectDetails } from '@/types';

const fields = [
  { label: "Name", placeholder: "Enter project name" },
  { label: "Description", placeholder: "Describe your project" },
  { label: "Website", placeholder: "Enter project website" },
  { label: "Twitter", placeholder: "Enter project Twitter" },
];

export const ProjectRegistrationForm: React.FC = () => {
  const { projectDetails, setProjectDetails, setCurrentStepIndex } = useMultiStepContext();
  const { verifyProject: verifyProjectContract, isProjectVerified } = useContractInteraction();
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    let isMounted = true;
    if (isProjectVerified && isMounted) {
      setCurrentStepIndex(3);
    }
    return () => {
      isMounted = false;
    };
  }, [isProjectVerified, setCurrentStepIndex]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value
    });
  }, [setProjectDetails, projectDetails]);

  const handleNext = useCallback(async () => {
    const { isValid, fieldErrors } = validateProjectDetails(projectDetails);
    setFieldErrors(fieldErrors);
    if (isValid) {
      verifyProjectContract(projectDetails.name, projectDetails.description, projectDetails.website, projectDetails.twitter);
      toast.success("Verifying project!");
    }
    else {
      console.error("Error verifying project");
    }
  }, [projectDetails, verifyProjectContract]);

  return (
    <form className="space-y-6 text-white">
      {fields.map((slide, index) => (
        <div key={index}>
          <label htmlFor={slide.label.toLowerCase()} className="block text-sm font-medium text-gray-300 mb-2">
            {slide.label}
          </label>
          <input
            type="text"
            id={slide.label.toLowerCase()}
            name={slide.label.toLowerCase()}
            value={projectDetails[slide.label.toLowerCase() as keyof ProjectDetails] ?? ''}
            onChange={handleChange}
            placeholder={slide.placeholder}
            className={`input-primary w-full ${
              fieldErrors[slide.label.toLowerCase()] ? 'input-error' : ''
            }`}
            required
          />
          {fieldErrors[slide.label.toLowerCase()] && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors[slide.label.toLowerCase()]}</p>
          )}
        </div>
      ))}
      <div className="flex justify-end mt-6">
        <button onClick={handleNext} className="btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};
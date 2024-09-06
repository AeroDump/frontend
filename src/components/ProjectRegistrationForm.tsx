"use client";

import React, { useCallback, useState } from 'react';
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
  const { verifyProject } = useContractInteraction();
  const [ loading, setLoading ] = useState(false);
  const [ fieldErrors, setFieldErrors ] = useState<{[key: string]: string}>({});
  const [ projectDetails, setProjectDetails ] = useState<ProjectDetails>({
    id: '',
    name: '',
    description: '',
    website: '',
    twitter: ''
  }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value
    });
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, fieldErrors } = validateProjectDetails(projectDetails);
    setFieldErrors(fieldErrors);
    if (isValid) {
      verifyProject(projectDetails.name, projectDetails.description, projectDetails.website, projectDetails.twitter);
      setLoading(true);
    }
  }, [projectDetails, verifyProject]);

  return (
    <form className="space-y-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Verification Required</h2>
      <p className="mb-4">Please verify your account/project to continue with the multi-send process. You MUST have ETH on Base Sepolia to verify your project.</p>
      {fields.map((slide, index) => (
        <div key={index}>
          <label htmlFor={slide.label.toLowerCase()} className="block text-sm font-medium text-gray-300 mb-2">
            {slide.label}
          </label>
          <input
            disabled={loading}
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
        <button disabled={loading} onClick={handleSubmit} className="btn-primary">
          Confirm
        </button>
      </div>
    </form>
  );
};
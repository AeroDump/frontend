import { ProjectDetails, ValidationResult } from '@/types';

export function validateProjectDetails(projectDetails: ProjectDetails): ValidationResult {
  const errors: string[] = [];
  const fieldErrors: { [key: string]: string } = {};

  if (!projectDetails.name.trim()) {
    errors.push('Project name is required');
    fieldErrors.name = 'Project name is required';
  }
  if (!projectDetails.description.trim()) {
    errors.push('Project description is required');
    fieldErrors.description = 'Project description is required';
  }
  if (!projectDetails.website.trim()) {
    errors.push('Project website is required');
    fieldErrors.website = 'Project website is required';
  }
  if (!projectDetails.twitter.trim()) {
    errors.push('Project Twitter is required');
    fieldErrors.twitter = 'Project Twitter is required';
  }

  return {
    isValid: errors.length === 0,
    errors,
    fieldErrors,
  };
}

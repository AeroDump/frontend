import { ValidationResult } from '@/types';

export function validateChainCurrency(chain: number, currency: string): ValidationResult {
  const errors: string[] = [];
  const fieldErrors: { [key: string]: string } = {};

  if (!chain) {
    errors.push('Please select a chain');
    fieldErrors.chain = 'Please select a chain';
  }
  if (!currency) {
    errors.push('Please select a currency');
    fieldErrors.currency = 'Please select a currency';
  }

  return {
    isValid: errors.length === 0,
    errors,
    fieldErrors,
  };
}

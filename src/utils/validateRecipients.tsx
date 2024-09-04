import { TokenTransferInfo, ValidationResult } from '@/types';
import { isAddress } from 'ethers';

export function validateRecipients(recipients: TokenTransferInfo[], currency: string): ValidationResult {
  const errors: string[] = [];
  const fieldErrors: { [key: string]: string } = {};

  if (recipients.length === 0) {
    errors.push('Please add at least one recipient');
    return { isValid: false, errors, fieldErrors };
  }

  let hasValidRecipient = false;

  recipients.forEach((recipient, index) => {
    if (!isAddress(recipient.walletAddress)) {
      fieldErrors[`address-${index}`] = 'Invalid address';
    }
    if (BigInt(recipient.amount) <= BigInt(0)) {
      fieldErrors[`amount-${index}`] = 'Invalid amount';
    } else {
      hasValidRecipient = true;
    }
  });

  if (!hasValidRecipient) {
    errors.push('Please add at least one valid recipient with a non-zero amount');
  }

  return {
    isValid: Object.keys(fieldErrors).length === 0 && errors.length === 0,
    errors,
    fieldErrors,
  };
}

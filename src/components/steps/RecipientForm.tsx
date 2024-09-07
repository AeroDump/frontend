"use client";

import React, { useMemo, useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { PlusIcon, Trash2Icon, FileText } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import Papa from "papaparse";
import { validateRecipients } from '@/utils/validateRecipients';
import { TokenTransferInfo } from '@/types';

export const RecipientForm: React.FC = () => {
  const { recipients, setRecipients, currency, setCurrentStepIndex } = useMultiStepContext();
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [showErrors, setShowErrors] = useState(false);
  const [noRecipientsError, setNoRecipientsError] = useState<string | null>(null);

  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: recipients.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  const getDecimalsForCurrency = (currency: string) => {
    switch (currency.toLowerCase()) {
      case 'usdc':
        return 6;
      default:
        return 18;
    }
  };

  const handleFileUpload = (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    Papa.parse(file, {
      complete: (results) => {
        const parsedData = results.data
          .filter((row: any) => row.length >= 2)
          .map((row: any) => ({
            walletAddress: row[0],
            amount: parseFloat(row[1]) || 0
          }));

        setRecipients(parsedData);
      },
      header: false,
      skipEmptyLines: true,
    });
  };

  const handleDataChange = (index: number, key: keyof TokenTransferInfo, value: string | number) => {
    const newData = [...recipients];
    newData[index] = { ...newData[index], [key]: value };
    setRecipients(newData);
  };

  const removeRow = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const addEmptyRow = () => {
    setRecipients([...recipients, { walletAddress: '0x', amount: 0 }]);
  };

  const downloadCSVTemplate = () => {
    const csvContent = "Wallet Address,Amount\n0x1234...,100\n0x5678...,200";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "multisender_template.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const totalAmount = useMemo(() => recipients.reduce((sum, item) => {
    const amount = BigInt(item.amount || 0);
    return sum + amount;
  }, BigInt(0)), [recipients]);

  const totalAmountFormatted = useMemo(() => {
    const decimals = getDecimalsForCurrency(currency);
    return (Number(totalAmount) / Math.pow(10, decimals)).toFixed(2);
  }, [totalAmount, currency]);

  const handleNext = () => {
    if (recipients.length === 0) {
      setNoRecipientsError("Please add at least one recipient before proceeding.");
      return;
    }

    const { isValid, fieldErrors: newFieldErrors } = validateRecipients(recipients, currency);
    setFieldErrors(newFieldErrors);
    setShowErrors(true);
    setNoRecipientsError(null);

    if (isValid) {
      setCurrentStepIndex(2);
    } else {
      const firstErrorElement = document.querySelector('.border-red-500');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="space-y-6 text-white">
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Recipients Summary</h2>
        <p>Total Recipients: {recipients.length}</p>
        <p>Total Amount: {totalAmountFormatted} {currency.toUpperCase()} ({totalAmount.toString()} micro)</p>
      </div>
      <FileUpload
        onChange={handleFileUpload}
        heading="Upload CSV File"
        subheading="Drag and drop your CSV file here or click to browse"
      />
      <div className="flex justify-between items-center">
        <b>
          Please use the provided csv template to upload recipients
        </b>
        <button onClick={downloadCSVTemplate} className="btn-secondary flex items-center">
          <FileText className="mr-2" size={16} />
          Download Template
        </button>
      </div>
      <div 
        ref={parentRef} 
        style={{ 
          height: 'min(200px, max(200px, 100%))', 
          maxHeight: '400px', 
          overflowY: 'auto' 
        }} 
        className="bg-gray-800 rounded-xl"
      >
        <table className='w-full max-w-4xl mx-auto rounded-xl overflow-hidden'>
          <thead className="sticky top-0 bg-gray-800">
            <tr className="border-b border-gray-700">
              <th className="text-white p-4 text-left">Wallet Address</th>
              <th className="text-right w-[180px] text-white p-4">Amount (micro)</th>
              <th className="w-[50px] p-4"></th>
            </tr>
          </thead>
          <tbody>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <RecipientRow
                key={virtualRow.index}
                item={recipients[virtualRow.index]}
                index={virtualRow.index}
                handleDataChange={handleDataChange}
                removeRow={removeRow}
                fieldErrors={fieldErrors}
                showErrors={showErrors}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <div className='w-full flex justify-between items-center p-4'>
                  <button
                    onClick={addEmptyRow}
                    className='btn-secondary flex items-center'
                  >
                    Add Recipient <PlusIcon className="ml-2" height={16} />
                  </button>
                  <div className="text-right">
                    <span className='text-xl font-semibold text-white mr-4'>Total:</span>
                    <span className="text-xl font-semibold text-purple-400">
                      {totalAmountFormatted} {currency.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      ({totalAmount.toString()} micro)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {noRecipientsError && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
          {noRecipientsError}
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button onClick={handleNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

interface RecipientRowProps {
  item: TokenTransferInfo;
  index: number;
  handleDataChange: (index: number, field: keyof TokenTransferInfo, value: string) => void;
  removeRow: (index: number) => void;
  fieldErrors: Record<string, string>;
  showErrors: boolean;
}

const RecipientRow: React.FC<RecipientRowProps> = React.memo(({ 
  item,
  index,
  handleDataChange,
  removeRow,
  fieldErrors,
  showErrors
}) => {
  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDataChange(index, "walletAddress", e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      handleDataChange(index, "amount", value);
    }
  };

  const handleRemoveRow = () => {
    removeRow(index);
  };

  return (
    <tr className='hover:bg-gray-800 transition-colors'>
      <td className="p-4">
        <input
          type="text"
          value={item.walletAddress}
          onChange={handleWalletChange}
          className={`input-primary ${showErrors && fieldErrors[`address-${index}`] ? 'input-error' : ''}`}
        />
        {showErrors && fieldErrors[`address-${index}`] && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors[`address-${index}`]}</p>
        )}
      </td>
      <td className="p-4">
        <input
          type="text"
          value={item.amount.toString()}
          onChange={handleAmountChange}
          placeholder="Amount in micro USDC"
          className={`input-primary ${showErrors && fieldErrors[`amount-${index}`] ? 'input-error' : ''}`}
        />
        {showErrors && fieldErrors[`amount-${index}`] && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors[`amount-${index}`]}</p>
        )}
      </td>
      <td className="p-4">
        <button
          onClick={handleRemoveRow}
          className="h-8 w-8 p-0 bg-transparent hover:bg-gray-700 rounded-full"
        >
          <Trash2Icon className="h-4 w-4 text-red-500" />
        </button>
      </td>
    </tr>
  );
});

RecipientRow.displayName = 'RecipientRow';

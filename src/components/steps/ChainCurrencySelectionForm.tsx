"use client";

import React, { useState } from 'react';
import { useMultiStepContext } from '@/contexts/MultiStepContext';
import { validateChainCurrency } from '@/utils/validateChainCurrency';

export const ChainCurrencySelectionForm: React.FC = () => {
	const { setChain, setCurrency, chain, currency, setCurrentStepIndex } = useMultiStepContext();
	const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

	const handleChainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setChain(Number(event.target.value));
	};

	const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrency(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validationResult = validateChainCurrency(chain, currency);
		if (validationResult.isValid) {
			setCurrentStepIndex(1);
		} else {
			setFieldErrors(validationResult.fieldErrors);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<label htmlFor="chain-select" className="block text-sm font-medium text-gray-300 mb-2">Select Chain</label>
					<select
						id="chain-select"
						onChange={handleChainChange}
						value={chain}
						className={`input-primary w-full ${fieldErrors.chain ? 'input-error' : ''}`}
					>
						<option value="">Select a chain</option>
						<option value={84532}>Base Sepolia</option>
					</select>
					{fieldErrors.chain && <p className="text-red-500 text-xs mt-1">{fieldErrors.chain}</p>}
				</div>
				<div>
					<label htmlFor="currency-select" className="block text-sm font-medium text-gray-300 mb-2">Select Currency</label>
					<select
						id="currency-select"
						onChange={handleCurrencyChange}
						value={currency}
						className={`input-primary w-full ${fieldErrors.currency ? 'input-error' : ''}`}
					>
						<option value="">Select a currency</option>
						<option value="usdc">USDC</option>
					</select>
					{fieldErrors.currency && <p className="text-red-500 text-xs mt-1">{fieldErrors.currency}</p>}
				</div>
			</div>
      <div className="flex justify-end mt-6">
        <button type="submit" className="btn-primary">
          Next
        </button>
      </div>
		</form>
	);
};

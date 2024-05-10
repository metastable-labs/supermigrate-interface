import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';
import { getBalance } from '@wagmi/core';
import { wagmiConfig } from '@/config/rainbow/rainbowkit';
import { Address } from 'viem';

export const cn = (...input: ClassValue[]) => twMerge(clsx(input));

export const getScanLink = (id: number, hash: string) => {
  if (id === 1) {
    return `https://etherscan.io/tx/${hash}`;
  }

  if (id === 8453) {
    return `https://basescan.org/tx/${hash}`;
  }

  if (id === 34443) {
    return `https://modescan.io/tx/${hash}`;
  }

  if (id === 10) {
    return `https://optimistic.etherscan.io//tx/${hash}`;
  }

  return '';
};

export const handleAmountInput = (value: string) => {
  const valueWithoutComma = value.replace(/,/g, '');

  if (valueWithoutComma.length === 0) {
    return '';
  }

  // Check if the input is a valid number (including decimals)
  const isMatch = valueWithoutComma.match(/^(\d+\.?\d*|\.\d+)$/);
  if (!isMatch) return;
  if (isNaN(Number(valueWithoutComma))) return;

  // Format the number with local thousand separators
  // Temporarily remove the decimal part to format the integer part
  const parts = valueWithoutComma.split('.');
  const integerFormatted = parseInt(parts[0]).toLocaleString();

  // Reconstruct the number including the decimal part if it exists
  const newValue = parts.length > 1 ? `${integerFormatted}.${parts[1]}` : integerFormatted;

  return newValue;
};

export const getTokenBalance = async (userAddress: Address, tokenAddress: Address) => {
  const option: any = {
    address: userAddress,
  };

  if (tokenAddress !== '0x0000000000000000000000000000000000000000') {
    option.token = tokenAddress;
  }

  const balance = await getBalance(wagmiConfig, option);
  const floatBalance = parseFloat(balance.formatted);
  const roundedNumber = parseFloat(floatBalance.toFixed(5));

  return roundedNumber;
};

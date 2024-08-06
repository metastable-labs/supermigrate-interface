import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

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

export const formatNumber = (num: number): string => {
  const formatWithPrecision = (value: number) => {
    return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2).replace(/\.?0+$/, '');
  };

  if (num >= 1e9) {
    return formatWithPrecision(num / 1e9) + 'b';
  }
  if (num >= 1e6) {
    return formatWithPrecision(num / 1e6) + 'm';
  }
  if (num >= 1e3) {
    return formatWithPrecision(num / 1e3) + 'k';
  }
  return num?.toString();
};

export const formatAmount = (amount?: number | string, decimals = 4): number => {
  if (!amount) return 0;

  const factor = Math.pow(10, decimals);
  const truncatedValue = Math.floor(Number(amount) * factor) / factor;
  return truncatedValue;
};

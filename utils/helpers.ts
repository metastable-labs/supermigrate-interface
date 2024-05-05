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

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

export function convertToScript(number: number, type: 'super' | 'sub' = 'super'): string {
  const scriptMap: {
    [key: string]: {
      super: string;
      sub: string;
    };
  } = {
    '0': { super: '⁰', sub: '₀' },
    '1': { super: '¹', sub: '₁' },
    '2': { super: '²', sub: '₂' },
    '3': { super: '³', sub: '₃' },
    '4': { super: '⁴', sub: '₄' },
    '5': { super: '⁵', sub: '₅' },
    '6': { super: '⁶', sub: '₆' },
    '7': { super: '⁷', sub: '₇' },
    '8': { super: '⁸', sub: '₈' },
    '9': { super: '⁹', sub: '₉' },
  };

  return String(number)
    .split('')
    .map((digit) => scriptMap[digit][type])
    .join('');
}

export function formatDecimalNumber(number: number) {
  let numberString = number.toFixed(20);
  numberString = numberString.replace(/0+$/, '');

  const significantIndex = numberString.split('').findIndex((char) => char !== '0' && char !== '.');
  const leadingZerosCount = significantIndex - numberString.indexOf('.') - 1;

  if (number < 1) {
    if (leadingZerosCount >= 5) {
      const subscript = convertToScript(leadingZerosCount);
      const [wholePart, decimalPart] = numberString.split('.');
      let significantDecimal = decimalPart.slice(leadingZerosCount);

      if (significantDecimal.length > 3) {
        significantDecimal = Math.round(parseFloat(`0.${significantDecimal}`) * 1000).toString();
      }

      const formattedDecimal = `0${subscript}${significantDecimal}`;

      return {
        whole: wholePart,
        decimal: formattedDecimal,
        value: `${wholePart}.${formattedDecimal}`,
      };
    }

    if (leadingZerosCount < 5 && leadingZerosCount > 0) {
      const [wholePart, decimalPart] = numberString.split('.');
      const leadingZeros = decimalPart.slice(0, leadingZerosCount);
      let significantDecimal = decimalPart.slice(leadingZerosCount);

      if (significantDecimal.length > 3) {
        significantDecimal = Math.round(parseFloat(`0.${significantDecimal}`) * 1000).toString();
      }

      const formattedDecimal = `${leadingZeros}${significantDecimal}`;

      return {
        whole: wholePart,
        decimal: formattedDecimal,
        value: `${wholePart}.${formattedDecimal}`,
      };
    }

    if (leadingZerosCount <= 0) {
      const [wholePart, decimalPart] = numberString.split('.');
      let significantDecimal = decimalPart.slice(0, 7).replace(/0+$/, '');

      return {
        whole: wholePart,
        decimal: significantDecimal,
        value: `${wholePart}.${significantDecimal}`,
      };
    }
  } else {
    const [wholePart, decimalPart] = numberString.split('.');
    let significantDecimal = (decimalPart || '0').slice(0, 2).padEnd(2, '0');

    return {
      whole: wholePart,
      decimal: significantDecimal,
      value: `${wholePart}.${significantDecimal}`,
    };
  }

  return {
    whole: '0',
    decimal: '00',
    value: `0.00`,
  };
}

import { UseFormRegisterReturn } from 'react-hook-form';

interface ISMInput {
  variant?: 'primary' | 'secondary';
  placeholder?: string;
  error?: any;
  type?: string;
  register?: UseFormRegisterReturn;
  rows?: number;
  name: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  isRequired?: boolean;
}

export type { ISMInput };

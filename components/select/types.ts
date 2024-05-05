import { ReactElement } from 'react';
import { Address } from 'viem';

export interface IOption {
  text: string;
  value: string;
  icon: ReactElement;
  id: string;
  address: Address;
}

export interface ISMSelect {
  text: string;
  onClick?: (option: IOption) => void;
  options?: IOption[];
  defaultId?: string;
  disabled?: boolean;
}

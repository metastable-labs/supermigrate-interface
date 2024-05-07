import { ReactElement } from 'react';
import { Address } from 'viem';
import TokenList from '@uniswap/default-token-list';

export interface IOption {
  text: string;
  value: string;
  icon: ReactElement;
  id: string;
  address: Address | string;
}

export interface ISMSelect {
  text: string;
  onClick?: (option: IOption) => void;
  options?: IOption[];
  defaultId?: string;
  disabled?: boolean;
}

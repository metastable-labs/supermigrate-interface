import { IOption } from '@/components/select/types';
import { Network } from '@/config/privy/config';

interface ILiquidityInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  options: IOption[];
  defaultId?: string;
  onSelect: (option: IOption) => void;
  selectText: string;
  balanceText?: string;
  balanceValue?: string;
  disabled?: boolean;
}

interface IAdd {
  defaultId: string;
}

interface IInfo {
  amount: number;
  show: boolean;
  wallet?: string;
  token?: string;
  poolPercentage: number;
  step: number;
}

interface IStake {
  network: Network;
  rowClick: (id: string) => void;
  claimClick: (id: string) => void;
}

export type { ILiquidityInput, IAdd, IInfo, IStake };

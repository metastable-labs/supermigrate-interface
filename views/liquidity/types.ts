import { IOption } from '@/components/select/types';

interface ILiquidityInput {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  options: IOption[];
  defaultId?: string;
  onSelect: (option: IOption) => void;
  selectText: string;
  balanceText?: string;
  balanceValue?: string;
  disabled?: boolean;
  disableInput?: boolean;
}

interface IAdd {
  defaultId: string;
}

interface IInfo {
  tokenAAmount: string;
  show: boolean;
  tokenA?: string;
  tokenB?: string;
  poolPercentage?: string;
  step: number;
  tokenRate?: string;
  networkFee?: string;
  tokenBAmount: string;
}

export type { ILiquidityInput, IAdd, IInfo };

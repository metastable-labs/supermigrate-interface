import { IOption } from "@/components/select/types";

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

export type { ILiquidityInput, IAdd, IInfo };

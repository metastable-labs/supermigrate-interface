import { ReactElement } from "react";

export interface IOption {
  text: string;
  value: string;
  icon: ReactElement;
  id: string;
}

export interface ISMSelect {
  text: string;
  onClick?: (option: IOption) => void;
  options?: IOption[];
  defaultId?: string;
  disabled?: boolean;
}

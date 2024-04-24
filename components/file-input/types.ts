import { Network } from "../button/types";

interface ISMFileInput {
  name: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  isRequired?: boolean;
  handleFileChange: any;
  network?: Network;
}

export type { ISMFileInput };

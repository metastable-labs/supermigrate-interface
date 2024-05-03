import { Network } from "@/config/rainbow/rainbowkit";

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

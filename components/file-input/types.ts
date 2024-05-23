import { Network } from '@/config/rainbow/config';

interface ISMFileInput {
  name: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  isRequired?: boolean;
  handleFileChange: any;
  network?: Network;
  show?: boolean;
}

export type { ISMFileInput };

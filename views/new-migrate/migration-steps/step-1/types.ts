import { Network } from '@/config/rainbow/config';

interface ITokenInfo {
  name: string;
  symbol: string;
  decimal: string;
  loading?: boolean;
  network: Network;
}

export type { ITokenInfo };

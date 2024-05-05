import { EthereumIcon, BitcoinIcon, SolanaIcon, PolygonIcon, GrinIcon } from '@/public/icons';

const walletOptions = [
  {
    text: 'ETH',
    value: '0xAbc1234567890DeF1234567890ABcDeF12345678',
    icon: <EthereumIcon />,
  },
  {
    text: 'BTC',
    value: '0xAbc1234567890DeF1234567890ABcDeF1234567',
    icon: <BitcoinIcon />,
  },
  {
    text: 'SOL',
    value: '0xAbc1234567890DeF1234567890ABcDeF1234568',
    icon: <SolanaIcon />,
  },
  {
    text: 'MATIC',
    value: '0xAbc1234567890DeF1234567890ABcDeF1235678',
    icon: <PolygonIcon />,
  },
];

const tokenOptions = [
  {
    text: 'NJK',
    value: 'NJOKU',
    icon: <GrinIcon />,
  },
  {
    text: 'MST',
    value: 'MEISTER',
    icon: <GrinIcon />,
  },
  {
    text: 'CHO',
    value: 'CHOCO',
    icon: <GrinIcon />,
  },
];

type Rate = {
  name: string;
  ETH: number;
  BTC: number;
  SOL: number;
  MATIC: number;
  [key: string]: number | string;
};

const rates: Rate[] = [
  { name: 'NJOKU', ETH: 22000, BTC: 340000, SOL: 12000, MATIC: 3000 },
  { name: 'MEISTER', ETH: 20000, BTC: 390000, SOL: 11000, MATIC: 9000 },
  { name: 'CHOCO', ETH: 32000, BTC: 400000, SOL: 19000, MATIC: 13000 },
];

export { walletOptions, tokenOptions, rates };
export type { Rate };

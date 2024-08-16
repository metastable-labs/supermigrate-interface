import { TableItem } from '@/components/table/types';
import { EthereumIcon, BitcoinIcon, SolanaIcon, PolygonIcon, GrinIcon } from '@/public/icons';

const walletOptions = [
  {
    text: 'ETH',
    value: '0xAbc1234567890DeF1234567890ABcDeF12345678',
    icon: <EthereumIcon />,
    id: 'eth',
  },
  {
    text: 'BTC',
    value: '0xAbc1234567890DeF1234567890ABcDeF1234567',
    icon: <BitcoinIcon />,
    id: 'btc',
  },
  {
    text: 'SOL',
    value: '0xAbc1234567890DeF1234567890ABcDeF1234568',
    icon: <SolanaIcon />,
    id: 'sol',
  },
  {
    text: 'MATIC',
    value: '0xAbc1234567890DeF1234567890ABcDeF1235678',
    icon: <PolygonIcon />,
    id: 'matic',
  },
];

const tokenOptions = [
  { text: 'NJO', value: 'NJOKU', icon: <GrinIcon />, id: 'njo' },
  { text: 'ETH', value: 'ETHOS', icon: <GrinIcon />, id: 'eth' },
  { text: 'LIN', value: 'LINKR', icon: <GrinIcon />, id: 'lin' },
  { text: 'DAI', value: 'DAIOS', icon: <GrinIcon />, id: 'dai' },
  { text: 'UNI', value: 'UNIK', icon: <GrinIcon />, id: 'uni' },
  { text: 'COM', value: 'COMPQ', icon: <GrinIcon />, id: 'com' },
  { text: 'AAV', value: 'AAVEY', icon: <GrinIcon />, id: 'aav' },
  { text: 'SNX', value: 'SNXK', icon: <GrinIcon />, id: 'snx' },
  { text: 'MKR', value: 'MKRR', icon: <GrinIcon />, id: 'mkr' },
  { text: 'YFI', value: 'YFIL', icon: <GrinIcon />, id: 'yfi' },
  { text: 'CHO', value: 'CHOCO', icon: <GrinIcon />, id: 'cho' },
  { text: 'MEI', value: 'MEISTER', icon: <GrinIcon />, id: 'mei' },
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
  { name: 'ETHOS', ETH: 15000, BTC: 300000, SOL: 9500, MATIC: 2200 },
  { name: 'LINKR', ETH: 18000, BTC: 310000, SOL: 8500, MATIC: 2100 },
  { name: 'DAIOS', ETH: 25000, BTC: 360000, SOL: 15000, MATIC: 4500 },
  { name: 'UNIK', ETH: 21000, BTC: 335000, SOL: 13000, MATIC: 3500 },
  { name: 'COMPQ', ETH: 17000, BTC: 320000, SOL: 10000, MATIC: 2900 },
  { name: 'AAVEY', ETH: 23000, BTC: 380000, SOL: 14000, MATIC: 4100 },
  { name: 'SNXK', ETH: 19000, BTC: 350000, SOL: 12500, MATIC: 3400 },
  { name: 'MKRR', ETH: 26000, BTC: 420000, SOL: 16000, MATIC: 5000 },
  { name: 'YFIL', ETH: 24000, BTC: 370000, SOL: 13500, MATIC: 3200 },
];

const allTableData: TableItem[] = [
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'RAZ',
    network: 'base',
    liquidity: 2_000_000,
    liquidityComposition: { eth: 80, auxiliary: 20 },
    id: 'raz',
    apy: 3.87,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'NJK',
    network: 'base',
    liquidity: 1_234_567,
    liquidityComposition: { eth: 70, auxiliary: 30 },
    id: 'njk',
    apy: 4.2,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'MEI',
    network: 'base',
    liquidity: 1_000_000,
    liquidityComposition: { eth: 60, auxiliary: 40 },
    id: 'mei',
    apy: 5.0,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'XYZ',
    network: 'base',
    liquidity: 3_000_000,
    liquidityComposition: { eth: 75, auxiliary: 25 },
    id: 'xyz',
    apy: 3.5,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'LMN',
    network: 'base',
    liquidity: 900_000,
    liquidityComposition: { eth: 65, auxiliary: 35 },
    id: 'lmn',
    apy: 4.1,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'OPQ',
    network: 'base',
    liquidity: 1_500_000,
    liquidityComposition: { eth: 50, auxiliary: 50 },
    id: 'opq',
    apy: 3.9,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'DEF',
    network: 'base',
    liquidity: 2_500_000,
    liquidityComposition: { eth: 85, auxiliary: 15 },
    id: 'def',
    apy: 4.5,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'GHI',
    network: 'base',
    liquidity: 800_000,
    liquidityComposition: { eth: 55, auxiliary: 45 },
    id: 'ghi',
    apy: 4.0,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'JKL',
    network: 'base',
    liquidity: 1_200_000,
    liquidityComposition: { eth: 70, auxiliary: 30 },
    id: 'jkl',
    apy: 3.8,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'TUV',
    network: 'base',
    liquidity: 2_200_000,
    liquidityComposition: { eth: 60, auxiliary: 40 },
    id: 'tuv',
    apy: 4.3,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'WXY',
    network: 'base',
    liquidity: 1_800_000,
    liquidityComposition: { eth: 90, auxiliary: 10 },
    id: 'wxy',
    apy: 3.9,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'ABC',
    network: 'base',
    liquidity: 1_600_000,
    liquidityComposition: { eth: 86.5, auxiliary: 13.5 },
    id: 'abc',
    apy: 4.6,
  },
];

const myTableData: TableItem[] = [
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'RAZ',
    poolTotal: {
      eth: 28.4,
      auxiliary: 700_000,
    },
    emmisions: {
      emmisions: 0.99,
      id: 'raz',
    },
    lpMigrated: {
      eth: 2.4,
      auxiliary: 600_000,
    },
    id: 'raz',
    apy: 3.87,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'NJK',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'njk',
    apy: 4.2,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'MEI',
    poolTotal: {
      eth: 28.4,
      auxiliary: 700_000,
    },
    emmisions: {
      emmisions: 0.99,
      id: 'raz',
    },
    lpMigrated: {
      eth: 2.4,
      auxiliary: 600_000,
    },
    id: 'mei',
    apy: 5.0,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'XYZ',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'xyz',
    apy: 3.5,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'LMN',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'lmn',
    apy: 4.1,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'OPQ',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'opq',
    apy: 3.9,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'DEF',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'def',
    apy: 4.5,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'GHI',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'ghi',
    apy: 4.0,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'JKL',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'jkl',
    apy: 3.8,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'TUV',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'tuv',
    apy: 4.3,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'WXY',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'wxy',
    apy: 3.9,
  },
  {
    tokenIcon: 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg',
    tokenSymbol: 'ABC',
    poolTotal: {
      eth: 22.4,
      auxiliary: 450_000,
    },
    emmisions: {
      emmisions: 0.69,
      id: 'raz',
    },
    lpMigrated: {
      eth: 5.4,
      auxiliary: 40_000,
    },
    id: 'abc',
    apy: 4.6,
  },
];

export { walletOptions, tokenOptions, rates, allTableData, myTableData };
export type { Rate };

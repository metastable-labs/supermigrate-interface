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

const tableData = [
  {
    tokenName: '$NJOKU',
    tokenAddress: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    poolUrl: 'https://uniswap.org/pool/0x123abc',
    id: 'njo',
  },
  {
    tokenName: '$CHOCO',
    tokenAddress: '0xCHOCO123456789abcdef0123456789abcdef012',
    poolUrl: 'https://uniswap.org/pool/0x123choco',
    id: 'cho',
  },
  {
    tokenName: '$MEISTER',
    tokenAddress: '0xMEIST0123456789abcdef0123456789abcdef012',
    poolUrl: 'https://uniswap.org/pool/0x234meister',
    id: 'mei',
  },
  {
    tokenName: '$ETHOS',
    tokenAddress: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    poolUrl: 'https://uniswap.org/pool/0x234bcd',
    id: 'eth',
  },
  {
    tokenName: '$LINKR',
    tokenAddress: '0xaBcdef38979deF123456789ABcDeF1234567890',
    poolUrl: 'https://uniswap.org/pool/0x345cde',
    id: 'lin',
  },
  {
    tokenName: '$DAIOS',
    tokenAddress: '0xDefa017DefA017DEfa017DEFA017dEFa017DeFA',
    poolUrl: 'https://uniswap.org/pool/0x456def',
    id: 'dai',
  },
  {
    tokenName: '$UNIK',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x567f01',
    id: 'uni',
  },
  {
    tokenName: '$COMPQ',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x678f12',
    id: 'com',
  },
  {
    tokenName: '$AAVEY',
    tokenAddress: '0xABCDEf0123456789abcdef0123456789ABCDef01',
    poolUrl: 'https://uniswap.org/pool/0x789f23',
    id: 'aav',
  },
  {
    tokenName: '$SNXK',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x890f34',
    id: 'snx',
  },
  {
    tokenName: '$MKRR',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x901f45',
    id: 'mkr',
  },
  {
    tokenName: '$YFIL',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x012f56',
    id: 'yfi',
  },
];

export { walletOptions, tokenOptions, rates, tableData };
export type { Rate };

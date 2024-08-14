import { Network } from '@/config/rainbow/config';

type PullStatus = 'merged' | 'pending' | 'failed';
type TableVariant = 'primary' | 'secondary';

interface TableItem {
  tokenIcon?: string;
  tokenName?: string;
  tokenSymbol?: string;
  pullStatus?: PullStatus;
  tokenAddress?: string;
  poolUrl?: string;
  id?: string;
  scanUrl?: string;
  network?: Network;
  liquidity?: number;
  liquidityComposition?: {
    eth: number;
    auxiliary: number;
  };
  apy?: number;
}

interface IRow {
  variant: TableVariant;
  item: TableItem;
  index: number;
  ctaAction?: (id: string) => void;
  rowClick?: (id: string) => void;
  network: Network;
}

interface TableProps {
  data: TableItem[];
  network: Network;
  isConnected: boolean;
  variant?: TableVariant;
  loading?: boolean;
  ctaAction?: (id?: string) => void;
  rowClick?: (id: string) => void;
}

interface EmptyStateProps {
  isConnected: boolean;
  network: Network;
  variant?: TableVariant;
  action?: () => void;
}

interface StatusProps {
  status?: PullStatus;
}

interface CTAProps {
  title: string;
  onClick: () => void;
  normal?: boolean;
}

interface AddressProps {
  address?: string;
}

export type { TableItem, TableProps, PullStatus, EmptyStateProps, StatusProps, CTAProps, AddressProps, IRow };

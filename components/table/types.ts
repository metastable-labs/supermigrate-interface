import { Network } from '@/config/privy/config';

type PullStatus = 'merged' | 'pending' | 'failed';
type TableVariant = 'primary' | 'secondary' | 'tertiary';

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
  poolTotal?: {
    eth: number;
    auxiliary: number;
  };
  emmisions?: {
    emmisions: number;
    id: string;
  };
  lpMigrated?: {
    eth: number;
    auxiliary: number;
  };
}

interface IRow {
  variant: TableVariant;
  item: TableItem;
  index: number;
  ctaAction?: (id: string) => void;
  rowClick?: (id: string) => void;
  network: Network;
  claimClick?: (id: string) => void;
  collapseTertiary?: boolean;
}

interface TableProps {
  data: TableItem[];
  network: Network;
  isConnected: boolean;
  variant?: TableVariant;
  loading?: boolean;
  ctaAction?: (id?: string) => void;
  rowClick?: (id: string) => void;
  claimClick?: (id: string) => void;
  collapseTertiary?: boolean;
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

interface EmissionsProps {
  emissions: {
    emmisions: number;
    id: string;
  };
  claimClick: (id: string) => void;
}

interface LPMigratedProps {
  eth: number;
  auxiliary: number;
  tokenSymbol: string;
  tokenIcon: string;
}

export type { TableItem, TableProps, PullStatus, EmptyStateProps, StatusProps, CTAProps, AddressProps, IRow, EmissionsProps, LPMigratedProps };

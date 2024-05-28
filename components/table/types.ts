import { Network } from '@/config/rainbow/config';

type PullStatus = 'merged' | 'pending' | 'failed';
type TableVariant = 'primary' | 'secondary' | 'tertiary';

interface TableItem {
  tokenIcon?: string;
  tokenName?: string;
  pullStatus?: PullStatus;
  tokenAddress?: string;
  poolUrl?: string;
  id?: string;
  scanUrl?: string;
  points?: number;
}

interface TableProps {
  data: TableItem[];
  network: Network;
  isConnected: boolean;
  variant?: TableVariant;
  loading?: boolean;
  ctaAction?: (id?: string) => void;
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

export type { TableItem, TableProps, PullStatus, EmptyStateProps, StatusProps, CTAProps, AddressProps };

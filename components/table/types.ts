import { Network } from "@/config/rainbow/config";

type PullStatus = "merged" | "pending" | "failed";
type TableVariant = "primary" | "secondary";

interface TableItem {
  tokenIcon?: string;
  tokenName?: string;
  pullStatus?: PullStatus;
  tokenAddress?: string;
  poolUrl?: string;
  id?: string;
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

export type { TableItem, TableProps, PullStatus, EmptyStateProps };

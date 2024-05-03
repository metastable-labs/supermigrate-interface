import { Network } from "@/config/rainbow/rainbowkit";

type PullStatus = "merged" | "pending" | "rejected";
type TableVariant = "primary" | "secondary";

interface TableItem {
  tokenIcon?: string;
  tokenName?: string;
  pullStatus?: PullStatus;
  tokenAddress?: string;
  poolUrl?: string;
}

interface TableProps {
  data: TableItem[];
  network: Network;
  isConnected: boolean;
  variant?: TableVariant;
  loading?: boolean;
  ctaAction?: (id?: string) => void;
}

export type { TableItem, TableProps, PullStatus };

import { Network } from "../button/types";

type PullStatus = "merged" | "pending" | "rejected";

interface TableItem {
  tokenIcon: string;
  tokenName: string;
  pullStatus: PullStatus;
}

interface TableProps {
  data: TableItem[];
  network: Network;
  isConnected: boolean;
}

export type { TableItem, TableProps, PullStatus };

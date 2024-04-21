type PullStatus = "merged" | "pending" | "rejected";

interface TableItem {
  tokenIcon: string;
  tokenName: string;
  pullStatus: PullStatus;
}

interface TableProps {
  data: TableItem[];
}

export type { TableItem, TableProps, PullStatus };

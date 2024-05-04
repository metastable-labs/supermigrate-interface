type Chain = {
  id: number;
  name: string;
  token_address: string;
  token_detail_override?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  transaction_hash: string;
};

type Migration = {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  logo_url: string;
  description: string;
  website: string;
  twitter: string;
  chains: Chain[];
  pull_requests: {
    id: number;
    url: string;
    status: string;
    chain: string;
    installation_id: number;
    owner: string;
  }[];
  status: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type { Migration, Chain };

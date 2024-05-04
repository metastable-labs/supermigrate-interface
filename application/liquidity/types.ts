type Liquidity = {
  id: string;
  pool_token_a_address: string;
  pool_token_b_address: string;
  pool_token_a_amount: string;
  pool_token_b_amount: string;
  pool_token_amount: string;
  pool_token_address: string;
  transaction_hash: string;
  deployer_address: string;
  chain: {
    id: number;
    name: string;
  };
  provider: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type { Liquidity };

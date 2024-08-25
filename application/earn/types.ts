import { Address } from 'viem';

type Transaction = {
  id: string;
  user_id: string;
  activity_id: string;
  points: number;
  description: string;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type TransactionMeta = {
  take: number;
  skip: number;
  total_count: number;
};

type TransactionResponse = {
  data: Transaction[];
  meta: TransactionMeta;
};

type Leaderboard = {
  id: string;
  wallet_address: Address;
  total_balance: number;
  pending_balance: number;
  xpMigrate_earned: number;
  is_active: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
  rank: number;
};

type Activity = {
  id: string;
  name: string;
  slug: string;
  description: string;
  points: number;
  is_percentage_based: boolean;
  percentage: number;
  is_active: boolean;
  multipliers: {
    id: string;
    slug: string;
    description: string;
    note: string;
    multiplier: number;
    is_active: boolean;
    activity_slug: string;
  }[];
  created_at: string;
  updated_at: string;
};

type Earnings = {
  id: string;
  auth_id: Address;
  auth_type: string;
  wallet_address: Address;
  is_active: boolean;
  referral_code: string;
  created_at: string;
  updated_at: string;
  wallet: {
    id: string;
    available_balance: number;
    total_balance: number;
    is_active: boolean;
    user_id: string;
    created_at: string;
    updated_at: string;
  };
  referral: {
    counts: number;
    points: number;
  };
  rank: number;
  total_circulation_points: number;
};

type FeaturedToken = {
  id: string;
  name: string;
  symbol: string;
  decimals: string;
  logo_url: string;
  chains: {
    id: number;
    name: string;
    token_address: string;
  }[];
  pull_requests: {
    id: number;
    url: string;
    status: string;
    repo: string;
    owner: string;
    chain: string;
    installation_id: number;
  }[];
  status: string;
  featured: boolean;
  is_custom: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type { Transaction, TransactionMeta, TransactionResponse, Leaderboard, Activity, Earnings, FeaturedToken };

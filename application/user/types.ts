import { Address } from 'viem';

type User = {
  id: string;
  github_id: number;
  auth_id: string;
  auth_type: string;
  wallet_address: string;
  name: string;
  avatar_url: string;
  ip_address: string;
  referral_code: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  wallet: {
    id: string;
    wallet_address: Address;
    total_balance: number;
    pending_balance: number;
    is_active: boolean;
    user_id: string;
    created_at: string;
    updated_at: string;
  };
};

type GithubAuthResponse = {
  token: string;
  expire: number;
  user: User;
};

export type { User, GithubAuthResponse };

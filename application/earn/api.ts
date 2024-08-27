import { Address } from 'viem';

import { axiosInstance } from '@/utils/axios';
import { Activity, Earnings, Leaderboard, TransactionResponse, FeaturedToken } from './types';

type IEarning = {
  fetchEarnings: () => Promise<Earnings>;
  fetchTransactions: (query?: string) => Promise<TransactionResponse>;
  fetchLeaderboard: () => Promise<Leaderboard[]>;
  fetchActivities: () => Promise<Activity[]>;
  claimNFTEarnings: (address: Address) => Promise<any>;
  fetchFeaturedTokens: () => Promise<FeaturedToken[]>;
};

const earning: IEarning = {
  fetchEarnings: async (): Promise<Earnings> => {
    const response = await axiosInstance.get(`earnings`);

    return response.data?.data;
  },

  fetchTransactions: async (query?: string): Promise<TransactionResponse> => {
    const response = await axiosInstance.get(`earnings/transactions${query ? `?${query}` : ''}`);

    return response.data;
  },

  fetchLeaderboard: async (): Promise<Leaderboard[]> => {
    const response = await axiosInstance.get(`earnings/leaderboard`);

    return response.data?.data;
  },

  fetchActivities: async (): Promise<Activity[]> => {
    const response = await axiosInstance.get(`earnings/activities`);

    return response.data?.data;
  },

  claimNFTEarnings: async (address: Address): Promise<void> => {
    const response = await axiosInstance.post(`earnings/nft/claim/${address}`);

    return response.data.data;
  },

  fetchFeaturedTokens: async (): Promise<FeaturedToken[]> => {
    const response = await axiosInstance.get(`earnings/featured_tokens`);

    return response.data?.data;
  },
};

export default earning;

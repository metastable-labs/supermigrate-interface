import { axiosInstance } from '@/utils/axios';
import { Activity, Earnings, Leaderboard, TransactionResponse } from './types';

type IEarning = {
  fetchEarnings: () => Promise<Earnings>;
  fetchTransactions: (query?: string) => Promise<TransactionResponse>;
  fetchLeaderboard: () => Promise<Leaderboard[]>;
  fetchActivities: () => Promise<Activity[]>;
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
};

export default earning;

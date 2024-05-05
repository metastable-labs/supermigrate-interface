import { axiosInstance } from '@/utils/axios';
import { Liquidity } from './types';

type ILiquidity = {
  fetchLiquidities: () => Promise<Liquidity[]>;
  fetchLiquidity: (id: string) => Promise<Liquidity>;
  postLiquidity: (data: FormData) => Promise<Liquidity>;
};

const migration: ILiquidity = {
  fetchLiquidities: async (): Promise<Liquidity[]> => {
    const response = await axiosInstance.get(`liquidities`);

    return response.data?.data;
  },

  fetchLiquidity: async (id: string): Promise<Liquidity> => {
    const response = await axiosInstance.get(`liquidities/${id}`);

    return response.data?.data;
  },

  postLiquidity: async (data: FormData): Promise<Liquidity> => {
    const response = await axiosInstance.post(`liquidities`, data);

    return response.data?.data;
  },
};

export default migration;

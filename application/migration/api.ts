import { axiosInstance } from '@/utils/axios';
import { Migration } from './types';

type IMigration = {
  fetchMigrations: () => Promise<Migration[]>;
  fetchMigration: (id: string) => Promise<Migration>;
  migrateToken: (data: FormData) => Promise<Migration>;
  addToBridge: (id: string, data: FormData) => Promise<Migration>;
};

const migration: IMigration = {
  fetchMigrations: async (): Promise<Migration[]> => {
    const response = await axiosInstance.get(`migrations`);

    return response.data?.data;
  },

  fetchMigration: async (id: string): Promise<Migration> => {
    const response = await axiosInstance.get(`migrations/${id}`);

    return response.data?.data;
  },

  migrateToken: async (data: FormData): Promise<Migration> => {
    const response = await axiosInstance.post(`migrations`, data);

    return response.data?.data;
  },

  addToBridge: async (id: string, data: FormData): Promise<Migration> => {
    const response = await axiosInstance.post(`migrations/${id}/superbridge`, data);

    return response.data?.data;
  },
};

export default migration;

import axios from 'axios';

import { axiosInstance } from '@/utils/axios';
import { GithubAuthResponse, User } from './types';

type Response = {
  token: string;
  expire: number;
  user: {
    id: string;
    auth_id: string;
    auth_type: string;
    wallet_address: string;
    referral_code: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
};

type IUser = {
  fetchUser: () => Promise<User>;
  githubAuth: (code: string) => Promise<GithubAuthResponse>;
  login: (token: string) => Promise<Response>;
};

const user: IUser = {
  fetchUser: async (): Promise<User> => {
    const response = await axiosInstance.get(`shared/auth/session`);

    return response.data?.data;
  },

  githubAuth: async (code: string): Promise<GithubAuthResponse> => {
    const response = await axiosInstance.post(`shared/auth/github`, { code });

    return response.data?.data;
  },

  login: async (token: string): Promise<Response> => {
    const response = await axios.post(
      `https://api.supermigrate.xyz/v1/shared/auth`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data?.data;
  },
};

export default user;

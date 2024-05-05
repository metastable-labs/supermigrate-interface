import { axiosInstance } from '@/utils/axios';
import { GithubAuthResponse, User } from './types';

type IUser = {
  fetchUser: () => Promise<User>;
  githubAuth: (code: string) => Promise<GithubAuthResponse>;
};

const user: IUser = {
  fetchUser: async (): Promise<User> => {
    const response = await axiosInstance.get(`auth/session`);

    return response.data?.data;
  },

  githubAuth: async (code: string): Promise<GithubAuthResponse> => {
    const response = await axiosInstance.post(`auth/github`, { code });

    return response.data?.data;
  },
};

export default user;

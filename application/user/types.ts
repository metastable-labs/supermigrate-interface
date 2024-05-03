type User = {
  id: string;
  name: string;
  username: string;
  avatar_url: string;
  ip_address: string;
  created_at: string;
  updated_at: string;
};

type GithubAuthResponse = {
  token: string;
  expire: number;
  user: User;
};

export type { User, GithubAuthResponse };

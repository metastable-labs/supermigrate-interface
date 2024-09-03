'use client';

import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { CallbackProps } from '../store';
import { setLoading, setUser } from '.';
import api from './api';
import { setTokenHeader } from '@/utils/axios';
import useMigrationActions from '../migration/actions';
import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';

const useUserActions = () => {
  const { dispatch } = useSystemFunctions();
  const { ready, authenticated, login, getAccessToken } = usePrivy();
  const { getMigrations } = useMigrationActions();
  const [cookies, setCookies] = useCookies(['authtoken', 'isGithubConnected']);

  const authenticateUser = async () => {
    try {
      if (!ready) return;
      dispatch(setLoading(true));

      login();
    } catch (error: any) {
      dispatch(setLoading(false));
      return toast('Something went wrong!', {
        type: 'error',
      });
    }
  };

  const getUser = async (callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const user = await api.fetchUser();

      dispatch(setUser(user));
      await getMigrations();
    } catch (error: any) {
      callback?.onError?.(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const authenticateGithub = async (code: string, callback?: CallbackProps) => {
    try {
      if (!cookies.authtoken) return;
      await setTokenHeader(cookies?.authtoken);

      dispatch(setLoading(true));
      const user = await api.githubAuth(code);

      toast('Github connected sucessfully', {
        type: 'success',
      });

      setCookies('isGithubConnected', 'true');

      return dispatch(setUser(user.user));
    } catch (error: any) {
      callback?.onError?.(error);
      const message = error?.response?.data?.message;

      if (message === 'Invalid authentication code') return;

      return toast('Github authentication failed! Please try again.', {
        type: 'error',
        autoClose: 7000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const _loginUser = async () => {
    try {
      const accessToken = await getAccessToken();
      if (!accessToken) return;

      const response = await api.login(accessToken);

      setCookies('authtoken', response.token, {
        expires: new Date(new Date().getTime() + response.expire * 1000),
      });

      setTokenHeader(response.token);
    } catch (error: any) {
      return toast('Something went wrong!', {
        type: 'error',
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (!authenticated || cookies.authtoken) return;

    _loginUser();
  }, [authenticated, cookies]);

  return {
    getUser,
    authenticateGithub,
    authenticateUser,
  };
};

export default useUserActions;

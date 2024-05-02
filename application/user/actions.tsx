"use client";

import useSystemFunctions from "@/hooks/useSystemFunctions";
import { CallbackProps } from "../store";
import { setLoading, setUser } from ".";
import api from "./api";
import { setTokenHeader } from "@/utils/axios";

const useUserActions = () => {
  const { dispatch } = useSystemFunctions();

  const getUser = async (callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const user = await api.fetchUser();

      return dispatch(setUser(user));
    } catch (error: any) {
      callback?.onError?.(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const authenticateGithub = async (code: string, callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const user = await api.githubAuth(code);

      setTokenHeader(user.token);

      return dispatch(setUser(user.user));
    } catch (error: any) {
      callback?.onError?.(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    getUser,
  };
};

export default useUserActions;

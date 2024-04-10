"use client";

import useSystemFunctions from "@/hooks/useSystemFunctions";
import { CallbackProps } from "../store";
import { setLoading, setUser } from ".";

const useUserActions = () => {
  const { dispatch } = useSystemFunctions();

  const getUser = async (callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const mockUser = {
        name: "John Doe",
      };

      callback?.onSuccess?.(mockUser);
      return dispatch(setUser(mockUser));
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

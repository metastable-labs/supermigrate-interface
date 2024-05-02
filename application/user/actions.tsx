"use client";

import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import { CallbackProps } from "../store";
import { setLoading, setUser } from ".";
import api from "./api";
import { setTokenHeader } from "@/utils/axios";

const useUserActions = () => {
  const { dispatch } = useSystemFunctions();
  const [cookies, setCookie] = useCookies(["SMauthtoken"]);

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

      setCookie("SMauthtoken", user.token, {
        expires: new Date(new Date().getTime() + user.expire * 1000),
      });

      toast("Github connected sucessfully", {
        type: "success",
      });

      return dispatch(setUser(user.user));
    } catch (error: any) {
      callback?.onError?.(error);
      const message = error?.response?.data?.message;

      if (message === "Invalid authentication code") return;

      return toast("Github authentication failed! Please try again.", {
        type: "error",
        autoClose: 7000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    getUser,
    authenticateGithub,
  };
};

export default useUserActions;

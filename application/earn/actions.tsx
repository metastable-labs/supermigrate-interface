'use client';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { setActivities, setEarning, setLeaderboard, setLoadingActivities, setLoadingEarning, setLoadingLeaderboard, setLoadingTransactions, setTransactionMeta, setTransactions } from '.';
import api from './api';

const useEarnActions = () => {
  const { dispatch } = useSystemFunctions();

  const getEarning = async () => {
    try {
      dispatch(setLoadingEarning(true));
      const earning = await api.fetchEarnings();

      dispatch(setEarning(earning));
    } catch (error: any) {
      //
    } finally {
      dispatch(setLoadingEarning(false));
    }
  };

  const getActivities = async () => {
    try {
      dispatch(setLoadingActivities(true));
      const activities = await api.fetchActivities();

      dispatch(setActivities(activities));
    } catch (error: any) {
      //
    } finally {
      dispatch(setLoadingActivities(false));
    }
  };

  const getLeaderboard = async () => {
    try {
      dispatch(setLoadingLeaderboard(true));
      const leaderboard = await api.fetchLeaderboard();

      dispatch(setLeaderboard(leaderboard));
    } catch (error: any) {
      //
    } finally {
      dispatch(setLoadingLeaderboard(false));
    }
  };

  const getTransactions = async (query?: string) => {
    try {
      dispatch(setLoadingTransactions(true));
      const response = await api.fetchTransactions(query);

      dispatch(setTransactions(response.data));

      if (response.meta) {
        dispatch(setTransactionMeta(response.meta));
      }
    } catch (error: any) {
      //
    } finally {
      dispatch(setLoadingTransactions(false));
    }
  };

  return {
    getEarning,
    getActivities,
    getLeaderboard,
    getTransactions,
  };
};

export default useEarnActions;

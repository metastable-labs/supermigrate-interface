'use client';

import { toast } from 'react-toastify';
import { Address } from 'viem';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import {
  setActivities,
  setEarning,
  setLeaderboard,
  setLoadingActivities,
  setLoadingEarning,
  setLoadingLeaderboard,
  setLoadingTransactions,
  setTransactionMeta,
  setTransactions,
  setLoadingClaimNFTEarnings,
  setFeaturedTokens,
  setLoadingFeaturedTokens,
} from '.';
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

  const claimNFTEarnings = async (address: Address) => {
    try {
      dispatch(setLoadingClaimNFTEarnings(true));
      await api.claimNFTEarnings(address);
      toast('Successfully claimed NFT earnings', {
        type: 'success',
      });
      await getActivities();
    } catch (error: any) {
      toast('Failed to claim NFT earnings', {
        type: 'error',
      });
    } finally {
      dispatch(setLoadingClaimNFTEarnings(false));
    }
  };

  const getFeaturedTokens = async () => {
    try {
      dispatch(setLoadingFeaturedTokens(true));
      const featuredTokens = await api.fetchFeaturedTokens();

      dispatch(setFeaturedTokens(featuredTokens));
    } catch (error: any) {
      //
    } finally {
      dispatch(setLoadingFeaturedTokens(false));
    }
  };

  return {
    getEarning,
    getActivities,
    getLeaderboard,
    getTransactions,
    claimNFTEarnings,
    getFeaturedTokens,
  };
};

export default useEarnActions;

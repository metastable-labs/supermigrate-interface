'use client';

import { toast } from 'react-toastify';
import { Address, formatEther } from 'viem';
import { readContract } from '@wagmi/core';

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
  setEarningPoints,
} from '.';
import api from './api';
import { wagmiConfig } from '@/config/privy/privy';
import { useAccount } from 'wagmi';
import { networks } from '@/config/privy/config';

const useEarnActions = () => {
  const { dispatch } = useSystemFunctions();
  const { chainId, address } = useAccount();

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

  const getUserPointDetails = async () => {
    try {
      // const currentNetwork = networks.find((chain) => chain.chainId === chainId);
      const currentNetwork = networks[0];

      if (!currentNetwork || !address) return;

      const result: any = await readContract(wagmiConfig, {
        abi: currentNetwork?.pointAbi,
        address: currentNetwork?.pointAddress!,
        functionName: 'getUserData',
        args: [address],
      });

      const point_balance = formatEther(result[0]);
      const last_claim_timestamp = formatEther(result[1]);
      const tier = result[2];
      const consecutive_weeks_claimed = result[3];

      dispatch(
        setEarningPoints({
          point_balance: Number(point_balance),
          last_claim_timestamp,
          tier,
          consecutive_weeks_claimed,
        }),
      );
    } catch (error: any) {
      console.log('====================', error?.message);
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
    getUserPointDetails,
  };
};

export default useEarnActions;

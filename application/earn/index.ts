'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Activity, Earnings, Leaderboard, Transaction, TransactionMeta, FeaturedToken } from './types';

export interface EarningState {
  loadingEarning: boolean;
  loadingLeaderboard: boolean;
  loadingTransactions: boolean;
  loadingActivities: boolean;
  loadingClaimNFTEarnings: boolean;
  loadingFeaturedTokens: boolean;
  earning: Earnings | undefined;
  transactions: Transaction[] | undefined;
  transactionMeta: TransactionMeta | undefined;
  activities: Activity[] | undefined;
  leaderboard: Leaderboard[] | undefined;
  featuredTokens: FeaturedToken[] | undefined;
}

const initialState: EarningState = {
  loadingEarning: false,
  loadingLeaderboard: false,
  loadingTransactions: false,
  loadingActivities: false,
  loadingClaimNFTEarnings: false,
  loadingFeaturedTokens: false,
  earning: undefined,
  transactions: undefined,
  transactionMeta: undefined,
  activities: undefined,
  leaderboard: undefined,
  featuredTokens: undefined,
};

export const earningReducer = createSlice({
  name: 'earning',
  initialState,
  reducers: {
    setLoadingEarning: (state, action: PayloadAction<boolean>) => {
      state.loadingEarning = action.payload;
    },

    setLoadingLeaderboard: (state, action: PayloadAction<boolean>) => {
      state.loadingLeaderboard = action.payload;
    },

    setLoadingTransactions: (state, action: PayloadAction<boolean>) => {
      state.loadingTransactions = action.payload;
    },

    setLoadingActivities: (state, action: PayloadAction<boolean>) => {
      state.loadingActivities = action.payload;
    },

    setLoadingClaimNFTEarnings: (state, action: PayloadAction<boolean>) => {
      state.loadingClaimNFTEarnings = action.payload;
    },

    setLoadingFeaturedTokens: (state, action: PayloadAction<boolean>) => {
      state.loadingFeaturedTokens = action.payload;
    },

    setEarning: (state, action: PayloadAction<Earnings | undefined>) => {
      if (action.payload) {
        state.earning = { ...action.payload };
      } else {
        state.earning = undefined;
      }
    },

    setTransactions: (state, action: PayloadAction<Transaction[] | undefined>) => {
      if (action.payload) {
        state.transactions = [...action.payload];
      } else {
        state.transactions = undefined;
      }
    },

    setTransactionMeta: (state, action: PayloadAction<TransactionMeta | undefined>) => {
      if (action.payload) {
        state.transactionMeta = { ...action.payload };
      } else {
        state.transactionMeta = undefined;
      }
    },

    setActivities: (state, action: PayloadAction<Activity[] | undefined>) => {
      if (action.payload) {
        state.activities = [...action.payload];
      } else {
        state.activities = undefined;
      }
    },

    setLeaderboard: (state, action: PayloadAction<Leaderboard[] | undefined>) => {
      if (action.payload) {
        state.leaderboard = [...action.payload];
      } else {
        state.leaderboard = undefined;
      }
    },

    setFeaturedTokens: (state, action: PayloadAction<FeaturedToken[] | undefined>) => {
      if (action.payload) {
        state.featuredTokens = [...action.payload];
      } else {
        state.featuredTokens = undefined;
      }
    },
  },
});

export const {
  setLoadingActivities,
  setLoadingEarning,
  setLoadingLeaderboard,
  setLoadingTransactions,
  setLoadingClaimNFTEarnings,
  setLoadingFeaturedTokens,
  setActivities,
  setEarning,
  setTransactionMeta,
  setTransactions,
  setLeaderboard,
  setFeaturedTokens,
} = earningReducer.actions;

export default earningReducer.reducer;

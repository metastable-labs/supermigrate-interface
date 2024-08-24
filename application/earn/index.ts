'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Activity, Earnings, Leaderboard, Transaction, TransactionMeta } from './types';

export interface EarningState {
  loadingEarning: boolean;
  loadingLeaderboard: boolean;
  loadingTransactions: boolean;
  loadingActivities: boolean;
  earning: Earnings | undefined;
  transactions: Transaction[] | undefined;
  transactionMeta: TransactionMeta | undefined;
  activities: Activity[] | undefined;
  leaderboard: Leaderboard[] | undefined;
}

const initialState: EarningState = {
  loadingEarning: false,
  loadingLeaderboard: false,
  loadingTransactions: false,
  loadingActivities: false,
  earning: undefined,
  transactions: undefined,
  transactionMeta: undefined,
  activities: undefined,
  leaderboard: undefined,
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
  },
});

export const { setLoadingActivities, setLoadingEarning, setLoadingLeaderboard, setLoadingTransactions, setActivities, setEarning, setTransactionMeta, setTransactions, setLeaderboard } =
  earningReducer.actions;

export default earningReducer.reducer;

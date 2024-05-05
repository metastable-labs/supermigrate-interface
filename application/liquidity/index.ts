'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Liquidity } from './types';

export interface LiquidityState {
  liquidities: Liquidity[];
  liquidity: Liquidity | undefined;
  loading: boolean;
  loadingLiquidity: boolean;
}

const initialState: LiquidityState = {
  liquidities: [],
  liquidity: undefined,
  loading: false,
  loadingLiquidity: false,
};

export const liquidityReducer = createSlice({
  name: 'liquidity',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setLoadingLiquidity: (state, action: PayloadAction<boolean>) => {
      state.loadingLiquidity = action.payload;
    },

    setLiquidities: (state, action: PayloadAction<Liquidity[]>) => {
      state.liquidities = [...state.liquidities, ...action.payload];
    },

    setLiquidity: (state, action: PayloadAction<Liquidity>) => {
      state.liquidity = { ...state.liquidity, ...action.payload };
    },
  },
});

export const { setLoading, setLiquidities, setLiquidity, setLoadingLiquidity } = liquidityReducer.actions;

export default liquidityReducer.reducer;

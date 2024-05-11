'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Migration } from './types';
import { set } from 'react-hook-form';

export interface MigrationState {
  migrations: Migration[];
  migration: Migration | undefined;
  loading: boolean;
  loadingMigration: boolean;
  addToBridgeLoading: boolean;
}

const initialState: MigrationState = {
  migrations: [],
  migration: undefined,
  loading: false,
  loadingMigration: false,
  addToBridgeLoading: false,
};

export const migrationReducer = createSlice({
  name: 'migration',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setLoadingMigration: (state, action: PayloadAction<boolean>) => {
      state.loadingMigration = action.payload;
    },

    setMigrations: (state, action: PayloadAction<Migration[]>) => {
      state.migrations = [...action.payload];
    },

    setMigration: (state, action: PayloadAction<Migration | undefined>) => {
      if (action.payload) {
        state.migration = { ...action.payload };
      } else {
        state.migration = undefined;
      }
    },

    setAddToBridgeLoading: (state, action: PayloadAction<boolean>) => {
      state.addToBridgeLoading = action.payload;
    },
  },
});

export const { setLoading, setMigrations, setMigration, setLoadingMigration, setAddToBridgeLoading } = migrationReducer.actions;

export default migrationReducer.reducer;

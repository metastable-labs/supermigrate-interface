"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Migration } from "./types";

export interface MigrationState {
  migrations: Migration[];
  migration: Migration | undefined;
  loading: boolean;
}

const initialState: MigrationState = {
  migrations: [],
  migration: undefined,
  loading: false,
};

export const migrationReducer = createSlice({
  name: "migration",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setMigrations: (state, action: PayloadAction<Migration[]>) => {
      state.migrations = [...state.migrations, ...action.payload];
    },

    setMigration: (state, action: PayloadAction<Migration>) => {
      state.migration = { ...state.migration, ...action.payload };
    },
  },
});

export const { setLoading, setMigrations, setMigration } =
  migrationReducer.actions;

export default migrationReducer.reducer;

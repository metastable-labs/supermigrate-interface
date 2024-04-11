"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Lang } from "./types";

export interface LocaleState {
  locale: Lang | undefined;
}

const initialState: LocaleState = {
  locale: undefined,
};

export const userReducer = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Lang>) => {
      state.locale = { ...state.locale, ...action.payload };
    },
  },
});

export const { setLocale } = userReducer.actions;

export default userReducer.reducer;

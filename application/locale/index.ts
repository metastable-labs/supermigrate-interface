'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import englishJson from '../../dictionaries/en.json';

import { Lang } from './types';

export interface LocaleState {
  locale: Lang;
}

const initialState: LocaleState = {
  locale: englishJson,
};

export const userReducer = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Lang>) => {
      state.locale = { ...state.locale, ...action.payload };
    },
  },
});

export const { setLocale } = userReducer.actions;

export default userReducer.reducer;

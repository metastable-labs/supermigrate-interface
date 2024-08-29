'use client';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';
import localeReducer from './locale';
import migrationReducer from './migration';
import liquidityReducer from './liquidity';
import earnReducer from './earn';

export interface CallbackProps {
  onSuccess?: Function;
  onError?: Function;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    locale: localeReducer,
    migration: migrationReducer,
    liquidity: liquidityReducer,
    earn: earnReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState}
export type AppDispatch = typeof store.dispatch;

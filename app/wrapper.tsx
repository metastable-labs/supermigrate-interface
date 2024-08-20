'use client';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { store } from '@/application/store';
import useConnect from '@/hooks/useConnect';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const {} = useConnect();

  const cookieOptions = {
    path: '/',
    expires: new Date(new Date().getTime() + 8 * 60 * 60 * 1000),
  };

  return (
    <CookiesProvider defaultSetOptions={cookieOptions}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </CookiesProvider>
  );
};

export default Wrapper;

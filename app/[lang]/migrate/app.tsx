'use client';
import React, { ReactNode } from 'react';

import { Tiles } from '@/public/icons';
import { NetworkProps, networks } from '@/config/rainbow/config';

interface PageProps {
  params: { network: NetworkProps };
  children: ReactNode;
}

const App = ({ params, children }: PageProps) => {
  return (
    <main>
      {children}
      <div className="flex justify-center fixed w-screen bottom-0 -z-10">
        <Tiles network={params.network} />
      </div>
    </main>
  );
};

export default App;

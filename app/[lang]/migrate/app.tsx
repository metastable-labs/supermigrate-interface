'use client';
import { ReactNode } from 'react';

import { Tiles } from '@/public/icons';
import { Network } from '@/config/rainbow/config';

interface PageProps {
  params: { network: Network };
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

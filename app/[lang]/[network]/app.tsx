'use client';
import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { Network } from '@/config/privy/config';

interface PageProps {
  params: { network: Network };
  children: ReactNode;
}

const defaultGradient = 'linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #CCCCCC 100%)';

const networkBackgrounds: Record<Network, string> = {
  base: 'linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #0052FF 100%)',
  optimism: 'linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #FF1636 100%)',
  mode: 'linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #CDFF00 100%)',
  scroll: 'linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #F1C087 100%)',
  linea: defaultGradient,
  zora: defaultGradient,
  'world-chain': defaultGradient,
  degen: defaultGradient,
};

const App = ({ params, children }: PageProps) => {
  const pathname = usePathname();

  const isLiquidityRoutes = pathname.includes('liquidity');

  useEffect(() => {
    if (isLiquidityRoutes) {
      document.body.classList.add('bg-peach-gradient');
    } else {
      document.body.classList.remove('bg-peach-gradient');
    }
  }, [isLiquidityRoutes]);

  return (
    <main>
      {children}
      {!isLiquidityRoutes && (
        <motion.div
          animate={{ backgroundImage: networkBackgrounds[params.network] }}
          className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center -z-10 opacity-10 transition-all duration-300 ease-in-out pointer-events-none"
        />
      )}
    </main>
  );
};

export default App;

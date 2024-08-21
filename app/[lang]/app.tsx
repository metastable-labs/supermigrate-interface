'use client';
import { ReactNode } from 'react';

import { LangParamProp } from '@/config/internationalization/i18n';
import AppHome from '.';
import { SMTiles } from '@/components';
import { usePathname } from 'next/navigation';
import { isHomePage } from '@/components/navigation';

const App = ({ locale, children }: { locale: LangParamProp; children: ReactNode }) => {
  const pathname = usePathname();
  const isHome = isHomePage(pathname);
  const isLiquidityRoutes = pathname.includes('liquidity');
  const isEarnRoutes = pathname.includes('earn');

  return (
    <>
      <AppHome locale={locale}>{children}</AppHome>
      {!isHome && !isLiquidityRoutes && !isEarnRoutes && (
        <div className="flex justify-center fixed w-screen bottom-0 -z-10">
          <SMTiles />
        </div>
      )}
    </>
  );
};

export default App;

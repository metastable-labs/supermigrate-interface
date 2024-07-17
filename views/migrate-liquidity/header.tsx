'use client';

import { SMClickAnimation } from '@/components';
import { Network } from '@/config/rainbow/config';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import useTruncateText from '@/hooks/useTruncateText';
import { HomeIcon, RightCarretLightIcon } from '@/public/icons';
import Link from 'next/link';
import { Address } from 'viem';

const Header = ({ network, tokenAddress, tokenSymbol }: { network: Network; tokenSymbol: string; tokenAddress: Address }) => {
  const { navigate } = useSystemFunctions();
  const address = useTruncateText(tokenAddress, 4, 4);

  return (
    <div className="pb-5 self-stretch items-center border-b border-primary-1350 mx-0 md:mx-8">
      <div className="w-full flex justify-start items-center gap-3 text-primary-1500 text-sm font-medium">
        <SMClickAnimation onClick={() => navigate.push('/dashboard')}>
          <HomeIcon />
        </SMClickAnimation>

        <RightCarretLightIcon />

        <SMClickAnimation>
          <Link href={`/${network}/liquidity`}>Pools</Link>
        </SMClickAnimation>

        <RightCarretLightIcon />

        <span className="pointer-events-none">
          {tokenSymbol}/ETH <span className="text-primary-2050">{address}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;

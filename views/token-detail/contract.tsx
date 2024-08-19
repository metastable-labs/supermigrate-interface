'use client';

import { useAccount } from 'wagmi';
import { Chain } from '@/application/migration/types';
import { CopySecondaryIcon } from '@/public/icons';
import { SMClickAnimation } from '@/components';
import useCopy from '@/hooks/useCopy';
import useSystemFunctions from '@/hooks/useSystemFunctions';

function truncateAddress(address: string) {
  return `${address.slice(0, 10)}...${address.slice(-10)}`;
}

const TokenContract = ({ chains }: { chains: Chain[] }) => {
  const copy = useCopy();
  const { chainId } = useAccount();
  const { locale } = useSystemFunctions();

  const { title } = locale.tokenDetail.tokenContract;

  const myChains = chains.filter((chain) => chain.id === chainId || chain.id === 1);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary-50 text-[16px] leading-[24.8px] md:text-[20px] md:leading-[31px]">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myChains.map((chain, index) => (
          <div key={index} className="p-4 border border-primary-2100 rounded-base flex items-center justify-between w-full bg-primary-2700">
            <div className="flex flex-col items-start gap-1.5 justify-center">
              <h3 className="text-primary-200 text-[12px] leading-[17.4px] capitalize">{chain.name}</h3>
              <h3 className="text-primary-300 text-sm font-medium hidden lg:block">{chain.token_address}</h3>
              <h3 className="text-primary-300 text-sm font-medium lg:hidden block">{truncateAddress(chain.token_address)}</h3>
            </div>
            <SMClickAnimation onClick={() => copy(chain.token_address)}>
              <CopySecondaryIcon />
            </SMClickAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenContract;

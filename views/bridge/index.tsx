'use client';
import { useAccount } from 'wagmi';

import { LangParamProp } from '@/config/internationalization/i18n';
import { SMButton } from '@/components';
import { ExclaimIcon } from '@/public/icons';
import { networks } from '@/config/privy/config';
import { acceptedBridgeNetworks } from './dummy';

const BridgeView = ({ lang }: LangParamProp) => {
  const { chainId } = useAccount();

  const currentNetwork = networks.find((item) => item.chainId === chainId);
  const network = currentNetwork?.title?.toLowerCase?.();

  const supported = acceptedBridgeNetworks.includes(network || '');

  if (!supported) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <div className="py-20 flex items-center justify-center bg-white rounded-[5px] border border-primary-1350 shadow-table-cta w-[343px] md:w-[448px]">
          <div className="flex flex-col gap-3.5 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center bg-very-light-gray rounded-full border-t border-primary-1700 p-4">
                <div className="flex items-center justify-center rounded-full border border-primary-250 bg-white p-[14px] shadow-fade-light">
                  <ExclaimIcon />
                </div>
              </div>

              <h1 className="text-primary-1750 text-[20px] leading-[30px] text-center">Network not supported</h1>
              <span className="text-primary-1500 text-[14px] leading-[24px] text-center">Superbridge doesn’t support this network</span>
            </div>

            <SMButton text="Switch network" network="base" onClick={() => {}} variant="plain" />
          </div>
        </div>
      </div>
    );
  }

  return <iframe src={`https://superbridge.app/${network}?graffiti=supermigrate`} className="w-full min-h-screen" onError={(e) => console.error('Iframe failed to load:', e)} />;
};

export default BridgeView;

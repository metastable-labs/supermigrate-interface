'use client';
import { disconnect } from '@wagmi/core';
import { useAccount } from 'wagmi';

import SMClickAnimation from '@/components/click-animation';
import useCopy from '@/hooks/useCopy';
import useTruncateText from '@/hooks/useTruncateText';
import { DisconnectIcon, CopyIcon, WalletIcon } from '@/public/icons';
import { wagmiConfig } from '@/config/rainbow/rainbowkit';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { Network } from '@/config/rainbow/config';

const WalletModal = ({ close, network }: { close: () => void; network: Network }) => {
  const copy = useCopy();
  const { address } = useAccount();
  const truncateWallet = useTruncateText((address as string) || '', 6, 6);
  const { navigate } = useSystemFunctions();

  const disconnectAction = () => {
    disconnect(wagmiConfig);
    close();
    navigate.replace(`/${network}/migrate`);
  };

  return (
    <div className="flex flex-col gap-6 min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium flex items-center gap-1">
        <WalletIcon />
        {truncateWallet}
      </h1>
      <div className="flex items-center justify-center gap-3">
        <SMClickAnimation className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-base" onClick={() => copy(address as string)}>
          <div className="flex flex-col items-center justify-center gap-2">
            <CopyIcon />
            <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">Copy address</span>
          </div>
        </SMClickAnimation>

        <SMClickAnimation className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-base" onClick={disconnectAction}>
          <div className="flex flex-col items-center justify-center gap-2">
            <DisconnectIcon />
            <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">Disconnect</span>
          </div>
        </SMClickAnimation>
      </div>
    </div>
  );
};

export default WalletModal;

import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useSwitchChain, useChainId, useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

import { SMClickAnimation } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { networks } from '@/config/rainbow/config';

const NetworkModal = ({ close }: { close: () => void }) => {
  const { navigate } = useSystemFunctions();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { isConnected, isDisconnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const pathname = usePathname();

  const handleOnClick = async (network: string, id: number) => {
    if (isDisconnected || !isConnected) {
      return openConnectModal && openConnectModal();
    }

    if (chainId === id) return close();

    try {
      await switchChain({ chainId: id });
      navigate.replace(`/migrate/${network.toLowerCase()}`);
      close();
    } catch (error) {
      // Handle exceptions that may occur during the switch
      console.error('Error switching chains:', error);
      alert('An error occurred while switching chains.');
    }
  };

  return (
    <div className="flex flex-col gap-[28px] min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium">Select chain</h1>

      <div className="flex flex-col md:min-w-80 flex-1 items-stretch gap-8">
        {networks?.map(({ icon, title, chainId }, index) => (
          <SMClickAnimation key={index} onClick={() => handleOnClick(title, chainId)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                {icon} <span className="capitalize text-[14px] leading-[21.7px] font-medium text-primary-50">{title}</span>
              </div>

              <div
                className={classNames('w-3 h-3 rounded-full transition-all duration-200', {
                  'bg-primary-1800': pathname.includes(title.toLowerCase()),
                })}
              />
            </div>
          </SMClickAnimation>
        ))}
      </div>
    </div>
  );
};

export default NetworkModal;

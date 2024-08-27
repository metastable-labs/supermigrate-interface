import classNames from 'classnames';
import { useAccount } from 'wagmi';
import { switchChain } from '@wagmi/core';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { networks } from '@/config/privy/config';
import { usePrivy } from '@privy-io/react-auth';
import useUserActions from '@/application/user/actions';
import { wagmiConfig } from '@/config/privy/privy';

const NetworkModal = ({ close }: { close: () => void }) => {
  const { navigate } = useSystemFunctions();
  const { chainId } = useAccount();
  const { ready, authenticated } = usePrivy();
  const { authenticateUser } = useUserActions();

  const handleOnClick = async (network: string, id: number) => {
    if (!authenticated && ready) {
      return authenticateUser();
    }

    if (chainId === id) return close();

    try {
      await switchChain(wagmiConfig, { chainId: id as 10 | 8453 | 34443 });
      navigate.replace(`/${network.toLowerCase()}/migrate`);

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
        {networks?.map(({ icon, title, chainId: id }, index) => (
          <div key={index} onClick={() => handleOnClick(title, id)} className="flex items-center justify-between hover:bg-primary-150 transition-colors duration-300 cursor-pointer py-2 px-5 -mx-5">
            <div className="flex items-center justify-center gap-2">
              {icon} <span className="capitalize text-[14px] leading-[21.7px] font-medium text-primary-50">{title}</span>
            </div>

            <div
              className={classNames('w-3 h-3 rounded-full transition-all duration-200', {
                'bg-primary-1800': chainId === id,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkModal;

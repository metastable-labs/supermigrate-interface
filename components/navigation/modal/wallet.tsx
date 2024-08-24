'use client';
import { useAccount } from 'wagmi';

import SMClickAnimation from '@/components/click-animation';
import useCopy from '@/hooks/useCopy';
import useTruncateText from '@/hooks/useTruncateText';
import { DisconnectIcon, CopyIcon, WalletIcon } from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { Network } from '@/config/privy/config';
import { usePrivy } from '@privy-io/react-auth';
import { useCookies } from 'react-cookie';
import { setTokenHeader } from '@/utils/axios';
import { setUser } from '@/application/user';
import { setMigration, setMigrations } from '@/application/migration';

const WalletModal = ({ close, network }: { close: () => void; network: Network }) => {
  const copy = useCopy();
  const { dispatch } = useSystemFunctions();
  const { address } = useAccount();
  const { ready, authenticated, logout } = usePrivy();
  const [cookies, setCookies, removeCookie] = useCookies(['authtoken', 'isGithubConnected']);

  const { truncatedText } = useTruncateText((address as string) || '', 6, 6);
  const { navigate } = useSystemFunctions();

  const disconnectAction = async () => {
    if (authenticated && !ready) return;

    await logout();
    await removeCookie('authtoken');
    await removeCookie('isGithubConnected');
    await setTokenHeader();
    dispatch(setUser(undefined));
    dispatch(setMigrations([]));
    dispatch(setMigration(undefined));

    close();
    navigate.replace(`/dashboard`);
  };

  return (
    <div className="flex flex-col gap-6 min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium flex items-center gap-1">
        <WalletIcon />
        {truncatedText}
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

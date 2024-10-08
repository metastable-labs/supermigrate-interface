import { useCookies } from 'react-cookie';

import SMClickAnimation from '@/components/click-animation';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { DisconnectIcon, GitHubMobileIcon } from '@/public/icons';
import { setTokenHeader } from '@/utils/axios';
import { setUser } from '@/application/user';
import { setMigration, setMigrations } from '@/application/migration';
import { usePrivy } from '@privy-io/react-auth';

const AccountModal = ({ close }: { close: () => void }) => {
  const { userState, dispatch } = useSystemFunctions();
  const { ready, authenticated, logout } = usePrivy();
  const [cookies, setCookies, removeCookie] = useCookies(['authtoken']);

  const action = async () => {
    if (authenticated && !ready) return;

    await logout();
    await removeCookie('authtoken');
    await setTokenHeader();
    dispatch(setUser(undefined));
    dispatch(setMigrations([]));
    dispatch(setMigration(undefined));
    close();
  };

  const modalTitle = `@${userState?.user?.name}`;

  return (
    <div className="flex flex-col gap-6 min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium flex items-center gap-1">
        <GitHubMobileIcon />
        {modalTitle}
      </h1>
      <SMClickAnimation className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-base" onClick={action}>
        <div className="flex flex-col items-center justify-center gap-2">
          <DisconnectIcon />
          <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">Disconnect</span>
        </div>
      </SMClickAnimation>
    </div>
  );
};

export default AccountModal;

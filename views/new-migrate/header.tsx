'use client';

import { SMClickAnimation } from '@/components';
import { Network } from '@/config/privy/config';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { HomeIcon, RightCarretLightIcon } from '@/public/icons';

const NewMigrateHeader = ({ title, network }: { title: string; network: Network }) => {
  const { navigate, locale } = useSystemFunctions();
  const { first } = locale.newMigration.navigation;

  const handleMigrateClick = () => {
    if (window.history.length > 2) {
      navigate.back();
    } else {
      navigate.replace(`/${network}/migrate`);
    }
  };

  return (
    <div className="pb-5 self-stretch items-center border-b border-primary-1350">
      <div className="w-full flex justify-start items-center gap-3 text-primary-1500 text-sm font-medium">
        <SMClickAnimation onClick={() => navigate.push('/dashboard')}>
          <HomeIcon />
        </SMClickAnimation>

        <RightCarretLightIcon />

        <SMClickAnimation onClick={handleMigrateClick}>{first}</SMClickAnimation>

        <RightCarretLightIcon />

        <span className="pointer-events-none">{title}</span>
      </div>
    </div>
  );
};

export default NewMigrateHeader;

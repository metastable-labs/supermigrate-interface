'use client';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { HomeIcon, RightCarretLightIcon } from '@/public/icons';

const NewMigrateHeader = ({ title = 'New Migration' }: { title?: string }) => {
  const { navigate } = useSystemFunctions();

  return (
    <div className="pb-5 self-stretch items-center border-b border-primary-1350">
      <div className="w-full flex justify-start items-center gap-3 text-primary-1500 text-sm font-medium">
        <div className="cursor-pointer" onClick={() => navigate.push('/migrate')}>
          <HomeIcon />
        </div>

        <RightCarretLightIcon />

        <span className="cursor-pointer" onClick={() => navigate.back()}>
          Migrate
        </span>

        <RightCarretLightIcon />

        <span className="pointer-events-none">{title}</span>
      </div>
    </div>
  );
};

export default NewMigrateHeader;

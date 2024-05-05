'use client';
import { useEffect, useState } from 'react';

import { GithubButtonIcon, MigrateLinkIcon, LiquidityLinkIcon } from '@/public/icons';
import { SMButton } from '..';
import useScreenDetect from '@/hooks/useScreenDetect';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { EmptyStateProps } from './types';

const EmptyState = ({ isConnected, network, variant = 'primary', action }: EmptyStateProps) => {
  const { isMobile } = useScreenDetect();
  const { navigate, pathname } = useSystemFunctions();
  const [path, setPath] = useState('');

  const buttonText = isConnected ? (variant === 'primary' ? 'new migration' : 'new liquidity') : 'connect gitHub';
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=Iv1.c178abebc418bb02&redirect_uri=http://${path}`;

  const handleButton = () => {
    if (isConnected && variant === 'primary') {
      return navigate.push(`/migrate/${network}/new`);
    }

    if (isConnected && variant === 'secondary') {
      return action?.();
    }
    if (!isConnected) {
      return (window.location.href = githubAuthUrl);
    }
  };

  useEffect(() => {
    if (!window) return;

    const url = window.location.host + pathname;
    const regex = /(?<=\/)[a-z]{2}\//;
    const removeLanguagePath = url.replace(regex, '');

    setPath(removeLanguagePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[14px] flex-1 px-3 py-20">
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center bg-very-light-gray rounded-full border-t border-primary-1700 p-[12.73px] md:p-4">
          <div className="flex items-center justify-center rounded-full border border-primary-250 bg-white p-[11.136px] md:p-[14px] shadow-fade-light">
            {!isConnected && <GithubButtonIcon color="#525866" width={isMobile ? '22.273' : '28'} height={isMobile ? '22.273' : '28'} />}

            {isConnected && variant === 'primary' && <MigrateLinkIcon width={28} height={28} />}
            {isConnected && variant === 'secondary' && <LiquidityLinkIcon width={28} height={28} />}
          </div>
        </div>

        <h1 className="text-primary-1750 text-[20px] leading-[30px] text-center font-medium">
          {isConnected && variant === 'primary' && 'No migrations yet'}
          {isConnected && variant === 'secondary' && 'No Liquidities yet'}
          {!isConnected && 'Connect GitHub'}
        </h1>
        <span className="text-primary-1500 text-[14px] leading-[24px] text-center">
          {isConnected && variant === 'primary' && 'You haven’t done any migrations, new migrations will show here'}
          {isConnected && variant === 'secondary' && 'You haven’t added any liquidity yet, new liquidities will show here'}
          {!isConnected && 'Connect your GitHub to see your migrations'}
        </span>
      </div>

      <SMButton network={network} onClick={handleButton} text={buttonText} variant={isConnected ? 'new' : 'git'} />
    </div>
  );
};

export default EmptyState;

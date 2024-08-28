import classNames from 'classnames';

import { SMClickAnimation } from '@/components';
import {
  BaseSecondaryDesktopIcon,
  BaseSecondaryMobileIcon,
  OptimismDesktopIcon,
  OptimismMobileIcon,
  ModeDesktopIcon,
  ModeMobileIcon,
  ScrollDesktopIcon,
  ScrollMobileIcon,
  LineaIcon,
  ZoraIcon,
  WorldChainIcon,
  DegenIcon,
  RaysIcon,
} from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { Network, NetworkProps } from '@/config/privy/config';
import useUserActions from '@/application/user/actions';
import { usePrivy } from '@privy-io/react-auth';

const IconSection = ({ variant, comingSoon }: { variant: Network; comingSoon?: boolean }) => {
  const { locale } = useSystemFunctions();
  const { comingSoon: comingSoonText } = locale;
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      {comingSoon && (
        <div className="flex items-center px-2 py-[2px] bg-primary-2550 rounded-full">
          <span className="text-[8px] leading-[12px] font-medium tracking-[0.16px] capitalize text-white whitespace-nowrap">{comingSoonText}</span>
        </div>
      )}

      <div className="hidden md:flex">
        {variant === 'base' && <BaseSecondaryDesktopIcon />}
        {variant === 'optimism' && <OptimismDesktopIcon />}
        {variant === 'mode' && <ModeDesktopIcon />}
        {variant === 'scroll' && <ScrollDesktopIcon />}
        {variant === 'linea' && <LineaIcon />}
        {variant === 'zora' && <ZoraIcon />}
        {variant === 'world-chain' && <WorldChainIcon />}
        {variant === 'degen' && <DegenIcon />}
      </div>

      <div className="flex md:hidden">
        {variant === 'base' && <BaseSecondaryMobileIcon />}
        {variant === 'optimism' && <OptimismMobileIcon />}
        {variant === 'mode' && <ModeMobileIcon />}
        {variant === 'scroll' && <ScrollMobileIcon />}
        {variant === 'linea' && <LineaIcon />}
        {variant === 'zora' && <ZoraIcon />}
        {variant === 'world-chain' && <WorldChainIcon />}
        {variant === 'degen' && <DegenIcon />}
      </div>
    </div>
  );
};

const SMCard = ({ title, variant = 'base', chainId: id, comingSoon }: NetworkProps) => {
  const { navigate } = useSystemFunctions();
  const { authenticateUser } = useUserActions();
  const { ready, authenticated } = usePrivy();

  const handleOnClick = async () => {
    if (!authenticated && ready) {
      return authenticateUser();
    }

    return navigate.push(`${variant}/migrate`);
  };

  return (
    <SMClickAnimation
      onClick={handleOnClick}
      className={classNames('w-full lg:w-[170px] h-[208px]', {
        'pointer-events-none': comingSoon,
      })}>
      <div
        className={classNames('flex flex-col items-center gap-2 rounded-base border-[0.701px] border-primary-250 h-full px-12 py-[54px]', {
          'bg-primary-400': variant === 'base',
          'bg-primary-450': variant === 'optimism',
          'bg-primary-500': variant === 'mode',
          'bg-primary-550': variant === 'scroll',
          'bg-primary-2350': variant === 'linea',
          'bg-primary-2400 relative': variant === 'zora',
          'bg-black': variant === 'world-chain',
          'bg-primary-2450': variant === 'degen',
          'pt-4 justify-between': comingSoon,
          'justify-center': !comingSoon,
        })}>
        <IconSection comingSoon={comingSoon} variant={variant} />

        <span
          className={classNames('font-bold text-[14px] leading-[21.7px] text-center whitespace-nowrap', {
            'text-white': variant === 'base' || variant === 'optimism' || variant === 'linea' || variant === 'zora' || variant === 'world-chain' || variant === 'degen',
            'text-black': variant === 'mode',
            'text-primary-600': variant === 'scroll',
          })}>
          {title}
        </span>

        {variant === 'zora' && (
          <div className="absolute top-0 left-0 hidden lg:flex">
            <RaysIcon />
          </div>
        )}
      </div>
    </SMClickAnimation>
  );
};

export default SMCard;

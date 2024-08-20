'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useAccount } from 'wagmi';
import { useCookies } from 'react-cookie';

import Left from './left';
import Right from './right';
import Menu from './menu';
import { BridgeLinkIcon, LiquidityLinkIcon, MigrateLinkIcon } from '@/public/icons';
import { networks } from '@/config/privy/config';
import { INavActions, INavLinks } from './types';
import SMModal from '../modal';
import { ModalType } from './modal/types';
import AccountModal from './modal/account';
import WalletModal from './modal/wallet';
import NetworkModal from './modal/network';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import useUserActions from '@/application/user/actions';
import { usePrivy } from '@privy-io/react-auth';

export const isHomePage = (path: string): boolean => {
  const homePageRegex = /^\/[a-z]{2}\/?$/;
  return homePageRegex.test(path);
};

const SMNavigation = () => {
  const { address, chainId } = useAccount();
  const [cookies] = useCookies(['authtoken']);

  const { authenticateUser } = useUserActions();
  const { ready, authenticated, logout } = usePrivy();
  const { userState, locale } = useSystemFunctions();

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();

  const isHome = isHomePage(pathname);
  const { user } = userState;
  const { bridge, connect, liquidity, migrate } = locale.navigation;
  const connectedNetwork = networks.find((chain) => chain.chainId === chainId);
  const network = connectedNetwork?.variant || 'base';

  const links: INavLinks = [
    {
      title: migrate,
      icon: <MigrateLinkIcon />,
      href: '/migrate',
      isActive: false,
    },
    {
      title: bridge,
      icon: <BridgeLinkIcon />,
      href: '/bridge',
      isActive: false,
    },
    {
      title: liquidity,
      icon: <LiquidityLinkIcon />,
      href: '/liquidity',
      isActive: false,
    },
  ];

  const updatedLinks = links?.map((link) => {
    const updatedHref = `/${network}${link.href}`;
    const regex = new RegExp(`^/[a-z]{2}/${network}${link.href}$`);
    return {
      ...link,
      href: updatedHref,
      isActive: regex.test(pathname),
    };
  });

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeModal = () => setModalType(undefined);

  const handleModal = (type: ModalType) => {
    if (type === 'wallet' && ready && (!authenticated || !address)) {
      return authenticateUser();
    }

    setModalType(type);
  };

  const actionItems: INavActions = [
    {
      text: cookies.authtoken ? user?.name : undefined,
      variant: 'account',
    },
    {
      variant: 'network',
    },
    {
      text: authenticated && address ? address : connect,
      variant: 'wallet',
    },
  ];

  return (
    <>
      <div
        className={classNames('fixed w-screen z-10 flex justify-center items-center md:pt-0 bg-white border-b border-primary-250', {
          hidden: isHome,
        })}>
        <nav className="flex-1 flex bg-white px-4 py-[14px] md:px-11 md:py-5 items-center justify-between relative">
          <Left links={updatedLinks} />
          <Right menuOpen={menuOpen} toggleMenu={toggleMenu} actionItems={actionItems} handleModal={handleModal} />

          <Menu menuOpen={menuOpen} links={updatedLinks} actionItems={actionItems} handleModal={handleModal} />
        </nav>

        <SMModal show={Boolean(modalType)} close={closeModal}>
          {modalType === 'account' && <AccountModal close={closeModal} />}
          {modalType === 'wallet' && <WalletModal close={closeModal} network={network} />}
          {modalType === 'network' && <NetworkModal close={closeModal} />}
        </SMModal>
      </div>
      {!isHome && <div className="h-[123px] md:h-[82px]" />}
    </>
  );
};

export default SMNavigation;

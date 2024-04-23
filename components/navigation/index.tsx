"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import Left from "./left";
import Right from "./right";
import Menu from "./menu";
import {
  BridgeLinkIcon,
  LiquidityLinkIcon,
  MigrateLinkIcon,
} from "@/public/icons";
import { INavActions, INavLinks } from "./types";
import SMModal from "../modal";
import { ModalType } from "./modal/types";
import AccountModal from "./modal/account";
import WalletModal from "./modal/wallet";
import NetworkModal from "./modal/network";

const isHomePage = (path: string): boolean => {
  const homePageRegex = /^\/[a-z]{2}\/?$/;
  return homePageRegex.test(path);
};

const links: INavLinks = [
  {
    title: "Migrate",
    icon: <MigrateLinkIcon />,
    href: "/migrate",
    isActive: false,
  },
  {
    title: "Bridge",
    icon: <BridgeLinkIcon />,
    href: "/bridge",
    isActive: false,
  },
  {
    title: "Liquidity",
    icon: <LiquidityLinkIcon />,
    href: "/liquidity",
    isActive: false,
  },
];

const actionItems: INavActions = [
  {
    text: "Meister",
    onClick: () => {},
    variant: "account",
  },
  {
    onClick: () => {},
    variant: "network",
  },
  {
    text: "0x1234567890abcdef1234567890abcdef12345678",
    onClick: () => {},
    variant: "wallet",
  },
];

const SMNavigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();

  const isHome = isHomePage(pathname);

  const updatedLinks = links?.map((link) => {
    const regex = new RegExp(`^/[a-z]{2}${link.href}`);
    return {
      ...link,
      isActive: regex.test(pathname),
    };
  });

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeModal = () => setModalType(undefined);

  const handleModal = (type: ModalType) => setModalType(type);

  return (
    <>
      <div
        className={classNames(
          "fixed w-screen z-10 flex justify-center items-center pt-[55.013px] md:pt-0 bg-white",
          {
            hidden: isHome,
          }
        )}
      >
        <nav className="flex-1 flex bg-white px-4 py-[14px] md:px-11 md:py-5 items-center justify-between relative">
          <Left links={updatedLinks} />
          <Right
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            actionItems={actionItems}
            handleModal={handleModal}
          />

          <Menu
            menuOpen={menuOpen}
            links={updatedLinks}
            actionItems={actionItems}
            handleModal={handleModal}
          />
        </nav>

        <SMModal show={Boolean(modalType)} close={closeModal}>
          {modalType === "account" && <AccountModal close={closeModal} />}
          {modalType === "wallet" && <WalletModal close={closeModal} />}
          {modalType === "network" && <NetworkModal close={closeModal} />}
        </SMModal>
      </div>
      <div className="h-[123px] md:h-[82px]" />
    </>
  );
};

export default SMNavigation;

import { useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import Left from "./left";
import Right from "./right";
import Menu from "./menu";
import {
  BridgeLinkIcon,
  GitHubDesktopIcon,
  GitHubMobileIcon,
  BasePrimaryDesktopIcon,
  BasePrimaryMobileIcon,
  LiquidityLinkIcon,
  MigrateLinkIcon,
  VerifiedIcon,
} from "@/public/icons";
import { INavActions, INavLinks } from "./types";

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
    primaryDesktopIcon: <GitHubDesktopIcon />,
    primaryMobileIcon: <GitHubMobileIcon />,
    onClick: () => {},
  },
  {
    primaryDesktopIcon: <BasePrimaryDesktopIcon />,
    primaryMobileIcon: <BasePrimaryMobileIcon />,
    onClick: () => {},
  },
  {
    text: "0x1234567890abcdef1234567890abcdef12345678",
    isWallet: true,
    secondaryIcon: <VerifiedIcon />,
    onClick: () => {},
  },
];

const SMNavigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = isHomePage(pathname);

  const updatedLinks = links?.map((link) => {
    const regex = new RegExp(`^/[a-z]{2}${link.href}`);
    return {
      ...link,
      isActive: regex.test(pathname),
    };
  });

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div
      className={classNames(
        "fixed w-screen flex justify-center items-center pt-[55.013px] md:pt-0 bg-white",
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
        />
        <Menu
          menuOpen={menuOpen}
          links={updatedLinks}
          actionItems={actionItems}
        />
      </nav>
    </div>
  );
};

export default SMNavigation;

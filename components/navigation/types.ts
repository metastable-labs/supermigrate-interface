import { ReactElement } from "react";

interface INavLink {
  title: string;
  icon: ReactElement;
  href: string;
  isActive: boolean;
}

type INavLinks = INavLink[];

interface INavAction {
  primaryMobileIcon?: ReactElement;
  primaryDesktopIcon?: ReactElement;
  secondaryIcon?: ReactElement;
  text?: string;
  isWallet?: boolean;
  onClick: () => void;
}

type INavActions = INavAction[];

// Export all types
export type { INavLinks, INavLink, INavActions, INavAction };

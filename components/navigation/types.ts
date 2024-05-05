import { ReactElement } from 'react';
import { ModalType } from './modal/types';

interface INavLink {
  title: string;
  icon: ReactElement;
  href: string;
  isActive: boolean;
}

type INavLinks = INavLink[];

interface INavAction {
  text?: string;
  variant: ModalType;
  onClick?: () => void;
}

type INavActions = INavAction[];

// Export all types
export type { INavLinks, INavLink, INavActions, INavAction };

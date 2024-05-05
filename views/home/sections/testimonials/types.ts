import { ReactElement } from 'react';

interface ISocialLink {
  text: string;
  icon: ReactElement;
  link: string;
  isMobile?: boolean;
}

export type { ISocialLink };

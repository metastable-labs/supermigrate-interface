import { ReactElement } from 'react';

interface InfoProps {
  title: string;
  value: number;
  hasIcon?: boolean;
  textRight?: boolean;
}

type BadgeType = 'primary' | 'secondary';
type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'mint' | 'plain';

interface Badge {
  text: string;
  type?: BadgeType;
  variant?: BadgeVariant;
}

interface ActionProps {
  title: string;
  titleAlt?: string;
  titleBadge?: Badge;
  subtitle?: string;
  badges?: Badge[];
  hasWarning?: boolean;
  buttonText: string;
  action: () => void;
  icon?: ReactElement;
}

interface ReferralsSectionProps {
  copy: (text: string) => void;
}

export type { InfoProps, ActionProps, Badge, BadgeType, BadgeVariant, ReferralsSectionProps };

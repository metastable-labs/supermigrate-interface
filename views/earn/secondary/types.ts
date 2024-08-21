import { ReactElement } from 'react';
import { Address } from 'viem';

interface InfoProps {
  title: string;
  value: string | number;
  subtitle?: string;
  flushLeft?: boolean;
}

type BadgeType = 'primary' | 'secondary';
type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'mint' | 'plain';

interface Badge {
  text: string;
  mobileText?: string;
  type?: BadgeType;
  variant?: BadgeVariant;
}

interface ActionProps {
  title: string;
  mobileTitle?: string;
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
  referrals: number;
  points: number;
  link: string;
}

interface DashStatsProps {
  points: number;
  tier: 'bronze' | 'silver' | 'gold';
  xpEarned: number;
  multiplier: number;
}

interface LeaderboardTableData {
  address: Address;
  points: number;
  xpEarned: number;
}

interface LeaderboardTableProps {
  data: LeaderboardTableData[];
  loading?: boolean;
}

export type { InfoProps, ActionProps, Badge, BadgeType, BadgeVariant, ReferralsSectionProps, DashStatsProps, LeaderboardTableProps, LeaderboardTableData };

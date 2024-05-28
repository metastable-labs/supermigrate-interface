import { ActionProps } from './types';
import { BTCIcon, TokenomyIcon, SoftdaoIcon, POKTIcon } from '@/public/icons';

const activities: ActionProps[] = [
  {
    title: 'Bridge on Supermigrate',
    subtitle: 'All users on Supermigrate bridging through the bridge interface on supermigrate will earn points.',
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: '1.5x Migrate PTS multipliers for featured tokens',
        type: 'primary',
        variant: 'primary',
      },
      {
        text: '3x Migrate PTS multiplier for tokens that migrated using Supermigrate',
        type: 'primary',
        variant: 'secondary',
      },
    ],
    hasWarning: true,
  },
  {
    title: 'Social Interaction',
    titleBadge: {
      text: '250 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'Users who follow Supermigrate twitter account will receive 250 Migrate Points.',
    buttonText: 'Follow',
    action: () => {},
    badges: [
      {
        text: '1x PTS multipliers for Verified account',
        type: 'primary',
        variant: 'primary',
      },
      {
        text: '2x PTS multiplier for accounts above 2,000 followers',
        type: 'primary',
        variant: 'tertiary',
      },
    ],
  },
  {
    title: 'The Great Migration NFT',
    titleBadge: {
      text: '500 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'Users who mint The Great Migration NFT will receive 500 Migrate points',
    buttonText: 'Mint',
    action: () => {},
  },
  {
    title: 'Referral',
    titleBadge: {
      text: '250 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'Users who refer their friends will get 10% of the points your referrals earn.',
    buttonText: 'Copy',
    action: () => {},
    badges: [
      {
        text: '10% of points from referrals',
        type: 'primary',
        variant: 'primary',
      },
    ],
  },
];

const featuredTokens: ActionProps[] = [
  {
    title: 'HarryPotter ObamaSonic 10 Inu',
    titleAlt: '$BITCOIN',
    icon: <BTCIcon />,
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        type: 'secondary',
        variant: 'mint',
      },
    ],
  },
  {
    title: 'Tokenomy',
    titleAlt: '$TEN',
    icon: <TokenomyIcon />,
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        type: 'secondary',
        variant: 'mint',
      },
    ],
  },
  {
    title: 'POKT',
    titleAlt: '$POKT',
    icon: <POKTIcon />,
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        type: 'secondary',
        variant: 'mint',
      },
    ],
  },
  {
    title: 'Softdao',
    titleAlt: '$SOFT',
    icon: <SoftdaoIcon />,
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
    ],
  },
];

export { activities, featuredTokens };

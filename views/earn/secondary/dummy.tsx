import { TableItem } from '@/components/table/types';
import { ActionProps, LeaderboardTableData } from './types';
import { BTCIcon, TokenomyIcon, SoftdaoIcon, POKTIcon } from '@/public/icons';

const activities: ActionProps[] = [
  {
    title: 'Bridge',
    titleBadge: {
      text: '500 PTS',
      mobileText: '500 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'All users on Supermigrate bridging through the bridge interface on supermigrate will earn  500 points for every $1 bridged.',
    buttonText: 'Bridge',
    action: () => {},
    badges: [
      {
        text: '1.5x Migrate PTS multipliers for featured tokens',
        mobileText: '1.5x PTS multiplier for featured tokens',
        type: 'primary',
        variant: 'primary',
      },
      {
        text: '3x Migrate PTS multiplier for tokens that migrated using Supermigrate',
        mobileText: '3x PTS multiplier for Supermigrate tokens',
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
      mobileText: '250 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'Users who follow Supermigrate twitter account will receive 250 Migrate Points.',
    buttonText: 'Follow',
    action: () => {},
    badges: [
      {
        text: '1x PTS multipliers for Verified account',
        mobileText: '1x PTS multipliers Verified account',
        type: 'primary',
        variant: 'primary',
      },
      {
        text: '2x PTS multiplier for accounts above 2,000 followers',
        mobileText: '2x PTS multiplier accounts with 2k followers',
        type: 'primary',
        variant: 'tertiary',
      },
    ],
  },
  {
    title: 'The Great Migration NFT',
    mobileTitle: 'TGM NFT',
    titleBadge: {
      text: '500 PTS',
      mobileText: '500 PTS',
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
      mobileText: '250 PTS',
      type: 'primary',
      variant: 'mint',
    },
    subtitle: 'Users who refer their friends will get 10% of the points your referrals earn.',
    buttonText: 'Copy',
    action: () => {},
  },
  {
    title: 'Liquidity Migration',
    titleBadge: {
      text: '1000 PTS',
      mobileText: '1000 PTS',
      type: 'primary',
      variant: 'tertiary',
    },
    subtitle: 'Users who migrate Liquidity will receive 1000 points for every $1 worth of Liquidity migrated.',
    buttonText: 'Migrate Liquidity',
    action: () => {},
    badges: [
      {
        text: '2.5x Migrate point multipliers for users who opt in to stake LP tokens.',
        mobileText: '2.5x point multipliers for users who opt in to stake LP tokens.',
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
        mobileText: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        mobileText: 'Migrated with Supermigrate',
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
        mobileText: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        mobileText: 'Migrated with Supermigrate',
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
        mobileText: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
      {
        text: 'Migrated with Supermigrate',
        mobileText: 'Migrated with Supermigrate',
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
        mobileText: 'Migrate Points',
        type: 'primary',
        variant: 'plain',
      },
    ],
  },
];

const leaderBoard: LeaderboardTableData[] = [
  {
    address: '0x1234567890123456789012345678901234567890',
    points: 1000,
    xpEarned: 100,
  },
  {
    address: '0x2345678901234567890123456789012345678901',
    points: 1950,
    xpEarned: 950,
  },
  {
    address: '0x3456789012345678901234567890123456789012',
    points: 1900,
    xpEarned: 900,
  },
  {
    address: '0x4567890123456789012345678901234567890123',
    points: 1850,
    xpEarned: 850,
  },
  {
    address: '0x5678901234567890123456789012345678901234',
    points: 1800,
    xpEarned: 800,
  },
  {
    address: '0x6789012345678901234567890123456789012345',
    points: 1750,
    xpEarned: 750,
  },
  {
    address: '0x7890123456789012345678901234567890123456',
    points: 1700,
    xpEarned: 700,
  },
  {
    address: '0x8901234567890123456789012345678901234567',
    points: 1650,
    xpEarned: 650,
  },
  {
    address: '0x9012345678901234567890123456789012345678',
    points: 1600,
    xpEarned: 600,
  },
  {
    address: '0xA123456789012345678901234567890123456789',
    points: 1550,
    xpEarned: 550,
  },
  {
    address: '0xB234567890123456789012345678901234567890',
    points: 1500,
    xpEarned: 500,
  },
  {
    address: '0xC345678901234567890123456789012345678901',
    points: 1450,
    xpEarned: 450,
  },
  {
    address: '0xD456789012345678901234567890123456789012',
    points: 1400,
    xpEarned: 400,
  },
  {
    address: '0xE567890123456789012345678901234567890123',
    points: 1350,
    xpEarned: 350,
  },
  {
    address: '0xF678901234567890123456789012345678901234',
    points: 1300,
    xpEarned: 300,
  },
];

export { activities, featuredTokens, leaderBoard };

import { TableItem } from '@/components/table/types';
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
        mobileText: '1.5x PTS multiplier for featured tokens',
        type: 'primary',
        variant: 'primary',
        fullWidth: true,
      },
      {
        text: '3x Migrate PTS multiplier for tokens that migrated using Supermigrate',
        mobileText: '3x PTS multiplier for Supermigrate tokens',
        type: 'primary',
        variant: 'secondary',
        fullWidth: true,
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
        text: '1x PTS multipliers Verified account',
        mobileText: '1x PTS multipliers Verified account',
        type: 'primary',
        variant: 'primary',
      },
      {
        text: '2x PTS multiplier for accounts above 2,000 followers',
        mobileText: '2x PTS multiplier accounts with 2k followers',
        type: 'primary',
        variant: 'tertiary',
        fullWidth: true,
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
    badges: [
      {
        text: '10% of points from referrals',
        mobileText: '10% of points from referrals',
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

const leaderBoard: TableItem[] = [
  {
    tokenAddress: '0xa04f6b6b21bff727260edb156b65e03041652706',
    points: 245678,
  },
  {
    tokenAddress: '0xb15e6b1b32cff637361feb267c76f04051763817',
    points: 123456,
  },
  {
    tokenAddress: '0xc26f7b2c43dff747462fec278d87g05162874928',
    points: 987654,
  },
  {
    tokenAddress: '0xd37g8b3d54eff857573fed289e98h06273985039',
    points: 543210,
  },
  {
    tokenAddress: '0xe48h9b4e65gff967684gfe390f09i07384a96150',
    points: 678901,
  },
  {
    tokenAddress: '0xf59i0b5f76hff077795hgf401g10j08495b07261',
    points: 112233,
  },
  {
    tokenAddress: '0xg6aj1b6g87iff1878a6hfh512h21k095a1b18372',
    points: 445566,
  },
  {
    tokenAddress: '0xh7bk2b7h98jff2979b7ihg623i32l0a5b2c29483',
    points: 789012,
  },
  {
    tokenAddress: '0xi8cl3c8i09kff3a0ac8jih734j43m1b6c3d30594',
    points: 234567,
  },
  {
    tokenAddress: '0xj9dm4d9j10lff4b1bd9kjh845k54n2c7d4e41605',
    points: 890123,
  },
  {
    tokenAddress: '0xkaen5e0k21mff5c2ceakli956l65o3d8e5f52716',
    points: 345678,
  },
];

export { activities, featuredTokens, leaderBoard };

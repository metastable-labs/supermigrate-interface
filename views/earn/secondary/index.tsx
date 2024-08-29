'use client';

import classNames from 'classnames';
import moment from 'moment';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';

import { Network } from '@/config/privy/config';
import useCopy from '@/hooks/useCopy';
import { CopyIcon, DesktopEarnWelcome, FlashIcon, Logo, MobileEarnWelcome, StarIcon } from '@/public/icons';
import { SMClickAnimation, SMTable } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import useCountdown from '@/hooks/useCountdown';
import useEarnActions from '@/application/earn/actions';
import { formatDecimalNumber } from '@/utils/helpers';
import Action, { ActionSkeleton } from './action';
import { ActionProps, InfoProps } from './types';
import LeaderboardTable from './leaderboard-table';
import { getActivityButtonText } from './utils';

const DashStats = () => {
  const { earnState } = useSystemFunctions();

  const { earning } = earnState;
  const { consecutive_weeks_claimed, point_balance, tier, last_claim_timestamp } = earning || {};

  const userTier = !tier || tier == 0 ? 'bronze' : tier == 1 ? 'silver' : 'gold';

  const migrate_points = formatDecimalNumber(point_balance || 0).value;

  const now = moment();
  const lastClaimMoment = moment.unix(last_claim_timestamp! || 0);
  const hoursSinceLastClaim = now.diff(lastClaimMoment, 'hours');
  const disableClaim = hoursSinceLastClaim < 72;

  const multipliers = {
    bronze: 'No multipliers active',
    silver: '0.5X multiplier active',
    gold: '2X multiplier active',
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between lg:gap-10 xl:gap-5 gap-7 p-[18px] border border-primary-3450 bg-white w-full xl:w-2/3 rounded-base">
      <div className="flex items-center lg:gap-10 xl:gap-5 gap-7">
        <div className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center md:w-10 md:h-10">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h5 className="text-sm tracking-[-0.084px] text-primary-4050 whitespace-nowrap">Migrate Points</h5>
            <span className="text-primary-50 text-[24px] leading-[36px] font-Bitform">{migrate_points}</span>
          </div>

          <div
            className={classNames('flex items-center gap-0.5 rounded-full py-1 pl-1 pr-2 transition-all duration-300', {
              'bg-primary-4500': userTier === 'bronze',
              'bg-primary-150': userTier === 'silver',
              'bg-primary-4550': userTier === 'gold',
            })}>
            <StarIcon color={userTier === 'bronze' ? '#6E330C' : userTier === 'silver' ? '#525866' : '#693D11'} />
            <span
              className={classNames('text-[11px] leading-[12px] tracking-[0.22px] font-medium capitalize', {
                'text-primary-600': userTier === 'bronze',
                'text-primary-200': userTier === 'silver',
                'text-primary-2650': userTier === 'gold',
              })}>
              {userTier}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] md:w-[1px] md:h-[58px] bg-primary-4350" />

      <div className="flex flex-col">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050 whitespace-nowrap">$xpMigrate Earned</h5>
        <span className="text-primary-50 text-[24px] leading-[36px] font-Bitform">{(2345).toLocaleString()}</span>
      </div>

      <div className="w-full h-[1px] md:w-[1px] md:h-[58px] bg-primary-4350" />

      <div className="flex flex-col gap-3">
        <div
          className={classNames('flex items-center gap-0.5 rounded-full py-1 pl-1 pr-2 transition-all duration-300 w-fit', {
            'bg-primary-150': userTier === 'bronze',
            'bg-primary-1000': userTier === 'silver',
            'bg-primary-1100 border border-primary-4600': userTier === 'gold',
          })}>
          <FlashIcon width={12} height={12} color={userTier === 'bronze' ? '#525866' : userTier === 'silver' ? '#162664' : '#710E21'} />
          <span
            className={classNames('text-[11px] leading-[12px] tracking-[0.22px] font-medium whitespace-nowrap', {
              'text-primary-200': userTier === 'bronze',
              'text-primary-700': userTier === 'silver',
              'text-primary-800': userTier === 'gold',
            })}>
            {multipliers[userTier]}
          </span>
        </div>

        <SMClickAnimation
          className={classNames('px-3 rounded-base flex items-center justify-center w-fit h-[26px]', { 'bg-primary-250 pointer-events-none': disableClaim, 'bg-primary-3400': !disableClaim })}>
          <span className={classNames('text-[12px] leading-[17.4px] font-Bitform', { 'text-primary-2050': disableClaim, 'text-primary-3600': !disableClaim })}>Claim</span>
        </SMClickAnimation>
      </div>
    </div>
  );
};

const Info = ({ title, value, flushLeft, subtitle, loading }: InfoProps) => (
  <div className={classNames('p-[18px] border border-primary-3450 bg-white rounded-base w-full flex flex-col', { 'md:items-center': !flushLeft })}>
    <h5 className="text-sm tracking-[-0.084px] text-primary-4050">{title}</h5>
    <div className={classNames('', { 'flex items-center gap-3': subtitle })}>
      {loading ? (
        <div className="w-24 h-[29px] bg-primary-1350 animate-pulse rounded mt-[7px]" />
      ) : (
        <>
          <span className="text-[24px] leading-[36px] font-Bitform text-primary-50">{value.toLocaleString()}</span>
          {subtitle && <span className="text-[14px] leading-[21px] text-primary-200">{subtitle}</span>}
        </>
      )}
    </div>
  </div>
);

const DashboardHeader = () => (
  <div className="flex flex-col gap-5 pb-5 border-b border-b-primary-1350">
    <div className="hidden md:flex items-center justify-center overflow-hidden max-w-full">
      <DesktopEarnWelcome />
    </div>
    <div className="md:hidden flex items-center justify-center overflow-hidden max-w-full">
      <MobileEarnWelcome />
    </div>

    <span className="text-primary-300 text-[20px] leading-[38px] md:text-[30px] md:leading-[38px] font-Bitform">Dashboard</span>
  </div>
);

const ReferralsSection = () => {
  const { earnState } = useSystemFunctions();
  const copy = useCopy();

  const { earning, loadingEarning } = earnState;
  const referalCount = earning?.referral?.counts?.toLocaleString?.() || 0;
  const referalPoint = earning?.referral?.points?.toLocaleString?.() || 0;
  const referalCode = earning?.referral_code || '';

  return (
    <div className="p-[18px] border border-primary-3450 bg-white w-full xl:w-1/3 flex items-center justify-between rounded-base">
      <div className="flex flex-col">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050">Referrals</h5>
        {loadingEarning ? (
          <div className="flex gap-2 items-end">
            <div className="h-9 w-10 bg-primary-1350 rounded" />
            <div className="h-5 w-14 bg-primary-1350 rounded" />
          </div>
        ) : (
          <span className="text-[24px] leading-[36px] font-Bitform text-primary-50">
            {referalCount} <span className="font-Aeonik text-[12px] leading-[18px] md:text-[14px] md:leading-[21px] text-primary-200">({referalPoint} PTS)</span>
          </span>
        )}
      </div>

      <div className="flex flex-col h-full justify-between items-end gap-1">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050">Referral Link</h5>

        <div className="flex items-center justify-center gap-3 px-3 rounded-base bg-primary-3400 h-[26px]">
          <motion.p
            className="text-ellipsis text-primary-3600 text-[12px] leading-[17.4px] font-Bitform"
            animate={
              loadingEarning
                ? {
                    scale: [0.9, 1, 1.1],
                    transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
                  }
                : undefined
            }>
            {loadingEarning ? '...' : referalCode}
          </motion.p>
          <SMClickAnimation onClick={() => copy(referalCode)}>
            <CopyIcon color="#B3D400" />
          </SMClickAnimation>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-6 self-stretch">
    <h2 className="text-[20px] leading-[30px] tracking-[0.4px] md:text-[24px] md:leading-[36px] md:tracking-[-0.48px] font-Bitform text-primary-3400">{title}</h2>
    {children}
  </div>
);

const Secondary = ({ network }: { network: Network }) => {
  const { earnState, navigate } = useSystemFunctions();
  const { address } = useAccount();
  const { claimNFTEarnings } = useEarnActions();
  const copy = useCopy();

  const { earning, activities, featuredTokens, loadingActivities, loadingEarning, loadingClaimNFTEarnings, loadingFeaturedTokens } = earnState;

  const countdown = useCountdown(earning?.last_claim_timestamp || 0, 72);

  const infoData = [
    { title: 'Migrate Points in Circulation', value: earning?.total_circulation_points || 0 },
    { title: 'Your Rank', value: earning?.rank || 0 },
    { title: 'Claim window', value: countdown, subtitle: 'Till next cooldown', flushLeft: true },
  ];

  const activeActivities = (activities || []).filter((activity) => activity.is_active);
  const activeFeaturedTokens = (featuredTokens || []).filter((token) => token.featured);
  const referalCode = earning?.referral_code || '';

  const getActivityButtonAction = (slug: string) => {
    switch (slug) {
      case 'bridge':
        return () => navigate.push(`/${network}/bridge`);
      case 'social':
        return () => window.open('https://twitter.com/supermigrate', '_blank');
      case 'nft':
        return () => claimNFTEarnings(address!);
      case 'referral':
        return () => copy(referalCode);
      case 'liquidity-migration':
        return () => navigate.push(`/${network}/liquidity`);
      default:
        return () => {};
    }
  };

  const activitiesMap: ActionProps[] = activeActivities?.map((activity) => ({
    title: activity.name,
    titleBadge: {
      text: `${activity.points.toLocaleString()} PTS`,
      mobileText: `${activity.points.toLocaleString()} PTS`,
      type: 'primary',
      variant: activity.points >= 3000 ? 'secondary' : activity.points >= 1000 ? 'tertiary' : 'mint',
    },
    subtitle: activity.description,
    buttonText: getActivityButtonText(activity.slug),
    action: getActivityButtonAction(activity.slug),
    actionLoading: activity.slug === 'nft' ? loadingClaimNFTEarnings : undefined,
    badges: activity.multipliers.map((multiplier) => ({
      text: multiplier.description,
      mobileText: multiplier.description,
      type: 'primary',
      variant: multiplier.multiplier >= 3 ? 'secondary' : multiplier.multiplier >= 2 ? 'tertiary' : 'primary',
    })),
    hasWarning: activity.slug === 'bridge',
  }));

  const featuredTokensMap: ActionProps[] = activeFeaturedTokens?.map((token) => ({
    title: token.name,
    titleAlt: `$${token.symbol}`,
    icon: token.logo_url,
    buttonText: 'Bridge',
    action: () => navigate.push(`/${network}/bridge`),
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
  }));

  return (
    <div className="flex flex-col gap-8 self-stretch pb-[86px] lg:px-8">
      <DashboardHeader />

      <div className="flex flex-col gap-12 self-stretch items-center flex-1">
        <div className="self-stretch items-stretch flex flex-col gap-[22px]">
          <div className="self-stretch flex flex-col xl:flex-row justify-between items-stretch gap-6">
            <DashStats />
            <ReferralsSection />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-[22px]">
            {infoData.map((info, index) => (
              <Info key={index} {...info} loading={loadingEarning} />
            ))}
          </div>
        </div>

        <Section title="Activities">
          <div className="flex flex-col items-stretch gap-8">
            {!loadingActivities && Boolean(activitiesMap?.length) && activitiesMap?.map((activity, index) => <Action key={index} {...activity} />)}

            {loadingActivities && Array.from({ length: 3 }).map((_, index) => <ActionSkeleton key={index} />)}
          </div>
        </Section>

        <Section title="Featured Tokens">
          <div className={classNames('grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 w-full', { 'lg:grid-cols-1': !loadingFeaturedTokens && !Boolean(featuredTokensMap?.length) })}>
            {!loadingFeaturedTokens && Boolean(featuredTokensMap?.length) && featuredTokensMap.map((token, index) => <Action key={index} {...token} />)}

            {loadingFeaturedTokens && Array.from({ length: 4 }).map((_, index) => <ActionSkeleton key={index} />)}

            {!loadingFeaturedTokens && !Boolean(featuredTokensMap?.length) && (
              <div className="flex items-center justify-center w-full h-[200px] bg-white border border-primary-3450 rounded-base">
                <p className="text-primary-200 text-lg md:text-xl font-Bitform">No featured tokens available</p>
              </div>
            )}
          </div>
        </Section>

        <Section title="Leaderboard">
          <LeaderboardTable />
        </Section>
      </div>
    </div>
  );
};

export default Secondary;

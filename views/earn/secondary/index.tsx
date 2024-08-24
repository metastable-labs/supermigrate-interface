'use client';

import { useMemo } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import useCopy from '@/hooks/useCopy';
import { CopyIcon, DesktopEarnWelcome, FlashIcon, Logo, MobileEarnWelcome, StarIcon } from '@/public/icons';
import { SMClickAnimation, SMTable } from '@/components';
import Action, { ActionSkeleton } from './action';
import { activities, featuredTokens, leaderBoard } from './dummy';
import { ActionProps, DashStatsProps, InfoProps, ReferralsSectionProps } from './types';
import LeaderboardTable from './leaderboard-table';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { getActivityButtonAction, getActivityButtonText } from './utils';

const DashStats = ({ multiplier, points, tier = 'bronze', xpEarned }: DashStatsProps) => {
  const multipliers = {
    bronze: 'No multipliers active',
    silver: '0.5X multiplier active',
    gold: '2X multiplier active',
  };
  const disableClaim = multiplier === 0;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between lg:gap-10 xl:gap-5 gap-7 p-[18px] border border-primary-3450 bg-white w-full xl:w-2/3 rounded-base">
      <div className="flex items-center lg:gap-10 xl:gap-5 gap-7">
        <div className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center md:w-10 md:h-10">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h5 className="text-sm tracking-[-0.084px] text-primary-4050 whitespace-nowrap">Migrate Points</h5>
            <span className="text-primary-50 text-[24px] leading-[36px] font-Bitform">{points.toLocaleString()}</span>
          </div>

          <div
            className={classNames('flex items-center gap-0.5 rounded-full py-1 pl-1 pr-2 transition-all duration-300', {
              'bg-primary-4500': tier === 'bronze',
              'bg-primary-150': tier === 'silver',
              'bg-primary-4550': tier === 'gold',
            })}>
            <StarIcon color={tier === 'bronze' ? '#6E330C' : tier === 'silver' ? '#525866' : '#693D11'} />
            <span
              className={classNames('text-[11px] leading-[12px] tracking-[0.22px] font-medium capitalize', {
                'text-primary-600': tier === 'bronze',
                'text-primary-200': tier === 'silver',
                'text-primary-2650': tier === 'gold',
              })}>
              {tier}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] md:w-[1px] md:h-[58px] bg-primary-4350" />

      <div className="flex flex-col">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050 whitespace-nowrap">$xpMigrate Earned</h5>
        <span className="text-primary-50 text-[24px] leading-[36px] font-Bitform">{xpEarned.toLocaleString()}</span>
      </div>

      <div className="w-full h-[1px] md:w-[1px] md:h-[58px] bg-primary-4350" />

      <div className="flex flex-col gap-3">
        <div
          className={classNames('flex items-center gap-0.5 rounded-full py-1 pl-1 pr-2 transition-all duration-300 w-fit', {
            'bg-primary-150': tier === 'bronze',
            'bg-primary-1000': tier === 'silver',
            'bg-primary-1100 border border-primary-4600': tier === 'gold',
          })}>
          <FlashIcon width={12} height={12} color={tier === 'bronze' ? '#525866' : tier === 'silver' ? '#162664' : '#710E21'} />
          <span
            className={classNames('text-[11px] leading-[12px] tracking-[0.22px] font-medium whitespace-nowrap', {
              'text-primary-200': tier === 'bronze',
              'text-primary-700': tier === 'silver',
              'text-primary-800': tier === 'gold',
            })}>
            {multipliers[tier]}
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

const Info = ({ title, value, flushLeft, subtitle }: InfoProps) => (
  <div className={classNames('p-[18px] border border-primary-3450 bg-white rounded-base w-full flex flex-col', { 'md:items-center': !flushLeft })}>
    <h5 className="text-sm tracking-[-0.084px] text-primary-4050">{title}</h5>
    <div className={classNames('', { 'flex items-center gap-3': subtitle })}>
      <span className="text-[24px] leading-[36px] font-Bitform text-primary-50">{value.toLocaleString()}</span>
      {subtitle && <span className="text-[14px] leading-[21px] text-primary-200">{subtitle}</span>}
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

  const { earning } = earnState;
  const referalCount = earning?.referral?.counts?.toLocaleString?.() || 0;
  const referalPoint = earning?.referral?.points?.toLocaleString?.() || 0;
  const referalCode = earning?.referral_code || '';

  return (
    <div className="p-[18px] border border-primary-3450 bg-white w-full xl:w-1/3 flex items-center justify-between rounded-base">
      <div className="flex flex-col">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050">Referrals</h5>
        <span className="text-[24px] leading-[36px] font-Bitform text-primary-50">
          {referalCount} <span className="font-Aeonik text-[12px] leading-[18px] md:text-[14px] md:leading-[21px] text-primary-200">({referalPoint} PTS)</span>
        </span>
      </div>

      <div className="flex flex-col h-full justify-between items-end gap-1">
        <h5 className="text-sm tracking-[-0.084px] text-primary-4050">Referral Link</h5>

        <div className="flex items-center justify-center gap-3 px-3 rounded-base bg-primary-3400 h-[26px]">
          <p className="text-ellipsis text-primary-3600 text-[12px] leading-[17.4px] font-Bitform">{referalCode}</p>
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

const Secondary = () => {
  const { earnState } = useSystemFunctions();

  const { earning, activities, loadingActivities } = earnState;

  const infoData = [
    { title: 'Migrate Points in Circulation', value: earning?.total_circulation_points || 0 },
    { title: 'Your Rank', value: earning?.rank || 0 },
    { title: 'Claim window', value: moment('2024-08-23T14:00:00Z').fromNow(), subtitle: 'Till next cooldown', flushLeft: true },
  ];

  const activitiesMap: ActionProps[] = (activities || [])?.map((activity) => ({
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
    badges: activity.multipliers.map((multiplier) => ({
      text: multiplier.description,
      mobileText: multiplier.description,
      type: 'primary',
      variant: multiplier.multiplier >= 3 ? 'secondary' : multiplier.multiplier >= 2 ? 'tertiary' : 'primary',
    })),
    hasWarning: activity.slug === 'bridge',
  }));

  return (
    <div className="flex flex-col gap-8 self-stretch pb-[86px] lg:px-8">
      <DashboardHeader />

      <div className="flex flex-col gap-12 self-stretch items-center flex-1">
        <div className="self-stretch items-stretch flex flex-col gap-[22px]">
          <div className="self-stretch flex flex-col xl:flex-row justify-between items-stretch gap-6">
            <DashStats points={12345} tier="gold" xpEarned={123456} multiplier={0} />
            <ReferralsSection />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-[22px]">
            {infoData.map((info, index) => (
              <Info key={index} {...info} />
            ))}
          </div>
        </div>

        <Section title="Activities">
          <div className="flex flex-col items-stretch gap-8">
            {!loadingActivities && Boolean(activities?.length) && activitiesMap?.map((activity, index) => <Action key={index} {...activity} />)}

            {loadingActivities && Array.from({ length: 3 }).map((_, index) => <ActionSkeleton key={index} />)}
          </div>
        </Section>

        <Section title="Featured Tokens">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 w-full">
            {featuredTokens.map((token, index) => (
              <Action key={index} {...token} />
            ))}
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

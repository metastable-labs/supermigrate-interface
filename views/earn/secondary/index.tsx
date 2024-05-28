import classNames from 'classnames';

import useScreenDetect from '@/hooks/useScreenDetect';
import { CopyIcon, EarnWelcome, Logo } from '@/public/icons';
import { InfoProps } from './types';
import { SMClickAnimation } from '@/components';
import useCopy from '@/hooks/useCopy';
import Action from './action';
import { activities, featuredTokens } from './dummy';

const Info = ({ hasIcon, title, value, textRight }: InfoProps) => (
  <div className={classNames('', { 'flex items-center justify-center gap-2.5': hasIcon, 'text-right': textRight, 'text-left': !textRight })}>
    {hasIcon && (
      <div className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center md:w-10 md:h-10">
        <Logo />
      </div>
    )}
    <div className="flex flex-col">
      <h5 className="text-sm tracking-[-0.084px] text-primary-4100">{title}</h5>
      <span className="text-[24px] leading-[36px] font-Bitform">{value.toLocaleString()}</span>
    </div>
  </div>
);

const Secondary = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetect();
  const copy = useCopy();

  const infoData: InfoProps[] = [
    {
      title: 'Migrate Points',
      value: 12344,
      hasIcon: true,
    },
    {
      title: 'Migrate Points in Circulation',
      value: 12344567,
    },
    {
      title: 'Your Rank',
      value: 303456,
      textRight: true,
    },
  ];

  return (
    <div className="flex flex-col gap-8 self-stretch pb-[86px] lg:px-8">
      <div className="flex flex-col items-center justify-center -space-y-6 md:space-y-1 lg:space-y-5 pb-2 md:pb-3.5 lg:pb-5 border-b border-b-primary-1350">
        <div className="flex items-center justify-center overflow-hidden max-w-full">
          <EarnWelcome />
        </div>
        <div className="flex items-center justify-start text-primary-300 text-lg md:text-[30px] md:leading-[38px] w-full">Dashboard</div>
      </div>

      <div className="flex flex-col gap-12 self-stretch items-center flex-1">
        <div className="self-stretch flex flex-col lg:flex-row items-start gap-[22px]">
          <div className="w-full lg:w-3/5 flex flex-wrap items-center justify-between p-6 bg-white border border-primary-3450 rounded-base gap-y-5">
            {infoData.map((info, index) => (
              <Info key={index} {...info} />
            ))}
          </div>

          <div className="p-6 w-full lg:w-2/5 flex items-center justify-between bg-white border border-primary-3450 rounded-base">
            <div className="flex flex-col">
              <h5 className="text-sm tracking-[-0.084px] text-primary-4100">Referrals</h5>
              <span className="text-[24px] leading-[36px] font-Bitform">
                204 <span className="font-Aeonik text-[12px] leading-[18px] text-primary-200">(22,403 PTS)</span>
              </span>
            </div>

            <div className="flex flex-col h-full justify-between items-end gap-1">
              <h5 className="text-sm tracking-[-0.084px] text-primary-4100">Referral Link</h5>

              <div className="flex items-center justify-center gap-3 px-3 rounded-base bg-primary-3400 h-[26px]">
                <p className="text-ellipsis text-primary-3600 text-[12px] leading-[17.4px] font-Bitform">mgrt/3uck</p>
                <SMClickAnimation onClick={() => copy('mgrt/3uck' as string)}>
                  <CopyIcon color="#B3D400" />
                </SMClickAnimation>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col items-start gap-6 self-stretch bg-white">
          <h2 className="tracking-[-0.48px] text-[24px] leading-[36px] font-Bitform text-primary-3400">Activities</h2>

          <div className="flex flex-col items-stretch gap-8">
            {activities.map((activity, index) => (
              <Action key={index} {...activity} />
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col items-start gap-6 self-stretch bg-white">
          <h2 className="tracking-[-0.48px] text-[24px] leading-[36px] font-Bitform text-primary-3400">Featured Tokens</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 w-full">
            {featuredTokens.map((token, index) => (
              <Action key={index} {...token} />
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col items-start gap-6 self-stretch bg-white">
          <h2 className="tracking-[-0.48px] text-[24px] leading-[36px] font-Bitform text-primary-3400">Leaderboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Secondary;

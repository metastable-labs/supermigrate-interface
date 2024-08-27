import classNames from 'classnames';

import { RankIcon, WalletSecondaryIcon, PointsIcon, XPIcon, WalletIcon } from '@/public/icons';
import useTruncateText from '@/hooks/useTruncateText';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { LeaderboardTableData, LeaderboardTableProps } from './types';

const LeaderboardTable = () => {
  const { earnState } = useSystemFunctions();
  const { truncate } = useTruncateText(undefined, 5, 5);

  const { leaderboard, loadingLeaderboard } = earnState;

  const headers = [
    {
      icon: <RankIcon />,
      text: 'Rank',
    },
    {
      icon: <WalletSecondaryIcon />,
      text: 'Wallet',
    },
    {
      icon: <PointsIcon />,
      text: 'Points',
    },
    {
      icon: <XPIcon />,
      text: '$xpMigrate Earned',
    },
  ];

  const data: LeaderboardTableData[] = (leaderboard || [])?.map((item) => ({
    address: item?.wallet_address,
    points: item?.total_balance,
    xpEarned: item?.xpMigrate_earned,
  }));

  const skeletonRows = Array.from({ length: 8 });

  return (
    <div className="p-6 bg-white border border-primary-3450 rounded-base self-stretch w-full">
      <table className="self-stretch w-full">
        <thead>
          <tr>
            {headers.map(({ icon, text }, index) => (
              <th
                scope="col"
                key={index}
                className={classNames('border-b border-primary-1350', {
                  'border-primary-1350': index < headers.length - 1,
                  'hidden md:table-cell': index === 3,
                  'hidden sm:table-cell': index === 2,
                  'sm:border-r': index === 1,
                  'md:border-r': index === 2,
                  'border-r': index === 0,
                })}>
                <div className="px-4 md:px-6 py-3 flex items-center gap-2">
                  {icon}
                  <span className="text-primary-350 text-left text-[12px] leading-[18px] font-medium">{text}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {Boolean(data.length) && !loadingLeaderboard && (
          <tbody className="bg-white divide-gray-200">
            {data.map((item, index) => (
              <tr
                key={index}
                className={classNames('font-medium text-sm', {
                  'border-b border-gray-1350': index < data.length - 1,
                })}>
                <td className="w-[98px] border-r border-primary-1350">
                  <div
                    className={classNames('min-h-[72px] px-4 md:px-6 py-4 w-full flex items-center justify-center', {
                      'text-primary-3150': index === 0,
                      'text-primary-750': index === 1,
                      'text-primary-4950': index === 2,
                      'text-primary-300': index > 2,
                    })}>
                    {String(index + 1).padStart(3, '0')}
                  </div>
                </td>

                <td className="w-full sm:w-1/2 md:w-1/3 sm:border-r border-primary-1350">
                  <div className="min-h-[72px] px-4 md:px-6 py-4 w-full flex items-center gap-3">
                    <WalletIcon width={16} height={16} />
                    <span className="text-primary-300">{truncate(item?.address)}</span>
                  </div>
                </td>

                <td className="w-full sm:w1/2 md:w-1/3 md:border-r border-primary-1350 hidden sm:table-cell">
                  <div className="min-h-[72px] px-4 md:px-6 py-4 w-full flex items-center">
                    <span className="text-primary-5000">{item?.points?.toLocaleString()}</span>
                  </div>
                </td>

                <td className="w-1/3 hidden md:table-cell">
                  <div className="min-h-[72px] px-4 md:px-6 py-4 w-full flex items-center">
                    <span className="text-primary-300">{item?.xpEarned?.toLocaleString()}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}

        {loadingLeaderboard && (
          <tbody>
            {skeletonRows.map((_, rowIndex) => (
              <tr key={rowIndex} className="animate-pulse">
                {Array.from({ length: 4 }).map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className={classNames('border-primary-1350', {
                      'border-b border-gray-200': rowIndex < skeletonRows.length - 1,
                      'w-[98px] border-r': colIndex === 0,
                      'w-full sm:w-1/2 md:w-1/3 sm:border-r': colIndex === 1 || colIndex === 2,
                      'hidden sm:table-cell': colIndex === 2,
                      'w-1/3 hidden md:table-cell': colIndex === 3,
                    })}>
                    <div className="min-h-[72px] px-4 md:px-6 py-4 flex items-center">
                      <div className="bg-primary-1350 h-5 rounded w-2/3" />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default LeaderboardTable;

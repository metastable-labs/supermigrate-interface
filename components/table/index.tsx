'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { TableProps } from './types';
import CTA from './cta';
import { LinkRightArrow } from '@/public/icons';
import EmptyState from './empty';
import Status from './status';
import Address from './address';

const SMTable = ({ data, network, isConnected, variant = 'primary', loading, ctaAction }: TableProps) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const headers = [
    { key: 'tokenName', label: 'Token Name' },
    {
      key: 'status',
      label: 'Migration Status',
      mobileLabel: 'Status',
      secondaryLabel: 'Token Address',
    },
    { key: 'action', label: `Contract on ${network}`, secondaryLabel: 'Pool' },
    { key: 'cta', label: 'Action' },
  ].filter((header) => variant === 'primary' || header.key !== 'action');

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classNames('self-stretch overflow-x-auto rounded-base border border-primary-1350 flex flex-col justify-between bg-white', {})}>
      {loading && <div className="flex-1 flex items-center justify-center italic font-medium text-xs">Loading...</div>}

      <table className="md:min-w-full divide-y divide-primary-1350">
        <thead className="bg-primary-1450 text-primary-1500 border-b border-primary-1350">
          <tr>
            {headers.map((header, index) => (
              <th
                key={header.key}
                scope="col"
                className={classNames('px-4 md:px-6 py-3 text-left text-xs font-medium', {
                  'whitespace-nowrap': index === 0 || index === 2,
                  'hidden md:table-cell': index === 1 || (index === 2 && variant === 'primary'),
                })}>
                {isMobileView && header.mobileLabel ? header.mobileLabel : variant === 'primary' ? header.label : header.secondaryLabel || header.label}
              </th>
            ))}
          </tr>
        </thead>
        {Boolean(data.length) && !loading && (
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="min-h-[71px] px-4 md:px-6 py-4 text-sm font-medium text-gray-900 flex items-center gap-3">
                  <Image
                    src={item?.tokenIcon || 'https://w7.pngwing.com/pngs/730/454/png-transparent-smiley-emoticon-face-grinning-smiley-face-face-smiley-emoticon-thumbnail.png'}
                    alt={`${item.tokenName} icon`}
                    width={20}
                    height={20}
                  />
                  <div>{item.tokenName}</div>
                </td>
                <td className="min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                  {variant === 'primary' && <Status status={item?.pullStatus} />}
                  {variant === 'secondary' && <Address address={item?.tokenAddress} />}
                </td>
                {variant === 'primary' && (
                  <td className="min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 justify-center md:justify-start items-center gap-2 md:flex">
                    <a href={item.scanUrl} target="_blank" className="text-[14px] leading-[20px]  text-primary-1650 border-b border-b-primary-1650 flex items-center justify-center gap-1">
                      <div>View on {network}scan</div>
                    </a>

                    <LinkRightArrow />
                  </td>
                )}

                <td className="min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <CTA title={variant === 'primary' ? 'View' : 'Add Liquidity'} onClick={() => ctaAction?.(item?.id)} normal />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {!Boolean(data.length) && !loading && <EmptyState isConnected={isConnected} network={network} action={() => ctaAction?.()} variant={variant} />}

      {Boolean(data.length) && (
        <div className=" border-t border-primary-1350 flex justify-between items-center px-6 pt-3 pb-4 bg-white">
          <CTA title="Previous" onClick={() => {}} />

          <span className="flex items-center justify-center px-3 text-sm text-primary-1600">Page 1 of 1</span>

          <CTA title="Next" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default SMTable;

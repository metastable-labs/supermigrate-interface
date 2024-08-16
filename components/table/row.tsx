import React, { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { EmissionsProps, IRow, LPMigratedProps } from './types';
import Status from './status';
import { EthIcon, LinkRightArrow } from '@/public/icons';
import CTA from './cta';
import { NetworkProps, networks } from '@/config/rainbow/config';
import classNames from 'classnames';

const LiquidityComposition = ({ auxiliary, eth, itemNetwork }: { eth: number; auxiliary: number; itemNetwork?: NetworkProps }) => {
  const auxIcon: any = itemNetwork?.icon;

  const items = [
    { icon: <EthIcon width={20} height={20} />, value: eth },
    { icon: React.cloneElement(auxIcon, { width: 20, height: 20 }), value: auxiliary },
  ];

  return (
    <div className="flex flex-col items-stretch gap-[9px] w-full">
      <div className="flex items-center justify-between gap-5 w-full">
        {items.map(({ icon, value }, index) => (
          <div key={index} className="flex items-center justify-center gap-1">
            {icon}
            <span className="text-primary-200 text-[14px] leading-[21px] ">
              ({value}
              <span className="font-sans">%</span>)
            </span>
          </div>
        ))}
      </div>

      <div className="relative h-[3px] bg-white overflow-hidden min-w-full">
        <motion.div className="absolute left-0 top-0 h-full bg-primary-3400" initial={{ width: 0 }} animate={{ width: (eth / (eth + auxiliary)) * 100 - 0.5 + '%' }} />
        <motion.div className="absolute right-0 top-0 h-full bg-primary-3600" initial={{ width: 0 }} animate={{ width: (auxiliary / (eth + auxiliary)) * 100 - 0.5 + '%' }} />
      </div>
    </div>
  );
};

const PoolTotal = ({ eth, auxiliary, tokenSymbol }: { eth: number; auxiliary: number; tokenSymbol: string }) => {
  const items = [
    { value: eth, label: 'ETH' },
    { value: auxiliary, label: tokenSymbol },
  ];
  return (
    <div className="flex flex-col gap-2">
      {items.map(({ value, label }, index) => (
        <span key={index} className="text-primary-50 text-[14px] leading-[21px]">
          {value.toLocaleString()}
          <span className="text-primary-200 uppercase"> {label}</span>
        </span>
      ))}
    </div>
  );
};

const Emissions = ({ emissions, claimClick }: EmissionsProps) => {
  const handleClaimClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    claimClick(emissions.id);
  };
  return (
    <div className="flex flex-col gap-2 text-[16px]">
      <span className="text-primary-3400 leading-[20px] font-medium">{emissions.emmisions} Aero</span>
      <span onClick={handleClaimClick} className="text-primary-3350 leading-[30px] underline underline-offset-[3px]">
        Claim
      </span>
    </div>
  );
};

const LPMigrated = ({ auxiliary, eth, tokenIcon, tokenSymbol }: LPMigratedProps) => {
  const Item = ({ icon, symbol, value }: { icon: ReactElement; value: number; symbol: string }) => (
    <div className="flex gap-1">
      {icon}
      <span className="text-[14px] leading-[21px] text-primary-200">
        (<span className="text-primary-50">{value.toLocaleString()}</span> {symbol})
      </span>
    </div>
  );
  return (
    <div className="flex items-center gap-[15px]">
      <Item icon={<EthIcon width={20} height={20} />} value={eth} symbol="ETH" />
      <div className="w-[0.5px] h-[15px] bg-primary-1300" />
      <Item icon={<Image src={tokenIcon} alt={`${tokenSymbol} icon`} width={200} height={200} className="w-5 h-5 object-cover" />} value={auxiliary} symbol={tokenSymbol} />
    </div>
  );
};

const Row = ({ index, item, variant, ctaAction, rowClick, network, claimClick }: IRow) => {
  const itemNetwork = networks.find(({ variant }) => variant === item.network);
  return (
    <tr
      onClick={() => rowClick?.(item.id!)}
      key={index}
      className={classNames('font-medium', {
        'text-sm text-primary-300': variant === 'primary',
        'text-[16px] leading-[20px] text-primary-3400': variant === 'secondary',
        'cursor-pointer transition-colors duration-500 hover:bg-primary-2200': rowClick,
      })}>
      <td className="min-h-[71px] px-4 md:px-6 py-4 flex items-center gap-3">
        {variant === 'primary' && (
          <>
            <Image
              src={item?.tokenIcon || 'https://w7.pngwing.com/pngs/730/454/png-transparent-smiley-emoticon-face-grinning-smiley-face-face-smiley-emoticon-thumbnail.png'}
              alt={`${item.tokenName} icon`}
              width={20}
              height={20}
            />
            <div>{item.tokenName}</div>
          </>
        )}

        {(variant === 'secondary' || variant === 'tertiary') && (
          <>
            <div className="relative flex items-center justify-center -space-x-2">
              <Image
                src={item?.tokenIcon || 'https://w7.pngwing.com/pngs/730/454/png-transparent-smiley-emoticon-face-grinning-smiley-face-face-smiley-emoticon-thumbnail.png'}
                alt={`${item.tokenName} icon`}
                width={200}
                height={200}
                className="w-6 h-6 object-cover rounded-full z-[2]"
              />

              <EthIcon />
            </div>

            <span className="text-sm md:text-[16px] md:leading-[20px]">{item.tokenSymbol} / ETH</span>
          </>
        )}
      </td>

      <td className="min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
        {variant === 'primary' && <Status status={item?.pullStatus} />}
        {variant === 'secondary' && (
          <div className="flex items-center gap-3">
            {itemNetwork?.icon}
            <span className="text-[16px] leading-[20px] font-medium text-primary-3400 capitalize">{item.network}</span>
          </div>
        )}
        {variant === 'tertiary' && <PoolTotal eth={item?.poolTotal?.eth!} auxiliary={item?.poolTotal?.auxiliary!} tokenSymbol={item.tokenSymbol!} />}
      </td>

      <td
        className={classNames('min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap', {
          'justify-center md:justify-start items-center gap-2 md:flex hidden': variant === 'primary',
          'hidden sm:table-cell': variant === 'secondary',
        })}>
        {variant === 'primary' && (
          <>
            <a href={item.scanUrl} target="_blank" className="text-primary-1650 border-b border-b-primary-1650 flex items-center justify-center gap-1">
              <div>View on {network}scan</div>
            </a>

            <LinkRightArrow />
          </>
        )}

        {variant === 'secondary' && (
          <span>
            <span className="font-sans">$</span>
            {item?.liquidity?.toLocaleString()}
          </span>
        )}

        {variant === 'tertiary' && <Emissions emissions={item?.emmisions!} claimClick={claimClick!} />}
      </td>

      <td className={classNames('min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap', { 'hidden sm:table-cell': variant === 'tertiary' })}>
        {variant === 'primary' && <CTA title="View" onClick={() => ctaAction?.(item?.id!)} normal />}

        {variant === 'secondary' && <LiquidityComposition eth={item?.liquidityComposition?.eth!} auxiliary={item?.liquidityComposition?.auxiliary!} itemNetwork={itemNetwork!} />}

        {variant === 'tertiary' && <LPMigrated eth={item?.lpMigrated?.eth!} auxiliary={item?.lpMigrated?.auxiliary!} tokenIcon={item?.tokenIcon!} tokenSymbol={item.tokenSymbol!} />}
      </td>

      {(variant === 'secondary' || variant === 'tertiary') && (
        <td className="min-h-[71px] px-4 md:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
          <span>
            {item?.apy}
            <span className="font-sans">%</span>
          </span>
        </td>
      )}
    </tr>
  );
};

export default Row;

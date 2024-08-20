'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { SMContainer } from '@/components';
import { formatNumber } from '@/utils/helpers';
import { EthIcon } from '@/public/icons';
import Header from './header';
import { generateChartData, periods } from './dummy';
import { MigrateLiquidityViewProps, Period } from './types';
import LiquidityChart from './chart';
import { networks } from '@/config/privy/config';
import ChangeIndicator from './change-indicator';
import MigrateLiquidtyForm from './migrate-liquidity-form';

const MigrateLiquidityView = ({ lang, migrationId, network }: MigrateLiquidityViewProps) => {
  const [period, setPeriod] = useState<Period>('1h');
  const [chartData, setChartData] = useState(generateChartData(period));
  const selectNetwork: any = networks.find(({ variant }) => variant === network);

  const tokenAddress = '0x2f375e94fc336cdec2d4f6e5e05e4c4f5e5f2622';
  const tokenIcon = 'https://res.cloudinary.com/dxnd4k222/image/upload/fl_preserve_transparency/v1717743095/crypto-icon-instance_ygqnhb.jpg';
  const tokenLiquidity = 12_888_000;

  const eth = 115;
  const auxiliary = 45;
  const ethPercent = (eth / (eth + auxiliary)) * 100;
  const auxiliaryPercent = (auxiliary / (eth + auxiliary)) * 100;

  const tvl = 28_300_000;
  const tvlChangePercent = 12.32;
  const tvlIncreased = true;

  const items = [
    { icon: <EthIcon width={20} height={20} />, value: eth, percentage: ethPercent },
    { icon: React.cloneElement(selectNetwork?.icon, { width: 20, height: 20 }), value: auxiliary, percentage: auxiliaryPercent },
  ];

  useEffect(() => {
    console.log('Fetching data for period:', period);
    setChartData(generateChartData(period));
  }, [period]);

  return (
    <SMContainer>
      <div className="pt-12 pb-[86px] flex flex-col items-stretch gap-8">
        <Header network={network} tokenAddress={tokenAddress} tokenSymbol="RAZ" />

        <div className="flex flex-col xl:flex-row gap-9">
          <div className="w-full xl:min-w-[66.666666%] xl:max-w-[66.666666%] flex flex-col items-stretch gap-[46px]">
            <div className="flex flex-col items-stretch gap-6 md:px-6">
              <div className="self-stretch flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <Image src={tokenIcon} alt="Token icon" width={30} height={300} className="object-cover border-[0.5px] border-primary-1300 rounded-full w-10 h-10" />
                    <div className="absolute bottom-[-10%] right-[-10%] border-[0.5px] border-primary-1300 rounded-full">
                      <EthIcon />
                    </div>
                  </div>

                  <span className="text-[24px] leading-[36px] text-primary-3400 font-Bitform">RAZ / ETH</span>
                </div>

                <div className="hidden md:flex items-center justify-center gap-8 px-3.5 py-2.5 rounded-lg border border-primary-3450 shadow-table-cta bg-white">
                  {periods.map(({ period: value }) => (
                    <span
                      onClick={() => setPeriod(value)}
                      key={value}
                      className={classNames('text-sm flex items-center justify-center px-1.5 py-0.5 text-primary-1600 cursor-pointer transition-colors duration-300 font-Bitform uppercase', {
                        'bg-primary-150 rounded-[5px]': value === period,
                      })}>
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-Bitform text-[36px] leading-[54px] tracking-[-1.08px] text-primary-3400 uppercase">${formatNumber(tokenLiquidity)}</span>
                <span className="text-[16px] leading-[20px] tracking-[-0.096px] text-primary-4050">{periods.find((value) => value.period === period)?.text}</span>
              </div>
            </div>

            <div className="-ml-6 md:ml-0 h-[315px] md:h-[452px] w-full">
              <LiquidityChart data={chartData} period={period} />
            </div>

            <div className="-mt-8 flex md:hidden items-center justify-center gap-8 px-3.5 py-2.5 rounded-lg border border-primary-3450 shadow-table-cta bg-white">
              {periods.map(({ period: value }) => (
                <span
                  onClick={() => setPeriod(value)}
                  key={value}
                  className={classNames('text-sm flex items-center justify-center px-1.5 py-0.5 text-primary-1600 cursor-pointer transition-colors duration-300 font-Bitform uppercase', {
                    'bg-primary-150 rounded-[5px]': value === period,
                  })}>
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full xl:min-w-[33.333333%] xl:max-w-[33.333333%] flex flex-col items-stretch gap-4">
            <div className="self-stretch p-6 flex flex-col gap-9 border border-primary-3450 bg-white rounded-base">
              <div className="self-stretch flex flex-col gap-4">
                <h5 className="text-[16px] leading-[20px] tracking-[-0.096px] text-primary-4050">Liquidity composition</h5>

                <div className="flex flex-col items-stretch gap-[9px] w-full">
                  <div className="flex items-center justify-between gap-5 w-full">
                    {items.map(({ icon, value, percentage }, index) => (
                      <div key={index} className="flex items-center justify-center gap-1">
                        {icon}
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-sm md:text-[16px] md:leading-[19.2px] text-primary-50 font-Bitform">
                            {value} <span className="text-primary-2050">ETH</span>
                          </span>

                          <span className="text-primary-200 text-[14px] leading-[21px]">
                            ({percentage.toFixed(1)}
                            <span className="font-sans">%</span>)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative h-[3px] bg-white overflow-hidden min-w-full">
                    <motion.div className="absolute left-0 top-0 h-full bg-primary-3400" initial={{ width: 0 }} animate={{ width: (eth / (eth + auxiliary)) * 100 - 0.5 + '%' }} />
                    <motion.div className="absolute right-0 top-0 h-full bg-primary-3600" initial={{ width: 0 }} animate={{ width: (auxiliary / (eth + auxiliary)) * 100 - 0.5 + '%' }} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] leading-[20px] tracking-[-0.096px] text-primary-4050">TVL</h3>

                <div className="flex items-center gap-3">
                  <span className="text-primary-50 text-[20px] leading-[24px] font-Bitform uppercase">${formatNumber(tvl)}</span>
                  <ChangeIndicator change={tvlChangePercent} increased={tvlIncreased} />
                </div>
              </div>

              {ethPercent != auxiliaryPercent && (
                <p className="self-stretch p-3.5 bg-primary-4300 flex items-center text-primary-3400 text-[14px] leading-[21px]">
                  {"Current token pool on L1 and L2 side isn't balanced. Migrate Liquidity to L2 to earn rewards"}
                </p>
              )}
            </div>

            <MigrateLiquidtyForm />
          </div>
        </div>
      </div>
    </SMContainer>
  );
};

export default MigrateLiquidityView;

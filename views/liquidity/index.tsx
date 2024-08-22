'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

import { LangParamProp } from '@/config/internationalization/i18n';
import { Network } from '@/config/privy/config';
import { SMContainer, SMTable } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { allTableData, myTableData } from './dummy';
import ClaimModal from './claim-modal';
import Stake from './stake';

export type LiquidityViewProps = LangParamProp & { network: Network };

const tabs = ['all', 'my', 'stake'];

const LiquidityView = ({ lang, network }: LiquidityViewProps) => {
  const { navigate } = useSystemFunctions();
  const [tab, setTab] = useState<'all' | 'my' | 'stake'>('all');
  const [claimId, setClaimId] = useState<string>();

  const rowClick = (id: string) => {
    navigate.push(`/${network}/liquidity/${id}`);
  };

  const claimClick = (id: string) => setClaimId(id);

  const tabViews = [
    <SMTable key="all" data={allTableData} network={network} isConnected variant="secondary" rowClick={rowClick} />,
    <SMTable key="my" data={myTableData} network={network} isConnected variant="tertiary" rowClick={rowClick} claimClick={claimClick} />,
    <Stake key="stake" network={network} rowClick={rowClick} claimClick={claimClick} />,
  ];

  return (
    <>
      <SMContainer>
        <div className="pt-12 pb-[86px] flex flex-col items-stretch gap-8">
          <div className="self-stretch flex flex-col gap-6">
            <div className="flex flex-col gap-[13px] pb-5 border-b border-b-primary-1350">
              <h1 className="text-[30px] leading-[38px] font-Bitform text-primary-3400">Migrate</h1>
              <p className="text-primary-200">Migrate your LP positions to Base and earn rewards</p>
            </div>

            <div className="flex items-center gap-[13px]">
              {tabs.map((t, index) => (
                <button
                  key={t}
                  className={classNames('flex items-center justify-center py-2 px-3 h-9 rounded-md transition-all duration-500', { 'bg-white shadow-sm-shadow': tab === t })}
                  onClick={() => setTab(t as 'all' | 'my')}>
                  <span className={classNames('text-sm font-medium', { 'text-primary-1600': tab === t, 'text-primary-3050': tab !== t })}>
                    <span className="capitalize">{t}</span> {index !== 2 && 'pools'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col gap-6">
              {tabViews[tabs.indexOf(tab)]}
            </motion.div>
          </AnimatePresence>
        </div>
      </SMContainer>

      <ClaimModal show={Boolean(claimId)} id={claimId} close={() => setClaimId(undefined)} />
    </>
  );
};

export default LiquidityView;

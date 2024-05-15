'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SMClickAnimation, SMContainer, SMTable, SMModal, SMButton } from '@/components';
import { LangParamProp } from '@/config/internationalization/i18n';
import { SecondaryCloseIcon, LiquidityLinkIcon } from '@/public/icons';
import Add from './add';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import SMLoader from '@/components/loader';
import { useAccount } from 'wagmi';
import { Network } from '@/config/rainbow/config';

export type LiquidityViewProps = LangParamProp & { network: Network };

const LiquidityView = ({ lang, network }: LiquidityViewProps) => {
  const { userState, liquidityState, navigate } = useSystemFunctions();
  const [showInfo, setShowInfo] = useState(true);
  const [selectedToken, setSelectedToken] = useState('');
  const [showModal, setShowModal] = useState(true);
  const { isConnected } = useAccount();

  const { loading } = userState;
  const { loading: liquidity_loading, liquidities } = liquidityState;

  const toggleShowInfo = () => setShowInfo((prev) => !prev);

  const handleShowModal = (id?: string) => {
    if (id) setSelectedToken(id);

    setShowModal((prev) => !prev);
  };

  const tableData = liquidities.map((liquidity) => ({
    tokenName: liquidity.provider,
    tokenAddress: liquidity.pool_token_address,
    poolUrl: `https://uniswap.org/pool/${liquidity.transaction_hash}`,
    id: liquidity.id,
  }));

  if (loading || liquidity_loading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <SMLoader variant="medium" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="py-20 flex items-center justify-center bg-white rounded-[5px] border border-primary-1350 shadow-table-cta w-[343px] md:w-[448px]">
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center justify-center bg-very-light-gray rounded-full border-t border-primary-1700 p-4">
              <div className="flex items-center justify-center rounded-full border border-primary-250 bg-white p-[14px] shadow-fade-light">
                <LiquidityLinkIcon width={28} height={28} />
              </div>
            </div>

            <h1 className="text-primary-1750 text-[20px] leading-[30px] text-center">Coming soon</h1>
            <span className="text-primary-1500 text-[14px] leading-[24px] text-center">We’re rolling out this feature soon!</span>
          </div>

          <SMButton text="Back home" network={network} onClick={() => navigate.push(`/${network}/migrate`)} variant="plain" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SMContainer>
        <div className="flex flex-col py-5 md:py-12 gap-8 md:px-8">
          <div className="flex flex-col gap-5 pb-5 border-b border-b-primary-1350">
            <AnimatePresence>
              {showInfo && (
                <motion.div exit={{ opacity: 0 }} className="relative pl-6 pr-10 py-3 bg-primary-650 text-primary-700 rounded-xl text-[14px] leading-[24px]">
                  We’ll be adding support for LP management soon, in the mean time you can manage Liquidity positons on Uniswap.
                  <SMClickAnimation onClick={toggleShowInfo} className="absolute right-3 top-3 hidden md:block">
                    <SecondaryCloseIcon />
                  </SMClickAnimation>
                  <SMClickAnimation onClick={toggleShowInfo} className="absolute right-[12.5px] top-[11.987px] md:hidden">
                    <SecondaryCloseIcon width={20} height={20} />
                  </SMClickAnimation>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="min-w-80 flex flex-col items-start flex-1 gap-1">
              <h1 className="text-primary-300 text-[30px] leading-[38px] font-medium">Liquidity</h1>
              <p className="text-primary-1500 text-base">Add liquidity to newly deployed tokens and earn rewards</p>
            </div>
          </div>

          <SMTable isConnected={isConnected} data={tableData} network="base" variant="secondary" ctaAction={handleShowModal} />
        </div>
      </SMContainer>

      <SMModal show={showModal} close={() => setShowModal(false)} variant="secondary">
        <Add defaultId={selectedToken} />
      </SMModal>
    </>
  );
};

export default LiquidityView;

'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SMClickAnimation, SMContainer, SMTable, SMModal } from '@/components';
import { LangParamProp } from '@/config/internationalization/i18n';
import { SecondaryCloseIcon } from '@/public/icons';
import Add from './add';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import SMLoader from '@/components/loader';
import { useAccount } from 'wagmi';

const tableData = [
  {
    tokenName: '$NJOKU',
    tokenAddress: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    poolUrl: 'https://uniswap.org/pool/0x123abc',
  },
  {
    tokenName: '$ETHOS',
    tokenAddress: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    poolUrl: 'https://uniswap.org/pool/0x234bcd',
  },
  {
    tokenName: '$LINKR',
    tokenAddress: '0xaBcdef38979deF123456789ABcDeF1234567890',
    poolUrl: 'https://uniswap.org/pool/0x345cde',
  },
  {
    tokenName: '$DAIOS',
    tokenAddress: '0xDefa017DefA017DEfa017DEFA017dEFa017DeFA',
    poolUrl: 'https://uniswap.org/pool/0x456def',
  },
  {
    tokenName: '$UNIK',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x567f01',
  },
  {
    tokenName: '$COMPQ',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x678f12',
  },
  {
    tokenName: '$AAVEY',
    tokenAddress: '0xABCDEf0123456789abcdef0123456789ABCDef01',
    poolUrl: 'https://uniswap.org/pool/0x789f23',
  },
  {
    tokenName: '$SNXK',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x890f34',
  },
  {
    tokenName: '$MKRR',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x901f45',
  },
  {
    tokenName: '$YFIL',
    tokenAddress: '0xDEF0123456789abcDEF0123456789abcdef01234',
    poolUrl: 'https://uniswap.org/pool/0x012f56',
  },
];

const LiquidityView = ({ lang }: LangParamProp) => {
  const { userState, liquidityState } = useSystemFunctions();
  const [showInfo, setShowInfo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { isConnected } = useAccount();

  const { loading } = userState;
  const { loading: liquidity_loading, liquidities } = liquidityState;

  const toggleShowInfo = () => setShowInfo((prev) => !prev);

  const handleShowModal = (id?: string) => {
    setShowModal((prev) => !prev);
  };

  const tableData = liquidities.map((liquidity) => ({
    tokenName: liquidity.provider,
    tokenAddress: liquidity.pool_token_address,
    poolUrl: `https://uniswap.org/pool/${liquidity.transaction_hash}`,
  }));

  if (loading || liquidity_loading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <SMLoader variant="medium" />
      </div>
    );
  }

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

      <SMModal show={showModal} close={() => setShowModal(false)} variant="liquidity">
        <Add />
      </SMModal>
    </>
  );
};

export default LiquidityView;

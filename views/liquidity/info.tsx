import { AnimatePresence, motion } from 'framer-motion';

import { IInfo } from './types';
import { SuccessIcon } from '@/public/icons';

const Info = ({ tokenAAmount, show, tokenB, tokenA, poolPercentage, step, tokenRate, networkFee, tokenBAmount }: IInfo) => {
  let items = [
    {
      primaryText: `${tokenA} deposited`,
      secondaryText: `${tokenAAmount} ${tokenA}`,
      condition: step >= 1,
    },
    {
      primaryText: `$${tokenB} deposited`,
      secondaryText: `${tokenBAmount} ${tokenB}`,
      condition: step >= 1,
    },
  ];

  if (tokenRate) {
    items[2] = {
      primaryText: 'Rate',
      secondaryText: `1 ${tokenA} = ${tokenRate} ${tokenB}`,
      condition: true,
    };
  }

  items[3] = {
    primaryText: 'Share of pool',
    secondaryText: poolPercentage ? `${poolPercentage}%` : '--',
    condition: true,
  };

  if (networkFee) {
    items[4] = {
      primaryText: 'Network fee',
      secondaryText: `${networkFee}${tokenA}`,
      condition: true,
    };
  }

  items = items.filter((item) => item.condition !== false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div key={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6 self-stretch items-stretch">
          {step === 2 && (
            <motion.div key={2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center items-center mt-10">
              <SuccessIcon />
            </motion.div>
          )}

          <div className="flex flex-col gap-8 items-stretch self-stretch">
            {step === 2 && (
              <motion.h2 key={1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full text-center text-[24px] leading-[37.2px] text-primary-50 font-medium">
                Transaction Successful
              </motion.h2>
            )}

            <div className="w-full flex flex-col gap-3">
              {items.map((item, index) => (
                <div key={index} className="w-full flex justify-between items-center text-primary-200 text-sm">
                  <span>{item.primaryText}:</span>

                  <div className="flex items-center justify-center gap-2 font-medium">
                    {/* {item.tertiaryText && <span className="text-primary-2050">{item.tertiaryText}</span>} */}

                    <span>{item.secondaryText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Info;

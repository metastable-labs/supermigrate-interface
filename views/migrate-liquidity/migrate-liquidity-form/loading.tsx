import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayerTwoIcon, Logo, UniswapIcon } from '@/public/icons';

const BridgeLogo = (
  <div className="w-[22px] h-[22px] bg-primary-4450 rounded-full pt-[5.69px] pr-[4.05px] pb-[5.61px] pl-[5.11px] flex items-center justify-center">
    <Logo width={13} height={12} />
  </div>
);

const Loading = ({ step }: { step: number }) => {
  const steps = [
    { icon: <UniswapIcon />, inProgress: 'Pulling LP from Uniswap....', completed: 'Pulled LP from Uniswap', key: 0 },
    { icon: BridgeLogo, inProgress: 'Bridging LP tokens....', completed: 'Bridged LP tokens', key: 1 },
    { icon: <LayerTwoIcon />, inProgress: 'Confirming Deposit on L2....', completed: 'Deposit confirmed', key: 2 },
  ];

  let height = '148px';

  switch (step) {
    case 1:
      height = '214px';
      break;
    case 2:
      height = '280px';
      break;
    case 3:
      height = '280px';
      break;
    default:
      height = '148px';
      break;
  }

  return (
    <motion.div animate={{ height }} className="self-stretch p-6 flex flex-col gap-7 border border-primary-3450 bg-white rounded-base">
      <h1 className="text-[22px] leading-[34.1px] text-primary-3400 font-Bitform">Migrate Liquidity</h1>
      <AnimatePresence>
        {steps.map(
          ({ completed, icon, inProgress, key }, index) =>
            index <= step && (
              <motion.div
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-primary-2700 rounded-[10px] flex items-center gap-2.5 self-stretch">
                {icon}
                <p className="text-primary-4050 text-sm tracking-[-0.084px] font-medium">{index < step ? completed : inProgress}</p>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loading;

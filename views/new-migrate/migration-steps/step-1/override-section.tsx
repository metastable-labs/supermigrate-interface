import classNames from 'classnames';
import { motion } from 'framer-motion';

import { InfoIcon } from '@/public/icons';
import { Network } from '@/config/rainbow/config';

const OverrideIcon = ({ overridden, onClick, network }: { overridden: boolean; onClick?: () => void; network: Network }) => {
  return (
    <div
      className={classNames('py-[3px] px-1 flex items-center rounded-[10px] relative w-7 h-4 transition-colors duration-300 cursor-pointer', {
        'bg-primary-1300': !overridden,
        'bg-primary-1650': network === 'base' && overridden,
        'bg-primary-1950': network === 'optimism' && overridden,
        'bg-primary-500': network === 'mode' && overridden,
        'bg-primary-550': network === 'scroll' && overridden,
      })}
      onClick={onClick}>
      <motion.div
        animate={{
          top: '20%',
          left: overridden ? '50%' : '12%',
        }}
        className="bg-white rounded-full p-[1px] absolute w-[10px] h-[10px]">
        <div className="p-[2px] rounded-full bg-primary-2200">
          <div
            className={classNames('w-1 h-1 rounded-full', {
              'bg-primary-1300': !overridden,
              'bg-primary-1650': network === 'base' && overridden,
              'bg-primary-1950': network === 'optimism' && overridden,
              'bg-primary-500': network === 'mode' && overridden,
              'bg-primary-550': network === 'scroll' && overridden,
            })}
          />
        </div>
      </motion.div>
    </div>
  );
};

const OverrideSection = ({ handleOverride, overridden, network }: { handleOverride: () => void; overridden: boolean; network: Network }) => {
  return (
    <div className="self-stretch flex items-center justify-start gap-1">
      <OverrideIcon overridden={overridden} onClick={handleOverride} network={network} />
      <span className="text-primary-50 text-[14px] leading-none tracking-[-0.084px] text-ellipsis">Override</span>
      <div>
        <InfoIcon />
      </div>
    </div>
  );
};

export default OverrideSection;

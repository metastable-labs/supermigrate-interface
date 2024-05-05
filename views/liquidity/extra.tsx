'use client';

import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

import { IOption } from '@/components/select/types';
import { rates } from './dummy';

const Extra = ({ wallet, token, amount, show }: { wallet?: IOption; token?: IOption; amount: number; show: boolean }) => {
  const tokenRate: any = rates?.find((rate) => rate?.name === token?.value)?.[wallet?.text!];

  const total = amount * tokenRate;
  const formattedTotal = total.toLocaleString();
  const isLargeNumber = formattedTotal.replace(/,/g, '').length > 7;

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center justify-center gap-[6px] font-medium">
            <span
              className={classNames('text-primary-50 transition-all', {
                'text-[34px] leading-[52.7px]': !isLargeNumber,
                'text-[28px] leading-[46.7px]': isLargeNumber,
              })}>
              {formattedTotal}
            </span>
            <span className="text-[20px] leading-[31px] text-primary-200">{token?.text}</span>
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-start space-x-[-7.143px]">
              {token?.icon}
              {wallet?.icon}
            </div>
            <span className="text-base text-primary-200">
              {token?.value}/{wallet?.text}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Extra;

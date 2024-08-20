import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NumericFormat, OnValueChange } from 'react-number-format';

import { SMButton, SMClickAnimation } from '@/components';
import { EthIcon } from '@/public/icons';
import Loading from './loading';

function truncateToDecimals(num: number) {
  const factor = Math.pow(10, 5);
  return Math.floor(num * factor) / factor;
}

const MigrateLiquidtyForm = () => {
  const [amount, setAmount] = useState<number>();
  const [balance, setBalance] = useState(1579.79);
  const [loadingSteps, setLoadingSteps] = useState<number>();

  const balancePartitions = [
    { text: '10%', onClick: () => setAmount(truncateToDecimals(balance * 0.1)) },
    { text: '25%', onClick: () => setAmount(truncateToDecimals(balance * 0.25)) },
    { text: '50%', onClick: () => setAmount(truncateToDecimals(balance * 0.5)) },
    { text: '100%', onClick: () => setAmount(truncateToDecimals(balance)) },
  ];

  const invalidAmount = !amount || amount > balance;

  const handleAmountChange: OnValueChange = ({ floatValue }) => {
    setAmount(floatValue || 0);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingSteps(0);
  };

  const isLoading = typeof loadingSteps === 'number';

  const items = [
    <form key="form" onSubmit={onSubmit} className="self-stretch p-6 flex flex-col gap-9 border border-primary-3450 bg-white rounded-base">
      <h1 className="text-[22px] leading-[34.1px] text-primary-3400 font-Bitform">Migrate Liquidity</h1>

      <div className="self-stretch flex flex-col items-stretch gap-3.5">
        <div className="self-stretch p-4 rounded-base bg-primary-2700 flex flex-col gap-10 relative">
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-primary-4050 tracking-[-0.084px]">From</span> <EthIcon width={22} height={22} />
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-primary-200">LP BAL:</span>
              <span className="text-primary-4050 tracking-[-0.084px]">{balance.toLocaleString()} UNI-LP</span>
            </div>
          </div>

          <div className="self-stretch flex items-center justify-between rounded-[5px]">
            <NumericFormat
              value={amount}
              className="bg-transparent outline-none text-primary-2050 text-[24px] leading-[34.8px] max-w-[50%] font-Bitform"
              placeholder="Amount"
              thousandSeparator=","
              allowNegative={false}
              onValueChange={handleAmountChange}
            />

            <div className="py-1.5 px-3 bg-primary-4350 rounded-full flex items-center gap-2 justify-center">
              <EthIcon />
              <span className="text-primary-4050 tracking-[-0.084px]">UNI-LP</span>
            </div>
          </div>

          <div className="absolute h-[0.7px] w-full left-0 top-[52px] bg-primary-4350" />
        </div>

        <div className="self-stretch flex-wrap flex items-center content-center gap-3.5">
          {balancePartitions.map(({ text, onClick }, index) => (
            <SMClickAnimation key={index} className="px-[5px] py-1 bg-primary-2700 text-primary-200 text-[12px] leading-[18.6px] rounded-[3px] flex-1 text-center font-Bitform" onClick={onClick}>
              {text}
            </SMClickAnimation>
          ))}
        </div>
      </div>

      <SMButton variant="tertiary" text="Migrate" type="submit" fullWidth disabled={invalidAmount} />
    </form>,
    <Loading key="loading" step={loadingSteps!} />,
  ];

  useEffect(() => {
    if (loadingSteps === 0) {
      const intervalId = setInterval(() => {
        setLoadingSteps((prev) => {
          if (prev === undefined || prev === 3) {
            clearInterval(intervalId);
            setAmount(0);
            return undefined;
          }
          return (prev || 0) + 1;
        });
      }, 3000);
    }
  }, [loadingSteps]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={+isLoading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }} exit={{ opacity: 0 }}>
        {items[+isLoading]}
      </motion.div>
    </AnimatePresence>
  );
};

export default MigrateLiquidtyForm;

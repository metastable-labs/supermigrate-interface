import { useState } from 'react';
import { NumericFormat, OnValueChange } from 'react-number-format';
import classNames from 'classnames';

import { SMButton, SMClickAnimation, SMTable } from '@/components';
import { myTableData } from './dummy';
import { IStake } from './types';
import { truncateToDecimals } from './claim-modal';
import { AeroIcon } from '@/public/icons';

const tabs = ['stake', 'unstake'];

const Stake = ({ claimClick, network, rowClick }: IStake) => {
  const [tab, setTab] = useState<'stake' | 'unstake'>('stake');
  const [amount, setAmount] = useState<number>();
  const [aeroBalance, setAeroBalance] = useState<number>(24.7653);

  const disableButton = !amount || Number(amount) > aeroBalance;

  const balancePartitions = [
    { text: '10%', onClick: () => setAmount(truncateToDecimals(aeroBalance * 0.1)) },
    { text: '25%', onClick: () => setAmount(truncateToDecimals(aeroBalance * 0.25)) },
    { text: '50%', onClick: () => setAmount(truncateToDecimals(aeroBalance * 0.5)) },
    { text: '100%', onClick: () => setAmount(truncateToDecimals(aeroBalance)) },
  ];

  const handleAmountChange: OnValueChange = ({ floatValue }) => {
    setAmount(floatValue || 0);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Claiming', amount, 'Aero');
  };

  return (
    <div key="stake" className="flex flex-col lg:flex-row gap-6">
      <form className="p-6 w-full lg:w-1/3 flex flex-col items-stretch gap-6 bg-white border border-primary-250 rounded-base h-fit" onSubmit={onSubmit}>
        <div className="p-1 self-stretch flex gap-1 bg-primary-3950 rounded-[3px]">
          {tabs.map((text) => (
            <div
              key={text}
              className={classNames('p-1 flex-1 flex items-center justify-center text-[14px] leading-[24px] tracking-[-0.07px] font-medium cursor-pointer transition-colors duration-300 capitalize', {
                'text-primary-5050 rounded-[3px] bg-primary-4100 shadow-low-shadow': text === tab,
                'text-primary-4200 rounded-lg': text !== tab,
              })}
              onClick={() => {
                setTab(text as 'stake' | 'unstake');
                setAmount(0);
              }}>
              {text}
            </div>
          ))}
        </div>

        <div className="self-stretch flex flex-col gap-5">
          <div className="self-stretch flex items-center justify-between p-4 bg-primary-2700 border border-primary-2100 rounded-base">
            <NumericFormat
              value={amount}
              className="bg-transparent outline-none text-primary-50 text-[24px] leading-[34.8px] max-w-[30%] md:max-w-[50%] font-medium"
              placeholder="Amount"
              thousandSeparator=","
              allowNegative={false}
              onValueChange={handleAmountChange}
            />

            <div className="flex flex-col items-end justify-center gap-1.5">
              <div className="flex items-center justify-between gap-[11px] px-3 py-1.5 bg-white rounded-base">
                <AeroIcon />
                <span className="text-primary-200 text-[14px] leading-[21.7px] text-center font-bold">AERO-LP</span>
              </div>

              <p className="text-primary-200 text-[12px] leading-[17.4px] font-medium whitespace-nowrap">Available: {aeroBalance.toLocaleString('en', { maximumFractionDigits: 5 })} AERO - LP</p>
            </div>
          </div>

          <div className="self-stretch flex-wrap flex items-center content-center gap-3.5">
            {balancePartitions.map(({ text, onClick }, index) => (
              <SMClickAnimation
                key={index}
                className="flex-1 px-[5px] py-1 bg-white border border-primary-150 rounded-base text-primary-200 font-medium text-[12px] leading-[18.6px] text-center"
                onClick={onClick}>
                {text}
              </SMClickAnimation>
            ))}
          </div>
        </div>

        <SMButton variant="tertiary" text={tab === 'stake' ? 'Stake' : 'Unstake'} type="submit" fullWidth loading={false} disabled={disableButton} />
      </form>

      <div className="w-full lg:w-2/3">
        <SMTable key="my" data={myTableData} network={network} isConnected variant="tertiary" rowClick={rowClick} claimClick={claimClick} collapseTertiary />
      </div>
    </div>
  );
};

export default Stake;

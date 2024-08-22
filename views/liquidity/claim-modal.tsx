import { useEffect, useState } from 'react';
import { NumericFormat, OnValueChange } from 'react-number-format';

import { SMModal, SMButton, SMClickAnimation } from '@/components';
import { AeroIcon } from '@/public/icons';

export function truncateToDecimals(num: number) {
  const factor = Math.pow(10, 5);
  return Math.floor(num * factor) / factor;
}

const ClaimModal = ({ id, close, show }: { id?: string; close: () => void; show: boolean }) => {
  const [amount, setAmount] = useState<number>();
  const [aeroBalance, setAeroBalance] = useState<number>(0);

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

  const closeModal = () => {
    setAmount(undefined);
    close();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Claiming', amount, 'Aero');
  };

  useEffect(() => {
    setAeroBalance(24.74);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SMModal show={show} close={closeModal}>
      <form className="p-1 w-80 md:w-[334px] flex flex-col items-stretch gap-6" onSubmit={onSubmit}>
        <h1 className="text-primary-50 text-[20px] leading-[31px] font-medium">Claim Aero</h1>

        <div className="self-stretch flex flex-col gap-5">
          <div className="self-stretch flex items-center justify-between p-4 bg-primary-2700 border border-primary-2100 rounded-base">
            <NumericFormat
              value={amount}
              className="bg-transparent outline-none text-primary-50 text-[24px] leading-[34.8px] max-w-[50%] font-medium"
              placeholder="Amount"
              thousandSeparator=","
              allowNegative={false}
              onValueChange={handleAmountChange}
            />

            <div className="flex flex-col items-end justify-center gap-1.5">
              <div className="flex items-center justify-between gap-[11px] px-3 py-1.5 bg-white rounded-base">
                <AeroIcon />
                <span className="text-primary-200 text-[14px] leading-[21.7px] text-center font-bold">Aero</span>
              </div>

              <p className="text-primary-200 text-[12px] leading-[17.4px] font-medium whitespace-nowrap">Claimable: {aeroBalance.toLocaleString('en', { maximumFractionDigits: 5 })} Aero</p>
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

        <SMButton variant="tertiary" text="Claim" type="submit" fullWidth loading={false} disabled={disableButton} />

        <p className="self-stretch flex items-center py-3 px-6 rounded-xl bg-primary-650 text-primary-700 text-[14px] leading-[24px]">Aero emissions earned would be xyz.</p>
      </form>
    </SMModal>
  );
};

export default ClaimModal;

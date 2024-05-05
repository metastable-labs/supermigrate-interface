import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SMButton, SMClickAnimation } from '@/components';
import { IOption } from '@/components/select/types';
import { PlusIcon } from '@/public/icons';
import { rates, Rate } from './dummy';
import Info from './info';
import Extra from './extra';
import LiquidityInput from './input';
import { IAdd } from './types';
import { fetchTokenList } from '@/utils/uniswap';
import Image from 'next/image';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const Add = ({ defaultId }: IAdd) => {
  const { migrationState } = useSystemFunctions();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ amount: '', liquidity: '' });
  const [wallet, setWallet] = useState<IOption>();
  const [token, setToken] = useState<IOption>();
  const [walletBalance, setWalletBalance] = useState('24.64');
  const [headerText, setHeaderText] = useState('Add Liquidity');
  const [buttonText, setButtonText] = useState('Invalid Pair');
  const [walletOptions, setWalletOptions] = useState<IOption[]>([]);
  const [tokenOptions, setTokenOptions] = useState<IOption[]>([]);

  const showText = Boolean(wallet && token) && step === 0;
  const showInputSection = step === 0;
  const showExtra = Boolean(wallet && token) && step === 1;
  const showInfo = Boolean(wallet && token);
  const disabled = !wallet || !token || !values.amount || !values.liquidity;

  const handleWallet = (wallet: IOption) => setWallet(wallet);
  const handleToken = (token: IOption) => setToken(token);

  const handleInputChange = (field: 'amount' | 'liquidity') => (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawNumber = event.target.value.replace(/\D+/g, '');
    const num = rawNumber === '' ? '' : parseInt(rawNumber, 10).toLocaleString('en-US');
    setValues((prev) => ({ ...prev, [field]: num }));
    updateLiquidity(num, field === 'liquidity');
  };

  const updateLiquidity = (value: string, isLiquidityInput: boolean) => {
    const numericValue = parseInt(value.replace(/,/g, ''), 10);

    if (isNaN(numericValue) || !wallet || !token) return;

    const rateEntry = rates.find((rate) => rate.name === token.value);
    if (!rateEntry) return;

    const conversionRate = rateEntry[wallet.text as keyof Rate];

    if (typeof conversionRate !== 'number') return;

    const calculatedValue = isLiquidityInput ? numericValue / conversionRate : numericValue * conversionRate;

    const formattedValue = calculatedValue.toLocaleString('en-US');

    if (isLiquidityInput) {
      setValues((prev) => ({ ...prev, amount: formattedValue }));
    } else {
      setValues((prev) => ({ ...prev, liquidity: formattedValue }));
    }
  };

  const handleButtonAction = () => {
    if (step === 0) {
      setStep(1);
      setHeaderText('You will receive');
      setButtonText('Confirm');
    }

    if (step === 1) {
      console.log('values', values);
      setButtonText('Confirming Transaction...');
      setStep(2);
    }
  };

  const fetchTokens = async () => {
    const tokenList = await fetchTokenList();

    const walletOptions = tokenList?.map((token) => ({
      text: token.name,
      value: token.symbol,
      icon: <Image src={token.logoURI} width={20} height={20} alt={token.symbol} />,
      id: token.symbol,
    }));

    setWalletOptions(walletOptions);
  };

  const fetchMigratedTokens = async () => {
    const { migrations } = migrationState;

    const tokenOptions = migrations?.map((token) => ({
      text: token.name,
      value: token.symbol,
      icon: <Image src={token?.logo_url} width={20} height={20} alt={token.symbol} />,
      id: token.symbol,
    }));

    setTokenOptions(tokenOptions);
  };

  useEffect(() => {
    fetchTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMigratedTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [migrationState.migrations]);

  useEffect(() => {
    if (values.amount) {
      updateLiquidity(values.amount.replace(/,/g, ''), false);
    }
    if (wallet && token) {
      setButtonText('Supply');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, token]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-[303px] md:w-[408px] p-1 flex flex-col gap-6 items-start rounded-base">
      <AnimatePresence>
        {step !== 2 && (
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-primary-50 text-[24px] leading-[37.2px] font-medium">
            {headerText}
          </motion.h1>
        )}
      </AnimatePresence>

      {showInputSection && (
        <>
          <LiquidityInput
            value={values.amount}
            onChange={handleInputChange('amount')}
            placeholder="0"
            options={walletOptions}
            defaultId={defaultId}
            onSelect={handleWallet}
            selectText="Select wallet"
            balanceText={wallet?.text}
            balanceValue={walletBalance}
          />

          <div className="w-full flex items-center justify-center">
            <SMClickAnimation className="flex justify-center items-center rounded-full border-[0.4px] border-primary-250 p-[2px]">
              <PlusIcon color="#0A0D14" width={24} height={24} />
            </SMClickAnimation>
          </div>

          <LiquidityInput
            value={values.liquidity}
            onChange={handleInputChange('liquidity')}
            placeholder="0"
            options={tokenOptions}
            defaultId={defaultId}
            onSelect={handleToken}
            selectText="Select token"
            disabled={!token}
          />
        </>
      )}

      <Extra amount={parseInt(values.amount.replace(/,/g, ''), 10)} show={showExtra} token={token} wallet={wallet} />

      <Info poolPercentage={9.3} show={showInfo} token={token?.value} wallet={wallet?.text} amount={parseInt(values.amount.replace(/,/g, ''), 10)} step={step} />

      <SMButton text={buttonText} onClick={handleButtonAction} fullWidth network="base" variant="plain" disabled={disabled} />

      {showText && (
        <p className="p-4 rounded-[10px] bg-primary-650 self-stretch text-primary-700 text-[14px] leading-[24px]">
          {"By adding liquidity you'll earn 0.2% of all trades on this pair proportional to your share of the pool"}
        </p>
      )}
    </form>
  );
};

export default Add;

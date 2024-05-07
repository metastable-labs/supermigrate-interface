import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TokenList from '@uniswap/default-token-list';

import { SMButton, SMClickAnimation } from '@/components';
import { IOption } from '@/components/select/types';
import { PlusIcon } from '@/public/icons';
import { rates, Rate } from './dummy';
import Info from './info';
import Extra from './extra';
import LiquidityInput from './input';
import { IAdd } from './types';
import { getPair } from '@/utils/uniswap';
import Image from 'next/image';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { handleAmountInput } from '@/utils/helpers';
import { Address } from 'viem';
import { useChainId } from 'wagmi';
import useLiquidity from '@/hooks/useLiquidity';

const Add = ({ defaultId }: IAdd) => {
  const chainId = useChainId();
  const { migrationState } = useSystemFunctions();
  const { getEquivalentAmount, getPairAddress } = useLiquidity();

  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ amount: '', liquidity: '' });
  const [tokenA, setTokenA] = useState<IOption>();
  const [tokenB, setTokenB] = useState<IOption>();
  const [walletBalance, setWalletBalance] = useState('24.64');
  const [headerText, setHeaderText] = useState('Add Liquidity');
  const [buttonText, setButtonText] = useState('Invalid Pair');
  const [tokenAOptions, setTokenAOptions] = useState<IOption[]>([]);
  const [tokenBOptions, setTokenBOptions] = useState<IOption[]>([]);

  const showText = Boolean(tokenA && tokenB) && step === 0;
  const showInputSection = step === 0;
  const showExtra = Boolean(tokenA && tokenB) && step === 1;
  const showInfo = Boolean(tokenA && tokenB);
  const disabled = !tokenA || !tokenB || !values.amount || !values.liquidity;

  const handleTokenA = (wallet: IOption) => setTokenA(wallet);
  const handleToken = (token: IOption) => setTokenB(token);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const newValue = handleAmountInput(value);

    if (newValue === undefined) return;

    setValues((prev) => ({ ...prev, amount: newValue }));
  };

  const updateTokenB = async () => {
    try {
      const value = values.amount;
      const b = await getPairAddress(tokenA?.address as Address, '0x940181a94a35a4569e4529a3cdfb74e38fd98631');
      console.log('kkkkk', b);

      return;
      // if (!value) return;

      // const numericValue = parseInt(value.replace(/,/g, ''), 10);

      // if (isNaN(numericValue) || !tokenA || !tokenB) return;

      // const rateEntry = rates.find((rate) => rate.name === tokenB.value);
      // if (!rateEntry) return;

      // const conversionRate = rateEntry[tokenA.text as keyof Rate];

      // if (typeof conversionRate !== 'number') return;

      // const calculatedValue = numericValue * conversionRate;

      // const formattedValue = calculatedValue.toLocaleString('en-US');

      // setValues((prev) => ({ ...prev, liquidity: formattedValue }));
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleButtonAction = () => {
    if (step === 0) {
      setStep(1);
      setHeaderText('You will receive');
      setButtonText('Confirm');
    }

    if (step === 1) {
      setButtonText('Confirming Transaction...');
      setStep(2);
    }
  };

  const fetchTokens = async () => {
    const tokenList = TokenList.tokens.filter((token) => token.chainId === chainId);

    if (!tokenList) return;

    const nativeToken = [
      {
        text: 'Ethereum',
        value: 'ETH',
        symbol: 'ETH',
        icon: <Image src="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png" width={20} height={20} alt="ETH" />,
        address: '0x',
        id: 'ETH',
      },
    ];

    const walletOptions = tokenList?.map((token) => ({
      text: token.name,
      value: token.symbol,
      icon: <Image src={token.logoURI} width={20} height={20} alt={token.symbol} />,
      id: token.symbol,
      address: token.address,
    }));

    setTokenAOptions([...nativeToken, ...walletOptions]);
  };

  const fetchMigratedTokens = async () => {
    const { migrations } = migrationState;

    const tokenOptions = migrations?.map((token) => {
      const chain = token.chains.find((chain) => chain.id === chainId);

      return {
        text: token.name,
        value: token.symbol,
        icon: <Image src={token?.logo_url} width={20} height={20} alt={token.symbol} />,
        id: token.symbol,
        address: chain ? (chain.token_address as Address) : (token.chains[1].token_address as Address),
      };
    });

    setTokenBOptions(tokenOptions);
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
    updateTokenB();

    if (tokenA && tokenB) {
      setButtonText('Supply');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenA, tokenB]);

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
            onChange={handleInputChange}
            placeholder="0"
            options={tokenAOptions}
            defaultId={defaultId}
            onSelect={handleTokenA}
            selectText="Select wallet"
            balanceText={tokenA?.text}
            balanceValue={walletBalance}
          />

          <div className="w-full flex items-center justify-center">
            <SMClickAnimation className="flex justify-center items-center rounded-full border-[0.4px] border-primary-250 p-[2px]">
              <PlusIcon color="#0A0D14" width={24} height={24} />
            </SMClickAnimation>
          </div>

          <LiquidityInput value={values.liquidity} placeholder="0" options={tokenBOptions} defaultId={defaultId} onSelect={handleToken} selectText="Select token" disabled={!tokenB} disableInput />
        </>
      )}

      <Extra amount={parseInt(values.amount.replace(/,/g, ''), 10)} show={showExtra} token={tokenB} wallet={tokenA} />

      <Info poolPercentage={9.3} show={showInfo} token={tokenB?.value} wallet={tokenA?.text} amount={parseInt(values.amount.replace(/,/g, ''), 10)} step={step} />

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

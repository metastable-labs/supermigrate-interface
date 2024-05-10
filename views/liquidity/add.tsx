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
import { getTokenBalance, handleAmountInput } from '@/utils/helpers';
import { Address, formatEther } from 'viem';
import { useAccount, useChainId } from 'wagmi';
import useLiquidity from '@/hooks/useLiquidity';
import { getBalance } from '@wagmi/core';
import { wagmiConfig } from '@/config/rainbow/rainbowkit';

const noPair = '0x0000000000000000000000000000000000000000';
const ethAddress = '0x0000000000000000000000000000000000000000';

const Add = ({ defaultId }: IAdd) => {
  const chainId = useChainId();
  const { migrationState } = useSystemFunctions();
  const { getEquivalentAmount, getPairAddress, approveToken, checkTokenAllowance, addLiquidityForToken } = useLiquidity();
  const { address } = useAccount();

  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ tokenA: '', tokenB: '' });
  const [tokenA, setTokenA] = useState<IOption>();
  const [tokenB, setTokenB] = useState<IOption>();
  const [tokenABalance, setTokenABalance] = useState('');
  const [tokenBBalance, setTokenBBalance] = useState('');
  const [headerText, setHeaderText] = useState('Add Liquidity');
  const [buttonText, setButtonText] = useState('Invalid Pair');
  const [tokenAOptions, setTokenAOptions] = useState<IOption[]>([]);
  const [tokenBOptions, setTokenBOptions] = useState<IOption[]>([]);
  const [disableTokenBInput, setDisableTokenBInput] = useState(true);
  const [shouldApproveTokenB, setShouldApproveTokenB] = useState(false);
  const [tokenRate, setTokenRate] = useState(undefined);
  const [poolPercentage, setPoolPercentage] = useState(undefined);
  const [networkFee, setNetworkFee] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const showText = Boolean(tokenA && tokenB) && step === 0;
  const showInputSection = step === 0;
  const showExtra = Boolean(tokenA && tokenB) && step === 1;
  const showInfo = Boolean(tokenA && tokenB);
  const disabled = !tokenA || !tokenB || !values.tokenA || !values.tokenB;

  const handleTokenA = async (token: IOption) => {
    setTokenA(token);

    const balance = await getTokenBalance(address!, token.address as Address);

    setTokenABalance(balance?.toString());
  };
  const handleTokenB = (token: IOption) => setTokenB(token);

  const handleInputChange = (isLiquidity?: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const newValue = handleAmountInput(value);

    if (newValue === undefined) return;

    if (isLiquidity) {
      return setValues((prev) => ({ ...prev, tokenB: newValue }));
    }
    setValues((prev) => ({ ...prev, tokenA: newValue }));
  };

  const updateTokenB = async () => {
    try {
      if (!tokenB?.address) return;

      const value = values.tokenA;
      const pair = await getPairAddress(tokenA?.address as Address, tokenB?.address as Address);

      if (pair === noPair) {
        setDisableTokenBInput(false);
      }

      const balance = await getTokenBalance(address!, tokenB?.address as Address);
      console.log(balance);
      setTokenBBalance(balance?.toString());

      // const d = await getEquivalentAmount(100000000000000000000, tokenA?.address as Address, tokenB?.address as Address, tokenA?.decimals!, 18);
      // console.log('this is the equivalent', d);
      // return;
      if (!value) return;

      // const numericValue = Number(value.replace(/,/g, ''), 10);

      // if (isNaN(numericValue) || !tokenA || !tokenB) return;

      // const rateEntry = rates.find((rate) => rate.name === tokenB.value);
      // if (!rateEntry) return;

      // const conversionRate = rateEntry[tokenA.text as keyof Rate];

      // if (typeof conversionRate !== 'number') return;

      // const calculatedValue = numericValue * conversionRate;

      // const formattedValue = calculatedValue.toLocaleString('en-US');

      // setValues((prev) => ({ ...prev, tokenB: formattedValue }));
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleApproveTokenA = async () => {
    if (shouldApproveTokenB || tokenA?.address === ethAddress) return setShouldApproveTokenB(true);

    const valueWithoutComma = values.tokenA.replace(/,/g, '');
    const result = await approveToken(valueWithoutComma, tokenA?.address as Address, tokenA?.decimals!);
    if (!result) return;

    setShouldApproveTokenB(true);
    setLoading(false);
  };

  const handleApproveTokenB = async () => {
    if (!shouldApproveTokenB) return;

    const valueWithoutComma = values.tokenB.replace(/,/g, '');

    const result = await approveToken(valueWithoutComma, '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed', tokenB?.decimals!);
    if (!result) return;

    setButtonText('Add liquidity');
    setStep(1);
    setLoading(false);
  };

  const handleAddLiquidity = async () => {
    try {
      const allowance = await checkTokenAllowance(address!, '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed');
      const formattedAmount = formatEther(allowance);
      const valueAWithoutComma = values.tokenA.replace(/,/g, '');
      const valueBWithoutComma = values.tokenB.replace(/,/g, '');

      if (Number(formattedAmount) < Number(valueBWithoutComma)) return;

      const result = await addLiquidityForToken(tokenA?.address as Address, Number(valueAWithoutComma), Number(valueBWithoutComma), '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed');

      if (!result) return;

      console.log('this ois the result', result);

      setStep(2);
      setLoading(false);
      setButtonText('Close');
    } catch (e) {
      console.log(e);
    }
  };

  const handleButtonAction = async () => {
    setLoading(true);
    if (step === 0) {
      if (shouldApproveTokenB) {
        return handleApproveTokenB();
      }
      return handleApproveTokenA();
    }

    if (step === 1) {
      return handleAddLiquidity();
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
        address: ethAddress,
        id: 'ETH',
        decimals: 18,
      },
    ];

    const walletOptions = tokenList?.map((token) => ({
      text: token.name,
      value: token.symbol,
      icon: <Image src={token.logoURI} width={20} height={20} alt={token.symbol} />,
      id: token.symbol,
      address: token.address,
      decimals: token.decimals,
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
        decimals: chain?.token_detail_override?.decimals || token.chains[1].token_detail_override?.decimals || token.decimals,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenA, tokenB]);

  useEffect(() => {
    if (!tokenA || !tokenB) return;

    if (tokenA?.address === ethAddress) {
      setShouldApproveTokenB(true);
      setButtonText(`Approve ${tokenB.value}`);
    } else {
      setShouldApproveTokenB(false);
      setButtonText(`Approve ${tokenA.value}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenA, tokenB, shouldApproveTokenB]);

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
            value={values.tokenA}
            onChange={handleInputChange()}
            placeholder="0"
            options={tokenAOptions}
            defaultId={defaultId}
            onSelect={handleTokenA}
            selectText="Select token"
            balanceValue={tokenABalance}
          />

          <div className="w-full flex items-center justify-center">
            <SMClickAnimation className="flex justify-center items-center rounded-full border-[0.4px] border-primary-250 p-[2px]">
              <PlusIcon color="#0A0D14" width={24} height={24} />
            </SMClickAnimation>
          </div>

          <LiquidityInput
            value={values.tokenB}
            placeholder="0"
            options={tokenBOptions}
            defaultId={defaultId}
            onSelect={handleTokenB}
            selectText="Select token"
            disabled={!tokenB}
            disableInput={disableTokenBInput}
            balanceValue={tokenBBalance}
            onChange={handleInputChange(true)}
          />
        </>
      )}

      <Extra amount={values.tokenB} show={showExtra} token={tokenB} wallet={tokenA} />

      <Info
        networkFee={networkFee}
        tokenRate={tokenRate}
        poolPercentage={poolPercentage}
        show={showInfo}
        tokenB={tokenB?.value}
        tokenA={tokenA?.value}
        tokenAAmount={values.tokenA}
        tokenBAmount={values.tokenB}
        step={step}
      />

      <SMButton loading={loading} text={buttonText} onClick={handleButtonAction} fullWidth network="base" variant="plain" disabled={disabled} />

      {showText && (
        <p className="p-4 rounded-[10px] bg-primary-650 self-stretch text-primary-700 text-[14px] leading-[24px]">
          {"By adding liquidity you'll earn 0.2% of all trades on this pair proportional to your share of the pool"}
        </p>
      )}
    </form>
  );
};

export default Add;

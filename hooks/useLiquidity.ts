// HOW TO USE:

import { useChainId, useReadContract } from 'wagmi';
import { networks } from '@/config/rainbow/config';
import { CurrencyAmount } from '@uniswap/sdk-core';
import { Pair } from '@uniswap/v2-sdk';
import { getPair } from '@/utils/uniswap';
import { Address } from 'viem';

const useContract = () => {
  const chainId: any = useChainId();

  const currentNetwork = networks.find((network) => network.chainId === chainId);

  const addLiquidity = async () => {};

  const approveToken = () => {};

  const checkTokenAllowance = () => {};

  const getPairAddress = async (tokenA: Address, tokenB: Address) => {
    const pair = await getPair(chainId, tokenA, tokenB);
    return pair;
  };

  const getEquivalentAmount = async (amountA: CurrencyAmount<any>, amountB: CurrencyAmount<any>) => {
    const pair = new Pair(amountA, amountB);
    const result = pair.getOutputAmount(amountA);
    return {
      amount: result[0],
      pairAddress: result[1],
    };
  };

  return {
    addLiquidity,
    approveToken,
    checkTokenAllowance,
    getPairAddress,
    getEquivalentAmount,
  };
};

export default useContract;

/**
 * HOW TO USE:
 * *Getting amount out*:
 * When a user enters the first token amount, the second token amount is calculated based on the current token pair.
 * If the getPairAddress function returns 0, tell the user that there's no current price for the token and the price will be determined after liquidity has been deposited
 * If the pair address is 0, let the user manually input the amount for token B
 *
 *
 * *Adding liquidity*:
 * You must always approve both token A and Token B first before adding liquidity
 * When a user adds liquidity, the contract will create a new liquidity pool on Uniswap.
 */

import { useChainId } from 'wagmi';
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { Pair } from '@uniswap/v2-sdk';
import { addLiquidity, addLiquidityEth, getPair, getUniswapRouterAddress } from '@/utils/uniswap';
import { Address, erc20Abi } from 'viem';
import { readContract, writeContract } from '@wagmi/core';
import { wagmiConfig } from '@/config/rainbow/rainbowkit';

const useLiquidity = () => {
  const chainId: any = useChainId();

  const addLiquidityForToken = async (tokenA: Address, amountADesired: number, amountBDesired: number, tokenB?: Address) => {
    let liquidityResult: any;
    if (!tokenB) {
      liquidityResult = await addLiquidity(tokenA, tokenB!, amountADesired, amountBDesired);
    } else {
      liquidityResult = await addLiquidityEth(tokenA, amountADesired, amountBDesired);
    }
    return liquidityResult;
  };

  const approveToken = async (amount: any, tokenAddress: Address) => {
    const result = await writeContract(wagmiConfig, {
      abi: erc20Abi,
      address: tokenAddress,
      functionName: 'approve',
      args: [getUniswapRouterAddress(chainId), BigInt(amount)],
    });
    return result;
  };

  const checkTokenAllowance = async (ownerAddress: Address, tokenAddress: Address) => {
    const result = await readContract(wagmiConfig, {
      abi: erc20Abi,
      address: tokenAddress,
      functionName: 'allowance',
      args: [ownerAddress, getUniswapRouterAddress(chainId)],
    });
    return result;
  };

  const getPairAddress = async (tokenA: Address, tokenB: Address) => {
    const pair = await getPair(chainId, tokenA, tokenB);
    return pair;
  };

  const getEquivalentAmount = async (amountA: any, _tokenA: Address, _tokenB: Address, tokenADecimal: number, tokenBDecimal: number) => {
    const tokenA = new Token(chainId, _tokenA, tokenADecimal);
    const tokenB = new Token(chainId, _tokenB, tokenBDecimal);
    const pair = new Pair(CurrencyAmount.fromRawAmount(tokenA, amountA), CurrencyAmount.fromRawAmount(tokenB, 0));
    console.log('PAIR', pair);
    const result = pair.getOutputAmount(amountA);
    console.log('RESULT', result);
    return {
      amount: result[0],
      pairAddress: result[1],
    };
  };

  return {
    addLiquidityForToken,
    approveToken,
    checkTokenAllowance,
    getPairAddress,
    getEquivalentAmount,
  };
};

export default useLiquidity;

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
import { getPair, getUniswapRouterAddress } from '@/utils/uniswap';
import { Address, erc20Abi, parseEther, parseUnits } from 'viem';
import { readContract, writeContract } from '@wagmi/core';
import { wagmiConfig } from '@/config/rainbow/rainbowkit';
import { networks } from '@/config/rainbow/config';
import { addLiquidity, addLiquidityEth } from '@/utils/aerodrome';

const useLiquidity = () => {
  const chainId: any = useChainId();

  const currentNetwork = networks.find((network) => network.chainId === chainId);

  const addLiquidityForToken = async (tokenA: Address, amountADesired: number, amountBDesired: number, tokenB?: Address) => {
    try {
      let liquidityResult: any;
      if (!tokenB) {
        liquidityResult = await addLiquidity(tokenA, tokenB!, amountADesired, amountBDesired);
      } else {
        liquidityResult = await addLiquidityEth(tokenA, amountADesired, amountBDesired);
      }
      return liquidityResult;
    } catch (e) {
      console.log(e);
    }
  };

  const approveToken = async (amount: string, tokenAddress: Address, tokenDecimal: number) => {
    try {
      // const formattedAmount = tokenDecimal === 18 ? parseEther(amount) : parseUnits(amount, tokenDecimal);
      const formattedAmount = parseEther(amount);

      const result = await writeContract(wagmiConfig, {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: 'approve',
        args: [currentNetwork?.velodromeRouterAddress!, formattedAmount],
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  const checkTokenAllowance = async (ownerAddress: Address, tokenAddress: Address) => {
    const result = await readContract(wagmiConfig, {
      abi: erc20Abi,
      address: tokenAddress,
      functionName: 'allowance',
      args: [ownerAddress, currentNetwork?.velodromeRouterAddress!],
    });
    return result;
  };

  const getPairAddress = async (tokenA: Address, tokenB: Address) => {
    const result = await readContract(wagmiConfig, {
      abi: currentNetwork?.velodromeFactoryAbi,
      address: currentNetwork?.velodromeFactoryAddress!,
      functionName: 'getpool',
      args: [tokenA, tokenB, false],
    });
    return result;
  };

  //   const getEquivalentAmount = async (amountA: any, _tokenA: Address, _tokenB: Address, tokenADecimal: number, tokenBDecimal: number) => {
  //     const tokenA = new Token(chainId, _tokenA, tokenADecimal);
  //     const tokenB = new Token(chainId, _tokenB, tokenBDecimal);
  //     const pair = new Pair(CurrencyAmount.fromRawAmount(tokenA, amountA), CurrencyAmount.fromRawAmount(tokenB, 0));
  //     console.log('PAIR', pair);
  //     const result = pair.getOutputAmount(amountA);
  //     console.log('RESULT', result);
  //     return {
  //       amount: result[0],
  //       pairAddress: result[1],
  //     };
  //   };

  return {
    addLiquidityForToken,
    approveToken,
    checkTokenAllowance,
    getPairAddress,
  };
};

export default useLiquidity;

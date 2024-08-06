/**
 * Requirements:
 * 1. Create new liquidity pool on Aerodrome
 * 2. Create pairs with ERC20 tokens or with ETH
 */

import { wagmiConfig } from '@/config/rainbow/rainbowkit';
import { getAccount } from '@wagmi/core';
import { Address } from 'viem';
import { readContract, writeContract } from '@wagmi/core';
import { networks } from '@/config/rainbow/config';

export function calculateSlippageAmount(value: number) {
  return [(value * 95) / 100, (value * 5) / 100];
}

/**
 * @notice function to add liquidity to Aerodrome V2 for ERC20 pairs.
 * @dev If a pair doesn't exist for given tokens, a new pair will be created.
 * @param tokenA address of token A
 * @param tokenB address of token B
 * @param amountADesired amount of token A desired to be added
 * @param amountBDesired amount of token B desired to be added
 * @param deadline by default it is 5 minutes as L2
 */
export async function addLiquidity(tokenA: Address, tokenB: Address, amountADesired: number, amountBDesired: number, deadline: number = 60 * 5) {
  const amountAMin = calculateSlippageAmount(amountADesired)[0];
  const amountBMin = calculateSlippageAmount(amountBDesired)[0];

  const { chainId, address } = getAccount(wagmiConfig);
  const currentNetwork = networks.find((network) => network.chainId === chainId);

  try {
    const result = await writeContract(wagmiConfig, {
      abi: currentNetwork?.velodromeRouterAbi!,
      address: currentNetwork?.velodromeRouterAddress!,
      functionName: 'addLiquidity',
      args: [tokenA, tokenB, false, amountADesired, amountBDesired, amountAMin, amountBMin, address!, deadline],
    });
    return result;
  } catch (err) {
    return err;
  }
}

/**
 * @notice function to add liquidity to Aerodrome V2 for ERC20 pairs.
 * @dev If a pair doesn't exist for given tokens, a new pair will be created.
 * @param token address of token
 * @param amountERC20Desired amount of ERC20 token desired to be added
 * @param amountETHDesired amount of native ETH desired to be added
 * @param deadline by default it is 5 minutes as L2
 */
export async function addLiquidityEth(token: Address, amountERC20Desired: number, amountETHDesired: number, deadline: number = 60 * 5) {
  const amountERC20Min = calculateSlippageAmount(amountERC20Desired)[0];
  const amountNativeMin = calculateSlippageAmount(amountETHDesired)[0];

  const { chainId, address } = getAccount(wagmiConfig);
  const currentNetwork = networks.find((network) => network.chainId === chainId);

  try {
    const result = await writeContract(wagmiConfig, {
      abi: currentNetwork?.velodromeRouterAbi,
      address: currentNetwork?.velodromeRouterAddress!,
      functionName: 'addLiquidityETH',
      args: [token, false, amountERC20Desired, amountETHDesired, amountERC20Min, amountNativeMin, address!, deadline],
    });
    return result;
  } catch (err) {
    return err;
  }
}

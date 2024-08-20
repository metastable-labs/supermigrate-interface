/**
 * Requirements:
 * 1. Create new liquidity pool on Uniswap
 * 2. Create pairs with ERC20 tokens or with ETH
 */

import { wagmiConfig } from '@/config/privy/rainbowkit';
import { readContract, writeContract } from '@wagmi/core';
import { getAccount } from '@wagmi/core';
import { Address } from 'viem';
import { V2_FACTORY_ADDRESSES, V2_ROUTER_ADDRESSES } from '@uniswap/sdk-core';
import UNISWAP_V2_ROUTER_ABI from '../abis/UniswapV2Router.json';
import UNISWAP_V2_FACTORY_ABI from '../abis/UniswapV2Factory.json';

export function calculateSlippageAmount(value: number) {
  return [(value * 95) / 100, (value * 5) / 100];
}
export function getUniswapRouterAddress(chainId: number | undefined): Address {
  if (chainId === 8453) return V2_ROUTER_ADDRESSES[8453] as Address; // base
  if (chainId === 10) return V2_ROUTER_ADDRESSES[10] as Address; // optimimsm
  return '0x' as Address;
}

export function getUniswapFactoryAddress(chainId: number | undefined): Address {
  if (chainId === 8453) return V2_FACTORY_ADDRESSES[8453] as Address; // base
  if (chainId === 10) return V2_FACTORY_ADDRESSES[10] as Address; // optimimsm
  return '0x' as Address;
}

/**
 * @notice function to get a pair given a set of address.
 * @dev If a pair doesn't exist for given tokens, it returns zero.
 * @param tokenA address of token A
 * @param tokenB address of token B
 */
export async function getPair(chainId: number, tokenA: Address, tokenB: Address) {
  const result = await readContract(wagmiConfig, {
    abi: UNISWAP_V2_FACTORY_ABI.abi,
    address: getUniswapFactoryAddress(chainId),
    functionName: 'getPair',
    args: [tokenA, tokenB],
  });
  return result;
}
/**
 * @notice function to add liquidity to Uniswap V2 for ERC20 pairs.
 * @dev If a pair doesn't exist for given tokens, a new pair will be created.
 * @param tokenA address of token A
 * @param tokenB address of token B
 * @param amountADesired amount of token A desired to be added
 * @param amountBDesired amount of token B desired to be added
 * @param deadline by default it is 5 minutes as L2
 */
export async function addLiquidity(tokenA: Address, tokenB: Address, amountADesired: number, amountBDesired: number) {
  const amountAMin = calculateSlippageAmount(amountADesired)[0];
  const amountBMin = calculateSlippageAmount(amountBDesired)[0];

  const deadline = 60 * 5;

  const { chainId, address } = getAccount(wagmiConfig);

  try {
    const result = await writeContract(wagmiConfig, {
      abi: UNISWAP_V2_ROUTER_ABI,
      address: getUniswapRouterAddress(chainId),
      functionName: 'addLiquidity',
      args: [tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, address, deadline],
    });
    return result;
  } catch (error) {
    return error;
  }
}

/**
 * @notice function to add liquidity to Uniswap V2 for ERC20 pairs.
 * @dev If a pair doesn't exist for given tokens, a new pair will be created.
 * @param token address of token
 * @param amountERC20Desired amount of ERC20 token desired to be added
 * @param amountETHDesired amount of native ETH desired to be added
 * @param deadline by default it is 5 minutes as L2
 */
export async function addLiquidityEth(token: Address, amountERC20Desired: number, amountETHDesired: number) {
  const amountERC20Min = calculateSlippageAmount(amountERC20Desired)[0];
  const amountNativeMin = calculateSlippageAmount(amountETHDesired)[0];

  const deadline = 60 * 5;

  const { chainId, address } = getAccount(wagmiConfig);

  try {
    const result = await writeContract(wagmiConfig, {
      abi: UNISWAP_V2_ROUTER_ABI,
      address: getUniswapRouterAddress(chainId),
      functionName: 'addLiquidityETH',
      args: [token, amountERC20Desired, amountETHDesired, amountERC20Min, amountNativeMin, address, deadline],
    });
    return result;
  } catch (error) {
    return error;
  }
}

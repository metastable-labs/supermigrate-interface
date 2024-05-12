/**
 * Requirements:
 * 1. Create new liquidity pool on Aerodrome
 * 2. Create pairs with ERC20 tokens or with ETH
 */

import { wagmiConfig } from '@/config/rainbow/rainbowkit';
import { getAccount } from '@wagmi/core';
import { Address } from 'viem';
import { useWriteContract } from 'wagmi';
import AERODROME_ROUTER_ABI from '../config/rainbow/abis/AerodromeRouter.json';

export function calculateSlippageAmount(value: number) {
  return [(value * 95) / 100, (value * 5) / 100];
}

export function getAerodromeRouterAddress(chainId: number | undefined): Address {
  if (chainId === 8453) return '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43'; // Base
  if (chainId === 84532) return '0x70bD534579cbaBbE9Cd4AD4210e29CC9BA1E9287'; // Base Sepolia
  return '0x';
}
export function getAerodromeFactoryAddress(chainId: number | undefined): Address {
  if (chainId === 8453) return '0x420DD381b31aEf6683db6B902084cB0FFECe40Da'; // Base

  return '0x';
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
export async function AddLiquidity(tokenA: Address, tokenB: Address, amountADesired: number, amountBDesired: number, deadline: number = 60 * 5) {
  const amountAMin = calculateSlippageAmount(amountADesired)[0];
  const amountBMin = calculateSlippageAmount(amountBDesired)[0];

  const { chainId, address } = getAccount(wagmiConfig);
  const { writeContract, error, isError } = useWriteContract();

  writeContract({
    abi: AERODROME_ROUTER_ABI,
    address: getAerodromeRouterAddress(chainId),
    functionName: 'addLiquidity',
    args: [tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, address, deadline],
  });

  return { error, isError };
}

/**
 * @notice function to add liquidity to Aerodrome V2 for ERC20 pairs.
 * @dev If a pair doesn't exist for given tokens, a new pair will be created.
 * @param token address of token
 * @param amountERC20Desired amount of ERC20 token desired to be added
 * @param amountETHDesired amount of native ETH desired to be added
 * @param deadline by default it is 5 minutes as L2
 */
export async function AddLiquidityEth(token: Address, amountERC20Desired: number, amountETHDesired: number, deadline: number = 60 * 5) {
  const amountERC20Min = calculateSlippageAmount(amountERC20Desired)[0];
  const amountNativeMin = calculateSlippageAmount(amountETHDesired)[0];

  const { chainId, address } = getAccount(wagmiConfig);
  const { writeContract, error, isError } = useWriteContract();

  writeContract({
    abi: AERODROME_ROUTER_ABI,
    address: getAerodromeRouterAddress(chainId),
    functionName: 'addLiquidityETH',
    args: [token, amountERC20Desired, amountETHDesired, amountERC20Min, amountNativeMin, address, deadline],
  });

  return { error, isError };
}

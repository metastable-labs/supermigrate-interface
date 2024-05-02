/**
 * Requirements:
 * 1. Create new liquidity pool on Uniswap
 * 2. Create pairs with ERC20 tokens or with ETH
 */

import { wagmiConfig } from "@/config/rainbow/rainbowkit";
import { getAccount } from "@wagmi/core";
import { Address } from "viem";
import { useWriteContract } from "wagmi";
import UNISWAP_V2_ROUTER_ABI from "../abis/UniswapV2Router.json";

export function calculateSlippageAmount(value: number) {
    return [value * 95 / 100, value * 5 / 100]
  }

export function getUniswapRouterAddress(chainId: number | undefined): Address {
    if(chainId === 8453) return "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24"; // base
    if(chainId === 84532) return "0xf6441bbbb55aaf15aaF4007b82202450858Da7c9"; // base sepolia
    return "0x";
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
export async function addLiquidity(tokenA: Address, tokenB: Address, amountADesired: number, amountBDesired: number, deadline: number = 60 * 5) {
    const amountAMin = calculateSlippageAmount(amountADesired)[0];
    const amountBMin = calculateSlippageAmount(amountBDesired)[0];

    const { chainId, address } = getAccount(wagmiConfig);
    const { writeContract, error, isError } = useWriteContract();

    writeContract({
        abi: UNISWAP_V2_ROUTER_ABI,
        address: getUniswapRouterAddress(chainId),
        functionName: 'addLiquidity',
        args: [
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            address,
            deadline
        ]
    });

    return {error, isError};
}

/**
 * @notice function to add liquidity to Uniswap V2 for ERC20 pairs.
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
    const { writeContract, error, isError } = useWriteContract();

    writeContract({
        abi: UNISWAP_V2_ROUTER_ABI,
        address: getUniswapRouterAddress(chainId),
        functionName: 'addLiquidityETH',
        args: [
            token,
            amountERC20Desired,
            amountETHDesired,
            amountERC20Min,
            amountNativeMin,
            address,
            deadline
        ]
    });

    return {error, isError};
}

import { erc20Abi } from 'viem';
import { mainnet } from 'viem/chains';

import { createPublicClient, http } from 'viem';
import { networks } from '@/config/privy/config';

const readTokenData = async (tokenAddress: `0x${string}`) => {
  const client = createPublicClient({
    chain: mainnet,
    transport: http('https://eth.llamarpc.com'),
  });

  const decimal = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'decimals',
  });
  const name = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'name',
  });
  const symbol = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'symbol',
  });

  const result = {
    name,
    symbol,
    decimal,
  };

  return result;
};

export default readTokenData;

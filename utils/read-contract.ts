import { erc20Abi } from "viem";
import { mainnet } from "viem/chains";

import { createPublicClient, http } from "viem";

const readTokenData = async (tokenAddress: `0x${string}`) => {
  const rpcUrl = "https://mainnet.gateway.tenderly.co";

  if (!rpcUrl) throw new Error("RPC URL not found for the given chainId.");

  const client = createPublicClient({
    chain: mainnet,
    transport: http(rpcUrl),
  });

  const decimal = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "decimals",
  });
  const name = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "name",
  });
  const symbol = await client.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "symbol",
  });

  const result = {
    name,
    symbol,
    decimal,
  };

  return result;
};

export default readTokenData;

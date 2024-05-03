import { erc20Abi } from "viem";
import { mainnet } from "viem/chains";

import { createPublicClient, http } from "viem";
import { networks } from "@/config/rainbow/config";

const readTokenData = async (tokenAddress: `0x${string}`, chainId: number) => {
  const connectedNetwork = networks.find(
    (network) => network.chainId === chainId
  );
  const rpcUrl = connectedNetwork?.rpcUrl;

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

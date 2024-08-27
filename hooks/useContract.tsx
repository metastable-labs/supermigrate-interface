import { useWaitForTransactionReceipt, useWriteContract, useChainId } from 'wagmi';
import { getTransactionReceipt } from '@wagmi/core';
import { wagmiConfig } from '@/config/privy/privy';
import { networks } from '@/config/privy/config';

const useContract = () => {
  const chainId: any = useChainId();
  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const currentNetwork = networks.find((network) => network.chainId === chainId);

  const factory = currentNetwork?.factoryAddress;
  const superFactory = currentNetwork?.superFactoryAddress;
  const abi = currentNetwork?.abi;
  const superAbi = currentNetwork?.superAbi;

  const funcName = 'createStandardL2Token';

  const deployToken = (remoteToken: string, tokenName: string, tokenSymbol: string) => {
    writeContract({
      address: factory!,
      abi,
      functionName: funcName,
      args: [remoteToken, tokenName, tokenSymbol],
    });
  };

  const deployTokenWithDecimal = (remoteToken: string, tokenName: string, tokenSymbol: string, tokenDecimal: string) => {
    writeContract({
      address: superFactory!,
      abi: superAbi,
      functionName: chainId === 8453 ? 'beBased' : 'beSuper',
      args: [remoteToken, tokenName, tokenSymbol, Number(tokenDecimal)],
    });
  };

  const getTransactionData = () => {
    let transactionData;
    if (hash) {
      transactionData = getTransactionReceipt(wagmiConfig, { hash, chainId });
    }
    return transactionData;
  };

  return {
    deployToken,
    isPending,
    isConfirmed,
    getTransactionData,
    deployTokenWithDecimal,
    error,
    hash,
  };
};

export default useContract;

import { useEffect } from "react";
import { useAccount, useSwitchChain, useChainId } from "wagmi";

import { wagmiConfig } from "@/config/rainbow/rainbowkit";

const useConnect = () => {
  const { isConnected, connector, address } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const listener = () => {
    if (chainId) {
      const isAcceptedChain = wagmiConfig.chains.find(
        (chain) => chain.id === chainId
      );

      if (isConnected && !isAcceptedChain) {
        return (
          switchChain && switchChain({ chainId: wagmiConfig.chains[0].id })
        );
      }
    }
  };

  useEffect(() => {
    listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, isConnected, address]);

  return {
    connector,
  };
};

export default useConnect;

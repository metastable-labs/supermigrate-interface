'use client';

import { ReactNode } from 'react';
import { base, optimism, mode } from 'wagmi/chains';
import { type Chain } from 'viem';
import { http } from 'wagmi';
import { createConfig, WagmiProvider } from '@privy-io/wagmi';
import { PrivyProvider } from '@privy-io/react-auth';
import type { PrivyClientConfig } from '@privy-io/react-auth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { inkChainID } from './config';

export const inkChain = {
  id: inkChainID,
  name: 'Ink Sepolia',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-gel-sepolia.inkonchain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'InkScan',
      url: 'https://explorer-sepolia.inkonchain.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0x0000000000000000000000000000000000000000',
      blockCreated: 0,
    },
  },
} as const satisfies Chain;

export const wagmiConfig = createConfig({
  chains: [base, optimism, mode, inkChain],
  transports: {
    [base.id]: http(),
    [optimism.id]: http(),
    [mode.id]: http(),
    [inkChainID]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    noPromptOnSignature: false,
  },
};

const queryClient = new QueryClient();

const RainbowProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!} config={privyConfig}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
};

export default RainbowProvider;

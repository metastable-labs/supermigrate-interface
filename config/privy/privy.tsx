'use client';

import { ReactNode } from 'react';
import { base, optimism, mode, baseSepolia } from 'wagmi/chains';
import { http } from 'wagmi';
import { createConfig, WagmiProvider } from '@privy-io/wagmi';
import { PrivyProvider } from '@privy-io/react-auth';
import type { PrivyClientConfig } from '@privy-io/react-auth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const wagmiConfig = createConfig({
  chains: [base, optimism, mode, baseSepolia],
  transports: {
    [base.id]: http(),
    [optimism.id]: http(),
    [mode.id]: http(),
    [baseSepolia.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    noPromptOnSignature: false,
  },
};

const queryClient = new QueryClient();

const PrivyQueryProvider = ({ children }: { children: ReactNode }) => {
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

export default PrivyQueryProvider;

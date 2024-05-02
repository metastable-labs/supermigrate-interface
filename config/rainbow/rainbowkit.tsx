import "@rainbow-me/rainbowkit/styles.css";

import React, { ReactNode } from "react";
import { base, optimism, scroll, mode } from "wagmi/chains";
import { WagmiProvider } from "wagmi";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  BasePrimaryMobileIcon,
  ModePrimaryMobileIcon,
  OptimismPrimaryMobileIcon,
  ScrollPrimaryMobileIcon,
} from "@/public/icons";

export type Network =
  | "base"
  | "optimism"
  | "mode"
  | "scroll"
  | "linea"
  | "zora"
  | "world-chain"
  | "degen"
  | "pgn";

export interface NetworkProps {
  title: string;
  variant?: Network;
  onClick?: (network: Network) => void;
  chainId: number;
  icon?: ReactNode;
  comingSoon?: boolean;
}

export const networks: NetworkProps[] = [
  {
    title: "Base",
    variant: "base",
    chainId: base.id,
    icon: <BasePrimaryMobileIcon />,
  },
  {
    title: "Optimism",
    variant: "optimism",
    chainId: optimism.id,
    icon: <OptimismPrimaryMobileIcon />,
  },
  {
    title: "Mode",
    variant: "mode",
    chainId: mode.id,
    icon: <ModePrimaryMobileIcon />,
  },
  {
    title: "Scroll",
    variant: "scroll",
    chainId: scroll.id,
    icon: <ScrollPrimaryMobileIcon />,
  },
];

export const wagmiConfig = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME!,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [base, optimism, scroll, mode],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const RainbowProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowProvider;

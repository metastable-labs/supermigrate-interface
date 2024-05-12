import '@rainbow-me/rainbowkit/styles.css';

import React, { ReactNode } from 'react';
import { base, optimism, mode } from 'wagmi/chains';

import OptimismMintableERC20Factory from './abis/OptimismMintableERC20Factory.json';
import BasedERC20FactoryMain from './abis/BasedERC20FactoryMain.json';
import SuperERC20Factory from './abis/SuperERC20Factory.json';
import AerodromeRouter from './abis/AerodromeRouter.json';
import AerodromeFactory from './abis/AerodromeFactory.json';

import { BasePrimaryMobileIcon, ModePrimaryMobileIcon, OptimismPrimaryMobileIcon } from '@/public/icons';

export type Network = 'base' | 'optimism' | 'mode' | 'scroll' | 'linea' | 'zora' | 'world-chain' | 'degen';

export interface NetworkProps {
  title: string;
  variant?: Network;
  onClick?: (network: Network) => void;
  chainId: number;
  icon?: ReactNode;
  comingSoon?: boolean;
  rpcUrl?: string;
  factoryAddress?: `0x${string}`;
  superFactoryAddress?: `0x${string}`;
  velodromeRouterAddress?: `0x${string}`;
  velodromeFactoryAddress?: `0x${string}`;
  aerodromeRouterAddress?: `0x${string}`;
  aerodromeFactoryAddress?: `0x${string}`;
  aerodromeRouterAbi?: any;
  aerodromeFactoryAbi?: any;
  velodromeRouterAbi?: any;
  velodromeFactoryAbi?: any;
  abi?: any;
  superAbi?: any;
}

export const networks: NetworkProps[] = [
  {
    title: 'Base',
    variant: 'base',
    chainId: base.id,
    icon: <BasePrimaryMobileIcon />,
    rpcUrl: 'https://mainnet.gateway.tenderly.co',
    factoryAddress: '0xf23d369d7471bd9f6487e198723eea023389f1d4',
    superFactoryAddress: '0x7F46a4944F9C3ecF4Ea622364132b3fE9aBa1015',
    aerodromeRouterAddress: '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43',
    aerodromeFactoryAddress: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
    aerodromeRouterAbi: AerodromeRouter,
    aerodromeFactoryAbi: AerodromeFactory,
    abi: OptimismMintableERC20Factory.abi,
    superAbi: BasedERC20FactoryMain.abi,
  },
  {
    title: 'Optimism',
    variant: 'optimism',
    chainId: optimism.id,
    icon: <OptimismPrimaryMobileIcon />,
    rpcUrl: 'https://mainnet.optimism.io',
    factoryAddress: '0x4200000000000000000000000000000000000012',
    superFactoryAddress: '0x885E7a50287d62Fc4b490EB38eA599bF2F48c19F',
    velodromeRouterAddress: '0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858',
    velodromeFactoryAddress: '0xF1046053aa5682b4F9a81b5481394DA16BE5FF5a',
    abi: OptimismMintableERC20Factory.abi,
    superAbi: SuperERC20Factory.abi,
  },
  {
    title: 'Mode',
    variant: 'mode',
    chainId: mode.id,
    icon: <ModePrimaryMobileIcon />,
    rpcUrl: 'https://mainnet.mode.network/',
    factoryAddress: '0x49e14991C9E735975a782F3C2AAc8C26DE8245fA',
    superFactoryAddress: '0x49e14991C9E735975a782F3C2AAc8C26DE8245fA',
    velodromeRouterAddress: '0x3a63171DD9BebF4D07BC782FECC7eb0b890C2A45',
    velodromeFactoryAddress: '0x31832f2a97Fd20664D76Cc421207669b55CE4BC0',
    abi: OptimismMintableERC20Factory.abi,
    superAbi: SuperERC20Factory.abi,
  },
];

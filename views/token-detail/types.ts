import { Network } from '@/config/privy/config';

type FastLinkVariant = 'web' | 'x';

interface IFastLink {
  variant: FastLinkVariant;
  href: string;
}

interface ITransactionHash {
  hashes?: {
    name: string;
    urlText: string;
    url: string;
  }[];
}

interface AddToBridgeProps {
  show: boolean;
  close: () => void;
  network: Network;
  id: string;
}

export type { IFastLink, FastLinkVariant, ITransactionHash, AddToBridgeProps };

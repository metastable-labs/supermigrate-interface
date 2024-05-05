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

export type { IFastLink, FastLinkVariant, ITransactionHash };

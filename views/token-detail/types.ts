type FastLinkVariant = "web" | "x";

interface IFastLink {
  variant: FastLinkVariant;
  href: string;
}

export type { IFastLink, FastLinkVariant };

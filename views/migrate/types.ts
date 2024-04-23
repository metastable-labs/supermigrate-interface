import { Network } from "@/components/button/types";

interface INetwork {
  network: Network;
}

interface CardProps {
  title: string;
  variant?: Network;
  onClick?: (network: Network) => void;
  chainId: number;
}

interface ISelectionComponent {
  setMigrateNetwork: (network: Network) => void;
}

export type { INetwork, CardProps, ISelectionComponent };

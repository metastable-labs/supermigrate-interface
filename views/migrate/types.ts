type Network = "base" | "optimism" | "mode" | "scroll";

interface INetwork {
  network: Network;
}

interface CardProps {
  title: string;
  variant?: Network;
  onClick?: (network: Network) => void;
}

interface ISelectionComponent {
  setMigrateNetwork: (network: Network) => void;
}

export type { Network, INetwork, CardProps, ISelectionComponent };

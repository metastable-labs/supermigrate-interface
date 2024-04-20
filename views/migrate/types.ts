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

type ButtonVariants = "git" | "new" | "bland-new";

interface IButton {
  variant?: ButtonVariants;
  onClick: () => void;
  text: string;
  network?: Network;
}

export type {
  Network,
  INetwork,
  CardProps,
  ISelectionComponent,
  IButton,
  ButtonVariants,
};

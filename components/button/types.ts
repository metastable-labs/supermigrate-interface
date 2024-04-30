import { Network } from "@/config/rainbow/rainbowkit";

type ButtonVariants = "git" | "new" | "bland-new" | "plain";

interface IButton {
  variant?: ButtonVariants;
  onClick: () => void;
  text: string;
  network?: Network;
  fullWidth?: boolean;
}

export type { IButton, ButtonVariants };

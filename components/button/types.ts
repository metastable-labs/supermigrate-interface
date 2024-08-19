import { Network } from '@/config/privy/config';

type ButtonVariants = 'git' | 'new' | 'bland-new' | 'plain' | 'tertiary';

interface IButton {
  variant?: ButtonVariants;
  onClick?: () => void;
  text: string;
  network?: Network;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

export type { IButton, ButtonVariants };

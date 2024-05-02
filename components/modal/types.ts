export interface Modal {
  children: React.ReactNode;
  show: boolean;
  close?: () => void;
  variant?: "default" | "git-connect" | "liquidity";
}

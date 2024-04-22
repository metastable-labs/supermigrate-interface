export interface Modal {
  children: React.ReactNode;
  show: boolean;
  close?: () => void;
}

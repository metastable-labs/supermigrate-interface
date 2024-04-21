export interface Modal {
  close: () => void;
  variant?: "normal" | "large";
  children: React.ReactNode;
}

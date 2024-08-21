type ActionVariant = 'wallet' | 'code' | 'x';

interface ActionProps {
  variant: ActionVariant;
  index: number;
  action: (value?: string) => void;
}

interface FormProp {
  code: string;
}

export type { ActionProps, FormProp, ActionVariant };

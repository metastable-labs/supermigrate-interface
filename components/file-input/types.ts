interface ISMFileInput {
  name: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  isRequired?: boolean;
  handleFileChange: any;
}

export type { ISMFileInput };

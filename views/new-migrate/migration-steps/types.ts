import { Network } from "@/config/rainbow/config";
import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

interface FormProp {
  tokenAddress: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenDecimal?: string;
  tokenDescription: string;
  websiteLink?: string;
  twitterLink: string;
  file?: File | null;
  overridden?: boolean;
}

interface StepProps {
  register?: UseFormRegister<FormProp>;
  watch?: UseFormWatch<FormProp>;
  errors?: FieldErrors<FormProp>;
  network: Network;
  setStep: Dispatch<SetStateAction<number>>;
  setFile?: Dispatch<SetStateAction<File | null>>;
  file?: File | null;
  overridden?: boolean;
  setOverridden?: Dispatch<SetStateAction<boolean>>;
  fetchingTokenAddress?: boolean;
}

export type { FormProp, StepProps };

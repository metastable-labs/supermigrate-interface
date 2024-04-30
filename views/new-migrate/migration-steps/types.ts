import { Network } from "@/config/rainbow/rainbowkit";
import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormProp {
  tokenAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  tokenDescription: string;
  websiteLink?: string;
  twitterLink: string;
}

interface StepProps {
  register?: UseFormRegister<FormProp>;
  errors?: FieldErrors<FormProp>;
  network: Network;
  setStep: Dispatch<SetStateAction<number>>;
  setFile?: Dispatch<SetStateAction<File | null>>;
  file?: File | null;
}

export type { FormProp, StepProps };

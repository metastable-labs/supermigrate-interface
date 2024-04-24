import { Network } from "@/components/button/types";
import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormProp {
  tokenAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  tokenDescription: string;
}

interface StepProps {
  register: UseFormRegister<FormProp>;
  errors: FieldErrors<FormProp>;
  network: Network;
  setStep: Dispatch<SetStateAction<number>>;
}

export type { FormProp, StepProps };

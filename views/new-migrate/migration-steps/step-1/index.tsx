import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { StepProps } from "../types";
import TokenInfo from "./token-info";
import OverrideSection from "./override-section";
import { SMButton, SMInput } from "@/components";

const Step1 = ({
  register,
  errors,
  network,
  setStep,
  watch,
  overridden,
  setOverridden,
  fetchingTokenAddress,
}: StepProps) => {
  const tokenAddress = watch?.("tokenAddress");
  const tokenDecimal = watch?.("tokenDecimal");
  const tokenDescription = watch?.("tokenDescription");
  const tokenName = watch?.("tokenName");
  const tokenSymbol = watch?.("tokenSymbol");

  const tokenInfo = {
    name: tokenName || "",
    symbol: `$${tokenSymbol}` || "",
    decimal: tokenDecimal || "",
  };

  const disbleButton =
    !tokenAddress || (!tokenDecimal && overridden) || !tokenDescription;

  const handleOverride = () => setOverridden!((prev) => !prev);
  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:min-w-[448px]">
      <SMInput
        name="tokenAddress"
        register={register?.("tokenAddress")}
        placeholder="Token address"
        error={errors?.tokenAddress}
        type="text"
        label="Token Address on Ethereum (L1)"
        isRequired
      />

      {tokenAddress && tokenInfo.name && (
        <TokenInfo loading={fetchingTokenAddress} {...tokenInfo} />
      )}

      <OverrideSection
        handleOverride={handleOverride}
        overridden={overridden!}
        network={network}
      />

      <AnimatePresence>
        {overridden && (
          <motion.div
            className="flex flex-col gap-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SMInput
              name="tokenName"
              register={register?.("tokenName")}
              placeholder="Token name"
              error={errors?.tokenName}
              type="text"
              label="Token name"
            />
            <SMInput
              name="tokenSymbol"
              register={register?.("tokenSymbol")}
              placeholder="$token"
              error={errors?.tokenSymbol}
              type="text"
              label="Token symbol"
            />
            <SMInput
              name="tokenDecimal"
              register={register?.("tokenDecimal")}
              placeholder="Token decimal"
              error={errors?.tokenDecimal}
              type="text"
              label="Token decimal"
              isRequired
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SMInput
        name="tokenDescription"
        register={register?.("tokenDescription")}
        placeholder="Token Description"
        error={errors?.tokenDescription}
        type="text"
        label="Token Description"
        isRequired
        variant="secondary"
      />

      <SMButton
        onClick={handleNext}
        text="Next"
        fullWidth
        network={network}
        variant="plain"
        disabled={disbleButton}
      />
    </div>
  );
};

export default Step1;

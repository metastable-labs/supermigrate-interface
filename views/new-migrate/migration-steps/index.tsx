import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./header";
import Step1 from "./step-1";
import Step2 from "./step-2";
import { Network } from "@/components/button/types";
import { FormProp } from "./types";

const schema = yup.object().shape({
  tokenAddress: yup.string().required("Token Address is Required"),
  tokenName: yup.string().required("Token Name is Required"),
  tokenSymbol: yup.string().required("Token Symbol is Required"),
  tokenDecimal: yup.string().required("Token Decimal is Required"),
  tokenDescription: yup.string().required("Token Description is Required"),
});

const MigrationSteps = ({ network }: { network: Network }) => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProp>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const steps = [
    <Step1
      key={0}
      register={register}
      errors={errors}
      network={network}
      setStep={setStep}
    />,
    <Step2
      key={1}
      register={register}
      errors={errors}
      network={network}
      setStep={setStep}
    />,
  ];

  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center gap-6">
      <Header step={step} network={network} setStep={setStep} />

      <AnimatePresence>
        <motion.div
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MigrationSteps;

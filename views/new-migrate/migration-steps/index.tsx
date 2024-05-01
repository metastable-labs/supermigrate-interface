import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./header";
import Step1 from "./step-1";
import Step2 from "./step-2";
import { FormProp } from "./types";
import Step3 from "./step-3";
import Step4 from "./step-4";
import { Network } from "@/config/rainbow/rainbowkit";

const schema = yup.object().shape({
  tokenAddress: yup.string().required("Token Address is Required"),
  tokenName: yup.string().required("Token Name is Required"),
  tokenSymbol: yup.string().required("Token Symbol is Required"),
  tokenDecimal: yup.string().required("Token Decimal is Required"),
  tokenDescription: yup.string().required("Token Description is Required"),
  websiteLink: yup.string(),
  twitterLink: yup.string().required("Invalid URL"),
});

const MigrationSteps = ({ network }: { network: Network }) => {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
      watch={watch}
    />,
    <Step2
      key={1}
      register={register}
      errors={errors}
      network={network}
      setStep={setStep}
      setFile={setFile}
      file={file}
    />,

    <Step3 key={2} network={network} setStep={setStep} />,
    <Step4 key={2} network={network} setStep={setStep} />,
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

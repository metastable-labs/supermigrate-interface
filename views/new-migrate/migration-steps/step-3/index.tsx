"use client";

import { StepProps } from "../types";
import LoadStep from "./load-step";

const Step3 = ({ network, setStep }: StepProps) => {
  const steps = [
    {
      title: "Token Contract Deployed",
      loading: false,
      passed: true,
      date: new Date(),
      step: 1,
    },
    {
      title: "Contract Verified",
      loading: false,
      passed: true,
      date: new Date(),
      step: 2,
    },
    {
      title: "Forking Superchain Token List to Github repo",
      loading: false,
      passed: true,
      date: new Date(),
      step: 3,
    },
    {
      title: "Adding Data to forked superchain repo",
      loading: true,
      passed: false,
      date: new Date(),
      step: 4,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 ">
      <div className="w-full flex flex-col items-start justify-center gap-1 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:min-w-[448px]">
        {steps.map((step, index) => (
          <LoadStep
            key={index}
            {...step}
            network={network}
            hasTrickle={index < 3}
          />
        ))}
      </div>

      <div className="min-w-full px-6 py-3 rounded-xl bg-primary-650 self-stretch text-primary-700 text-[14px] leading-[24px] shadow-md">
        <p className="max-w-[400px]">
          If you are connected to your mobile wallet, check it to sign
          transaction
        </p>
      </div>
    </div>
  );
};

export default Step3;

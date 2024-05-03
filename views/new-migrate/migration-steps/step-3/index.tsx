"use client";
import { useEffect, useState } from "react";

import useSystemFunctions from "@/hooks/useSystemFunctions";
import { StepProps } from "../types";
import LoadStep from "./load-step";

const initialSteps = [
  {
    title: "Token Contract Deployed",
    loading: true,
    passed: false,
    date: new Date(),
    step: 1,
  },
  {
    title: "Contract Verified",
    loading: false,
    passed: false,
    date: new Date(),
    step: 2,
  },
  {
    title: "Forking Superchain Token List to Github repo",
    loading: false,
    passed: false,
    date: new Date(),
    step: 3,
  },
  {
    title: "Adding Data to forked superchain repo",
    loading: false,
    passed: false,
    date: new Date(),
    step: 4,
  },
];

const Step3 = ({ network, setStep }: StepProps) => {
  const { migrationState } = useSystemFunctions();
  const { loading, loadingMigration, migration } = migrationState;

  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    if (loading) return;

    const newSteps = [...steps];
    newSteps[0].loading = false;
    newSteps[0].passed = true;
    newSteps[0].date = new Date();

    newSteps[1].loading = true;
    newSteps[1].date = new Date();

    setSteps(newSteps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (!loadingMigration) return;

    const newSteps = [...steps];
    newSteps[1].loading = false;
    newSteps[1].passed = true;
    newSteps[1].date = new Date();

    newSteps[2].loading = true;
    newSteps[2].date = new Date();

    setSteps(newSteps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingMigration]);

  useEffect(() => {
    if (!migration) return;

    const newSteps = [...steps];
    newSteps[2].loading = false;
    newSteps[2].passed = true;
    newSteps[2].date = new Date();

    newSteps[3].loading = true;
    newSteps[3].date = new Date();

    setSteps(newSteps);

    setTimeout(() => {
      newSteps[3].loading = false;
      newSteps[3].passed = true;
      newSteps[3].date = new Date();
      setSteps(newSteps);

      setStep(3);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [migration]);

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

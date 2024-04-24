"use client";
import classNames from "classnames";

import { StepProps } from "../types";
import Right from "./right";
import Left from "./left";

const Step4 = ({ network, setStep }: StepProps) => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col md:flex-row items-center justify-center gap-14 md:gap-[60px]"
      )}
    >
      <Left />
      <Right />
    </div>
  );
};

export default Step4;

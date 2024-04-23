import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./header";
import Step1 from "./step-1";
import Step2 from "./step-2";
import { Network } from "@/components/button/types";

const steps = [<Step1 key={0} />, <Step2 key={1} />];

const MigrationSteps = ({ network }: { network: Network }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center gap-6 ">
      <Header step={step} network={network} />

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

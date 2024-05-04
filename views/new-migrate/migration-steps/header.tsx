import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { CheckIcon, RightCarretDarkIcon } from "@/public/icons";
import { Network } from "@/config/rainbow/config";

const Step = ({
  step,
  title,
  current,
  passed,
  network,
  onClick,
}: {
  step: number;
  title: string;
  current: boolean;
  passed: boolean;
  network: Network;
  onClick?: (step: number) => void;
}) => {
  return (
    <div
      className={classNames("flex items-center justify-center gap-2", {
        "cursor-pointer": onClick,
      })}
      onClick={() => onClick && onClick(0)}
    >
      <div
        className={classNames(
          "rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300",
          {
            "bg-primary-1650": current && network === "base",
            "bg-primary-1950": current && network === "optimism",
            "bg-primary-500": current && network === "mode",
            "bg-primary-550": current && network === "scroll",
            "bg-primary-1800": passed,
            "bg-white border border-primary-250": !current && !passed,
            "text-white": current,
            "text-primary-200": !current,
          }
        )}
      >
        <AnimatePresence mode="popLayout">
          {passed ? (
            <motion.span
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute"
            >
              <CheckIcon />
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={0}
              className="text-[12px] font-medium text-center leading-none"
            >
              {step}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <span
        className={classNames("text-sm tracking-[-0.084px]", {
          "font-medium text-primary-50": current,
          "font-normal text-primary-200": !current,
        })}
      >
        {title}
      </span>
    </div>
  );
};

const Header = ({
  step,
  network,
  setStep,
}: {
  step: number;
  network: Network;
  setStep: (step: number) => void;
}) => {
  return (
    <AnimatePresence>
      {step < 2 && (
        <motion.div
          key={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center gap-4"
        >
          <Step
            current={step === 0}
            network={network}
            passed={step != 0}
            step={1}
            title="Token info"
            onClick={setStep}
          />
          <RightCarretDarkIcon />
          <Step
            current={step === 1}
            network={network}
            passed={step > 1}
            step={2}
            title="Social"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;

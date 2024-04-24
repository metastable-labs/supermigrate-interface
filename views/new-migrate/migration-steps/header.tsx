import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { Network } from "@/components/button/types";
import { CheckIcon, RightCarretDarkIcon } from "@/public/icons";

const Step = ({
  step,
  title,
  current,
  passed,
  network,
}: {
  step: number;
  title: string;
  current: boolean;
  passed: boolean;
  network: Network;
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
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

const Header = ({ step, network }: { step: number; network: Network }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Step
        current={step === 0}
        network={network}
        passed={step != 0}
        step={1}
        title="Token info"
      />
      <RightCarretDarkIcon />
      <Step
        current={step === 1}
        network={network}
        passed={step > 1}
        step={2}
        title="Social"
      />
    </div>
  );
};

export default Header;

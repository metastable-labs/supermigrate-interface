import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import moment from "moment";

import { Network } from "@/components/button/types";
import { CheckIcon, LoadingIcon, TrickleIcon } from "@/public/icons";

const LoadStep = ({
  step,
  title,
  loading,
  passed,
  date,
  hasTrickle,
  network,
}: {
  step: number;
  title: string;
  loading: boolean;
  passed: boolean;
  date: Date;
  hasTrickle?: boolean;
  network: Network;
}) => {
  const formatedDate = moment(date).format("h:mma");

  let trickleColor;
  switch (network) {
    case "base":
      trickleColor = "#375DFB";
      break;
    case "optimism":
      trickleColor = "#DF1C41";
      break;
    case "mode":
      trickleColor = "#FFD700";
      break;
    case "scroll":
      trickleColor = "#CDFF00";
      break;
    default:
      trickleColor = "#FFEDD8";
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div
        className={classNames(
          "w-full flex items-center justify-center gap-2 p-2 rounded-[10px]",
          {
            "bg-primary-150": passed,
            "bg-white shadow-small-shadow": !passed || loading,
          }
        )}
      >
        <div
          className={classNames(
            "rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300",
            {
              "bg-primary-2250": loading || !passed,
              "bg-primary-1800": passed,
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
                className="text-[12px] font-medium text-center leading-none text-white"
              >
                {step}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <span
          className={classNames("flex-1 text-sm tracking-[-0.084px]", {
            "font-medium text-primary-50": loading,
            "font-normal text-primary-200": !loading,
          })}
        >
          {title}
        </span>

        <AnimatePresence>
          {loading ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingIcon />
            </motion.span>
          ) : (
            <span className="text-[10px] leading-[20px] tracking-[-0.06px] text-primary-200">
              {formatedDate}
            </span>
          )}
        </AnimatePresence>
      </div>
      {hasTrickle && <TrickleIcon color={trickleColor} />}
    </div>
  );
};

export default LoadStep;

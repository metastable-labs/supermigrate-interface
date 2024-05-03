import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import moment from "moment";

import { CheckIcon, LoadingIcon, TrickleIcon } from "@/public/icons";
import { Network } from "@/config/rainbow/rainbowkit";
import { SMLoader } from "@/components";

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
            "bg-primary-150": !loading,
            "bg-white shadow-small-shadow": loading,
          }
        )}
      >
        <div
          className={classNames(
            "rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300",
            {
              "bg-primary-2250 text-white": loading,
              "bg-primary-1800": passed,
              "bg-white border border-dashed border-primary-2050 text-primary-200 shadow-small-shadow":
                !passed && !loading,
            }
          )}
        >
          <AnimatePresence mode="popLayout">
            {!passed ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={0}
                className="font-medium text-center text-xs"
              >
                {step}
              </motion.span>
            ) : (
              <motion.span
                key={1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckIcon />
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
          {loading && <SMLoader variant="small" />}

          {passed && (
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

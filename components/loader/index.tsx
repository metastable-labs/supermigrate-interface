import classNames from "classnames";
import { motion } from "framer-motion";

import { LoadingIcon } from "@/public/icons";
import { ISMLoader } from "./types";

const SMLoader = ({ variant = "small" }: ISMLoader) => {
  return (
    <motion.span
      animate={{
        rotate: 360,
        transition: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      className={classNames("", {
        "scale-100": variant === "small",
        "scale-150": variant === "medium",
        "scale-[2]": variant === "large",
      })}
    >
      <LoadingIcon />
    </motion.span>
  );
};

export default SMLoader;

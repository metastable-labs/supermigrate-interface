import classNames from "classnames";
import { motion } from "framer-motion";

import { IButton } from "./types";
import { GithubButtonIcon, PlusIcon } from "@/public/icons";

const Button = ({ network, onClick, text, variant = "git" }: IButton) => {
  let iconColor;
  if (network === "base" || network === "optimism" || variant === "bland-new") {
    iconColor = "white";
  }
  if (network === "mode" || network === "scroll") {
    iconColor = "#242D01";
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        "py-[10px] px-[14px] flex items-center justify-center gap-1 rounded-[10px] transition-all duration-300 border-[0.5px] border-primary-1400",
        {
          "bg-base-github-button": network === "base",
          "bg-optimism-github-button": network === "optimism",
          "bg-mode-github-button": network === "mode",
          "bg-scroll-github-button": network === "scroll",
          "bg-primary-1300": variant === "bland-new",
          "shadow-base-github-button": network === "base",
          "shadow-optimism-github-button": network === "optimism",
          "shadow-mode-github-button": network === "mode",
          "shadow-scroll-github-button": network === "scroll",
          "shadow-bland-new-button": variant === "bland-new",
        }
      )}
      onClick={onClick}
    >
      {variant === "git" && <GithubButtonIcon color={iconColor} />}
      {(variant === "new" || variant === "bland-new") && (
        <PlusIcon color={iconColor} />
      )}
      <span
        className={classNames(
          "font-medium tracking-[-0.084px] text-sm text-center transition-all duration-300 capitalize",
          {
            "text-white":
              network === "base" ||
              network === "optimism" ||
              variant === "bland-new",
            "text-primary-950": network === "mode" || network === "scroll",
          }
        )}
      >
        {text}
      </span>
    </motion.button>
  );
};

export default Button;

import classNames from "classnames";

import { SMClickAnimation } from "@/components";
import {
  BaseSecondaryDesktopIcon,
  BaseSecondaryMobileIcon,
  OptimismDesktopIcon,
  OptimismMobileIcon,
  ModeDesktopIcon,
  ModeMobileIcon,
  ScrollDesktopIcon,
  ScrollMobileIcon,
} from "@/public/icons";
import { CardProps } from "./types";

const Card = ({ onClick, title, variant = "base" }: CardProps) => {
  return (
    <SMClickAnimation
      onClick={() => onClick && onClick(variant)}
      className="w-full"
    >
      <div
        className={classNames(
          "flex flex-col items-center justify-center rounded-xl border-[0.701px] border-primary-250 px-12 py-[54px]",
          {
            "bg-primary-400": variant === "base",
            "bg-primary-450": variant === "optimism",
            "bg-primary-500": variant === "mode",
            "bg-primary-550": variant === "scroll",
          }
        )}
      >
        <>
          <div className="hidden md:flex">
            {variant === "base" && <BaseSecondaryDesktopIcon />}
            {variant === "optimism" && <OptimismDesktopIcon />}
            {variant === "mode" && <ModeDesktopIcon />}
            {variant === "scroll" && <ScrollDesktopIcon />}
          </div>

          <div className="flex md:hidden">
            {variant === "base" && <BaseSecondaryMobileIcon />}
            {variant === "optimism" && <OptimismMobileIcon />}
            {variant === "mode" && <ModeMobileIcon />}
            {variant === "scroll" && <ScrollMobileIcon />}
          </div>
        </>

        <span
          className={classNames(
            "font-bold text-[14px] leading-[21.7px] text-center",
            {
              "text-white": variant === "base" || variant === "optimism",
              "text-black": variant === "mode",
              "text-primary-600": variant === "scroll",
            }
          )}
        >
          {title}
        </span>
      </div>
    </SMClickAnimation>
  );
};

export default Card;

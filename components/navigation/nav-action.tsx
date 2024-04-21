import classNames from "classnames";
import { usePathname } from "next/navigation";

import useTruncateText from "@/hooks/useTruncateText";
import SMClickAnimation from "../click-animation";
import {
  SelectIcon,
  BasePrimaryMobileIcon,
  OptimismPrimaryMobileIcon,
  ModePrimaryMobileIcon,
  ScrollPrimaryMobileIcon,
  GitHubMobileIcon,
  GitHubDesktopIcon,
  VerifiedIcon,
  SelectSecondaryIcon,
  WalletIcon,
} from "@/public/icons";

interface NavActionProps {
  text?: string;
  onClick: () => void;
  isMobile?: boolean;
  variant?: "network" | "account" | "wallet";
}

const NavAction = ({
  text,
  onClick,
  isMobile,
  variant = "network",
}: NavActionProps) => {
  const pathname = usePathname();
  const truncateText = useTruncateText(text || "", 4, 4);

  let renderIcon;

  if (variant === "network") {
    if (pathname.includes("optimism")) {
      renderIcon = <OptimismPrimaryMobileIcon />;
    }
    if (pathname.includes("base")) {
      renderIcon = <BasePrimaryMobileIcon />;
    }
    if (pathname.includes("mode")) {
      renderIcon = <ModePrimaryMobileIcon />;
    }
    if (pathname.includes("scroll")) {
      renderIcon = <ScrollPrimaryMobileIcon />;
    }
  }

  if (variant === "account") {
    renderIcon = <GitHubMobileIcon />;
  }

  if (variant === "wallet") {
    renderIcon = <WalletIcon />;
  }

  return (
    <SMClickAnimation onClick={onClick}>
      <div className="max-w-[200px] md:max-w-[240px] bg-white rounded-[10px] border border-primary-250 shadow-nav-select-shadow py-1 pl-1 pr-2 flex items-center justify-center gap-[6px] relative">
        <div className={classNames("flex items-center justify-center", {})}>
          {renderIcon}

          <div className="flex items-center justify-center gap-[2px]">
            {truncateText && (
              <span
                className={classNames(
                  "tracking-[-0.084px] text-sm font-medium ml-2",
                  { "hidden lg:block": variant !== "wallet" }
                )}
              >
                {truncateText}
              </span>
            )}

            {variant === "wallet" && <VerifiedIcon />}
          </div>
        </div>

        {variant === "network" ? (
          <div className="absolute right-[3px] bottom-[5px] flex items-center justify-center bg-primary-650 rounded-full border-[0.171px] border-primary-1000">
            <SelectSecondaryIcon />
          </div>
        ) : (
          <SelectIcon />
        )}
      </div>
    </SMClickAnimation>
  );
};

export default NavAction;

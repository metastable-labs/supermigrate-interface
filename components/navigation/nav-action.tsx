import { useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useChainId } from "wagmi";

import useTruncateText from "@/hooks/useTruncateText";
import SMClickAnimation from "../click-animation";
import {
  SelectIcon,
  GitHubMobileIcon,
  VerifiedIcon,
  SelectSecondaryIcon,
  WalletIcon,
} from "@/public/icons";
import { networks } from "@/config/rainbow/rainbowkit";
import useSystemFunctions from "@/hooks/useSystemFunctions";

interface NavActionProps {
  text?: string;
  onClick: () => void;
  isMobile?: boolean;
  variant?: "network" | "account" | "wallet";
}

const NavAction = ({ text, onClick, variant = "network" }: NavActionProps) => {
  const chainId = useChainId();
  const pathname = usePathname();
  const { userState } = useSystemFunctions();
  const truncateText = useTruncateText(text || "", 4, 4);
  const shouldHide = /\/[a-zA-Z]{2}\/migrate$/.test(pathname); // Hide network select on migrate page

  const { user } = userState;

  const [icon, setIcon] = useState<any>();

  const handleIcon = () => {
    if (variant === "network" && chainId) {
      const currentNetwork = networks.find(
        (network) => network.chainId === chainId
      );
      if (currentNetwork) {
        return setIcon(currentNetwork?.icon);
      }
    }

    if (variant === "account") {
      return setIcon(<GitHubMobileIcon />);
    }

    if (variant === "wallet") {
      return setIcon(<WalletIcon />);
    }
  };

  useEffect(() => {
    handleIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, chainId]);

  return (
    <SMClickAnimation
      onClick={onClick}
      className={classNames("", {
        hidden:
          (shouldHide && variant === "network") ||
          (!user && variant === "account"),
      })}
    >
      <div className="max-w-[200px] md:max-w-[240px] bg-white rounded-[10px] border border-primary-250 shadow-nav-select-shadow py-1 pl-1 pr-2 flex items-center justify-center gap-[6px] relative">
        <div className={classNames("flex items-center justify-center", {})}>
          {icon}

          <div className="flex items-center justify-center gap-[2px]">
            {truncateText && (
              <span
                className={classNames(
                  "tracking-[-0.084px] text-sm font-medium ml-2",
                  { "hidden lg:block": variant !== "wallet" }
                )}
              >
                {variant === "account" ? text : truncateText}
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

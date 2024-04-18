import { ReactElement } from "react";
import classNames from "classnames";

import useTruncateText from "@/hooks/useTruncateText";
import SMClickAnimation from "../click-animation";
import { SelectIcon } from "@/public/icons";

interface NavActionProps {
  primaryMobileIcon?: ReactElement;
  primaryDesktopIcon?: ReactElement;
  secondaryIcon?: ReactElement;
  text?: string;
  isWallet?: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const NavAction = ({
  primaryMobileIcon,
  primaryDesktopIcon,
  secondaryIcon,
  text,
  isWallet,
  onClick,
  isMobile,
}: NavActionProps) => {
  const truncateText = useTruncateText(text || "", 4, 4);

  let renderIcon;
  if (isWallet) {
    renderIcon = (
      <div className="w-8 h-8 rounded-full bg-primary-150 flex items-center justify-center shadow-wallet-icon-shadow text-sm leading-none">
        W
      </div>
    );
  } else if (isMobile) {
    renderIcon = primaryMobileIcon;
  } else {
    renderIcon = primaryDesktopIcon;
  }

  return (
    <SMClickAnimation onClick={onClick}>
      <div className="max-w-[200px] md:max-w-[240px] bg-white rounded-[10px] border border-primary-250 shadow-nav-select-shadow py-1 pl-1 pr-2 flex items-center justify-center gap-[6px]">
        <div className={classNames("flex items-center justify-center", {})}>
          {renderIcon}

          <div className="flex items-center justify-center gap-[2px]">
            {truncateText && (
              <span
                className={classNames(
                  "tracking-[-0.084px] text-sm font-medium ml-2",
                  { "hidden lg:block": !isWallet }
                )}
              >
                {truncateText}
              </span>
            )}

            {secondaryIcon && secondaryIcon}
          </div>
        </div>

        <SelectIcon />
      </div>
    </SMClickAnimation>
  );
};

export default NavAction;

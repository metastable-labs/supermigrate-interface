import { ReactNode } from "react";

import {
  SelectIcon,
  BasePrimaryIcon,
  GitHubIcon,
  VerifiedIcon,
} from "@/public/icons";
import SMClickAnimation from "../click-animation";
import useTruncateText from "@/hooks/useTruncateText";

interface SelectButtonProps {
  icon?: ReactNode;
  secondaryIcon?: ReactNode;
  text?: string;
  isWallet?: boolean;
  onClick: () => void;
}
const SelectButton = ({
  icon,
  secondaryIcon,
  text,
  isWallet,
  onClick,
}: SelectButtonProps) => {
  const truncateText = useTruncateText(text || "", 4, 4);

  let renderIcon;
  if (isWallet) {
    renderIcon = (
      <div className="w-8 h-8 rounded-full bg-primary-150 flex items-center justify-center shadow-wallet-icon-shadow text-sm leading-none">
        W
      </div>
    );
  } else {
    renderIcon = icon;
  }

  return (
    <SMClickAnimation onClick={onClick}>
      <div className="max-w-[200px] md:max-w-[240px] bg-white rounded-[10px] border border-primary-250 shadow-nav-select-shadow py-1 pl-1 pr-2 flex items-center justify-center gap-[6px]">
        <div className="flex items-center justify-center gap-2">
          {renderIcon}
          <div className="flex items-center justify-center gap-[2px]">
            {truncateText && (
              <span className="tracking-[-0.084px] text-sm font-medium">
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

const Right = () => {
  const actionItems = [
    { text: "Meister", icon: <GitHubIcon />, onClick: () => {} },
    { icon: <BasePrimaryIcon />, onClick: () => {} },
    {
      text: "0x1234567890abcdef1234567890abcdef12345678",
      isWallet: true,
      secondaryIcon: <VerifiedIcon />,
      onClick: () => {},
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center">
      {actionItems.map((item, index) => (
        <SelectButton key={index} {...item} />
      ))}
    </div>
  );
};

export default Right;

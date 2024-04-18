import { ReactNode } from "react";

import {
  SelectIcon,
  BasePrimaryIcon,
  GitHubIcon,
  VerifiedIcon,
} from "@/public/icons";
import SMClickAnimation from "../click-animation";

interface SelectButtonProps {
  icon: ReactNode;
  secondaryIcon: ReactNode;
  text: string;
  isWallet: boolean;
}
const SelectButton = ({ icon, secondaryIcon, text }: SelectButtonProps) => {
  return (
    <SMClickAnimation>
      <div className="py-1 pl-1 pr-2 flex items-center justify-center gap-[6px]">
        <div className="flex items-center justify-center gap-2">
          {icon}
          <p className="text-sm font-bold">{text} </p>
        </div>
        <SelectIcon />
      </div>
    </SMClickAnimation>
  );
};

const Right = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Right;

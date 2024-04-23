import { usePathname } from "next/navigation";
import classNames from "classnames";

import { Network } from "@/components/button/types";
import {
  BasePrimaryMobileIcon,
  OptimismPrimaryMobileIcon,
  ModePrimaryMobileIcon,
  ScrollPrimaryMobileIcon,
} from "@/public/icons";
import { SMClickAnimation } from "@/components";
import useSystemFunctions from "@/hooks/useSystemFunctions";

const networks = [
  { icon: <BasePrimaryMobileIcon />, name: "base" as Network },
  { icon: <OptimismPrimaryMobileIcon />, name: "optimism" as Network },
  { icon: <ModePrimaryMobileIcon />, name: "mode" as Network },
  { icon: <ScrollPrimaryMobileIcon />, name: "scroll" as Network },
];

const NetworkModal = ({ close }: { close: () => void }) => {
  const { navigate } = useSystemFunctions();
  const pathname = usePathname();

  const handleOnClick = (network: Network) => {
    navigate.push(`/migrate/${network}`);
    close();
  };

  return (
    <div className="flex flex-col gap-[28px] min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium">
        Select chain
      </h1>

      <div className="flex flex-col md:min-w-80 flex-1 items-stretch gap-8">
        {networks.map(({ icon, name }, index) => (
          <SMClickAnimation key={index} onClick={() => handleOnClick(name)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                {icon}{" "}
                <span className="capitalize text-[14px] leading-[21.7px] font-medium text-primary-50">
                  {name}
                </span>
              </div>

              <div
                className={classNames(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  {
                    "bg-primary-1800": pathname.includes(name),
                  }
                )}
              />
            </div>
          </SMClickAnimation>
        ))}
      </div>
    </div>
  );
};

export default NetworkModal;

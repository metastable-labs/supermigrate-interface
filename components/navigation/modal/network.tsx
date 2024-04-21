import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { Network } from "@/views/migrate/types";
import {
  BasePrimaryMobileIcon,
  OptimismPrimaryMobileIcon,
  ModePrimaryMobileIcon,
  ScrollPrimaryMobileIcon,
} from "@/public/icons";
import SMClickAnimation from "@/components/click-animation";

const networks = [
  { icon: <OptimismPrimaryMobileIcon />, name: "optimism" as Network },
  { icon: <BasePrimaryMobileIcon />, name: "base" as Network },
  { icon: <ModePrimaryMobileIcon />, name: "mode" as Network },
  { icon: <ScrollPrimaryMobileIcon />, name: "scroll" as Network },
];

const NetworkModal = ({ close }: { close: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleOnClick = (network: Network) => {
    router.push(`/migrate/${network}`);
    close();
  };

  return (
    <div className="mt-1 flex-1 flex flex-col items-stretch gap-8">
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
  );
};

export default NetworkModal;

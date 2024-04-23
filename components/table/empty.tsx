import { GithubButtonIcon } from "@/public/icons";
import { SMButton } from "..";
import { useEffect, useState } from "react";
import { Network } from "../button/types";

const EmptyState = ({
  isConnected,
  network,
}: {
  isConnected: boolean;
  network: Network;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const buttonText = isConnected ? "new migration" : "connect github";

  const action = () => {};

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[14px] flex-1 px-3">
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center bg-very-light-gray rounded-full border-[0.795px] border-primary-1700 p-[12.73px] md:p-4">
          <div className="flex items-center justify-center rounded-full border border-primary-250 bg-white p-[11.136px] md:p-[14px] shadow-fade-light">
            <GithubButtonIcon
              color="#525866"
              width={isMobile ? "22.273" : "28"}
              height={isMobile ? "22.273" : "28"}
            />
          </div>
        </div>

        <h1 className="text-primary-1750 text-[20px] leading-[30px] text-center font-medium">
          {isConnected ? "No migrations yet" : " Please connect Github"}
        </h1>
        <span className="text-primary-1500 text-[14px] leading-[24px] text-center">
          {isConnected
            ? "You haven’t done any migrations, new migrations will show here"
            : "Connect your GitHub to see your migrations"}
        </span>
      </div>

      <SMButton
        network={network}
        onClick={action}
        text={buttonText}
        variant={isConnected ? "new" : "git"}
      />
    </div>
  );
};

export default EmptyState;

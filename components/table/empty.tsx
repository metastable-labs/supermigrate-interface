"use client";
import { useEffect, useState } from "react";

import { GithubButtonIcon } from "@/public/icons";
import { SMButton } from "..";
import useScreenDetect from "@/hooks/useScreenDetect";
import { Network } from "@/config/rainbow/config";
import useSystemFunctions from "@/hooks/useSystemFunctions";

const EmptyState = ({
  isConnected,
  network,
}: {
  isConnected: boolean;
  network: Network;
}) => {
  const { isMobile } = useScreenDetect();
  const { navigate, pathname } = useSystemFunctions();
  const [path, setPath] = useState("");

  const buttonText = isConnected ? "new migration" : "connect github";
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=Iv1.c178abebc418bb02&redirect_uri=http://${path}`;

  const action = () => {
    if (isConnected) {
      return navigate.push(`/migrate/${network}/new`);
    } else {
      return (window.location.href = githubAuthUrl);
    }
  };

  useEffect(() => {
    if (!window) return;

    const url = window.location.host + pathname;
    const regex = /(?<=\/)[a-z]{2}\//;
    const removeLanguagePath = url.replace(regex, "");

    setPath(removeLanguagePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

"use client";
import { useState } from "react";
import { useChainId } from "wagmi";

import { LangParamProp } from "@/config/internationalization/i18n";
import { networks } from "@/config/rainbow/rainbowkit";
import { SMButton } from "@/components";
import { ExclaimIcon } from "@/public/icons";

const BridgeView = ({ lang }: LangParamProp) => {
  const [supported, setSupported] = useState(true);
  const chainId = useChainId();

  const network = networks.find((item) => item.chainId === chainId);

  if (!supported) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <div className="py-20 flex items-center justify-center bg-white rounded-[5px] border border-primary-1350 shadow-table-cta w-[343px] md:w-[448px]">
          <div className="flex flex-col gap-3.5 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center bg-very-light-gray rounded-full border-t border-primary-1700 p-4">
                <div className="flex items-center justify-center rounded-full border border-primary-250 bg-white p-[14px] shadow-fade-light">
                  <ExclaimIcon />
                </div>
              </div>

              <h1 className="text-primary-1750 text-[20px] leading-[30px] text-center">
                Network not supported
              </h1>
              <span className="text-primary-1500 text-[14px] leading-[24px] text-center">
                Superbridge doesn’t support this network
              </span>
            </div>

            <SMButton
              text="Switch network"
              network="base"
              onClick={() => {}}
              variant="plain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://superbridge.app/${network?.title?.toLowerCase?.()}`}
      className="w-full min-h-screen"
      onError={(e) => console.error("Iframe failed to load:", e)}
    />
  );
};

export default BridgeView;

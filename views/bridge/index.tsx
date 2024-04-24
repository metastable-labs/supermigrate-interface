"use client";
import { useChainId } from "wagmi";

import { LangParamProp } from "@/config/internationalization/i18n";
import { networks } from "@/config/rainbow/rainbowkit";

const BridgeView = ({ lang }: LangParamProp) => {
  const chainId = useChainId();

  const network = networks.find((item) => item.chainId === chainId);
  return (
    <iframe
      src={`https://superbridge.app/${network?.title?.toLowerCase?.()}`}
      className="w-full min-h-screen"
      onError={(e) => console.error("Iframe failed to load:", e)}
    />
  );
};

export default BridgeView;

"use client";
import { LangParamProp } from "@/config/internationalization/i18n";

const BridgeView = ({ lang }: LangParamProp) => {
  return (
    <iframe
      src="https://superbridge.app/base"
      className="w-full min-h-screen"
      onError={(e) => console.error("Iframe failed to load:", e)}
    />
  );
};

export default BridgeView;

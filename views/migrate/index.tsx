"use client";
import { LangParamProp } from "@/config/internationalization/i18n";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";

export default function MigrateView({ lang }: LangParamProp) {
  return (
    <div className="pt-[123px] md:pt-[82px] text-black">
      <div className="hidden md:flex justify-center fixed w-screen bottom-0 -z-10">
        <DesktopTilesIcon />
      </div>

      <div className="flex md:hidden justify-center fixed w-screen bottom-0 -z-10">
        <MobileTilesIcon />
      </div>
    </div>
  );
}

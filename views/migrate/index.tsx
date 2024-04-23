"use client";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";
import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import SelectionComponent from "./selection";

export default function MigrateView({ lang }: LangParamProp) {
  return (
    <div>
      <SMContainer>
        <SelectionComponent />
      </SMContainer>

      <div className="hidden md:flex justify-center fixed w-screen bottom-0 -z-10">
        <DesktopTilesIcon />
      </div>
      <div className="flex md:hidden justify-center fixed w-screen bottom-0 -z-10">
        <MobileTilesIcon />
      </div>
    </div>
  );
}

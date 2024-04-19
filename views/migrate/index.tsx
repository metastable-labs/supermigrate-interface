"use client";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { useState } from "react";
import SelectionComponent from "./selection";
import { Network } from "./types";

export default function MigrateView({ lang }: LangParamProp) {
  const [migrateNetwork, setMigrateNetwork] = useState<Network>();

  return (
    <div className="pt-[123px] md:pt-[82px] text-black">
      <SMContainer>
        <SelectionComponent setMigrateNetwork={setMigrateNetwork} />
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

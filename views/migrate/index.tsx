"use client";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { CardProps } from "./card";
import { useState } from "react";
import SelectionComponent from "./selection";

export enum Network {
  base = "base",
  optimism = "optimism",
  mode = "mode",
  scroll = "scroll",
  undefined = "undefined",
}

export default function MigrateView({ lang }: LangParamProp) {
  const [migrateNetwork, setMigrateNetwork] = useState<Network>(
    Network.undefined
  );

  const baseAction = () => setMigrateNetwork(Network.base);
  const optimismAction = () => setMigrateNetwork(Network.optimism);
  const modeAction = () => setMigrateNetwork(Network.mode);
  const scrollAction = () => setMigrateNetwork(Network.scroll);

  const cards: CardProps[] = [
    { title: "Base", variant: "base", onClick: baseAction },
    { title: "Optimism", variant: "optimism", onClick: optimismAction },
    { title: "Mode", variant: "mode", onClick: modeAction },
    { title: "Scroll", variant: "scroll", onClick: scrollAction },
  ];

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

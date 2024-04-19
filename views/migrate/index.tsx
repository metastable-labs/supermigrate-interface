"use client";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import Card, { CardProps } from "./card";
import { title } from "process";

export default function MigrateView({ lang }: LangParamProp) {
  const baseAction = () => {};
  const optimismAction = () => {};
  const modeAction = () => {};
  const scrollAction = () => {};

  const cards: CardProps[] = [
    { title: "Base", variant: "base", onClick: baseAction },
    { title: "Optimism", variant: "optimism", onClick: optimismAction },
    { title: "Mode", variant: "mode", onClick: modeAction },
    { title: "Scroll", variant: "scroll", onClick: scrollAction },
  ];

  return (
    <div className="pt-[123px] md:pt-[82px] text-black">
      <SMContainer>
        <div className="flex mt-7 md:mt-24 justify-center">
          <div className="flex flex-col items-start gap-6">
            <div>
              <h1 className="text-2xl font-medium text-primary-300">
                Select a network
              </h1>
              <span className="text-base">
                Select a network to start a new migration
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>

            <div className="self-stretch flex items-center rounded-xl bg-primary-650 px-6 py-3 ">
              <p className="text-primary-700 text-[14px] leading-[24px]">
                {
                  "We are adding more L2 Integrations. If you'd like us to support your network, reach out to"
                }

                <p className="underline">
                  <a
                    href="https://www.integrations@metastablelabs.xyz"
                    target="_blank"
                  >
                    integrations@metastablelabs.xyz
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
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

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";
import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { useState } from "react";
import { Network } from "./types";
import SelectionComponent from "./selection";
import NetworkComponent from "./network";

export default function MigrateView({ lang }: LangParamProp) {
  const [migrateNetwork, setMigrateNetwork] = useState<Network>();

  return (
    <div className="pt-[123px] md:pt-[82px]">
      <SMContainer>
        <AnimatePresence mode="wait">
          {migrateNetwork ? (
            <motion.div
              key="network"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NetworkComponent network={migrateNetwork} />
            </motion.div>
          ) : (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SelectionComponent setMigrateNetwork={setMigrateNetwork} />
            </motion.div>
          )}
        </AnimatePresence>
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

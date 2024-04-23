"use client";
import { AnimatePresence, motion } from "framer-motion";

import { SMContainer } from "@/components";
import { Network } from "@/components/button/types";
import NewMigrateHeader from "./header";
import MigrationSteps from "./migration-steps";

const NewMigrateView = ({ network }: { network: Network }) => {
  return (
    <SMContainer>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:px-8 pt-[123px] md:pt-[82px] pb-10 max-w-[1280px]"
        >
          <div className="pt-5 md:pt-12 md:pb-[86px] flex flex-col gap-8">
            <NewMigrateHeader />

            <MigrationSteps network={network} />
          </div>
        </motion.main>
      </AnimatePresence>
    </SMContainer>
  );
};

export default NewMigrateView;

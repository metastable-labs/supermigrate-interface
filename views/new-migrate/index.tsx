'use client';
import { AnimatePresence, motion } from 'framer-motion';

import { SMContainer } from '@/components';
import NewMigrateHeader from './header';
import MigrationSteps from './migration-steps';
import { Network } from '@/config/rainbow/config';

const NewMigrateView = ({ network }: { network: Network }) => {
  return (
    <SMContainer>
      <AnimatePresence>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:px-8 pb-10 max-w-[1280px]">
          <div className="pt-5 md:pt-12 md:pb-[86px] flex flex-col gap-8">
            <NewMigrateHeader network={network} />

            <MigrationSteps network={network} />
          </div>
        </motion.main>
      </AnimatePresence>
    </SMContainer>
  );
};

export default NewMigrateView;

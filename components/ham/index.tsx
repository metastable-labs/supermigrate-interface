'use client';
import { CloseIcon, HamIcon } from '@/public/icons';

import { AnimatePresence, motion } from 'framer-motion';

const SMHam = ({ isOpen, onClick }: ISMHam) => {
  return (
    <div className="md:hidden flex items-center justify-center cursor-pointer">
      <AnimatePresence mode="popLayout">
        {isOpen ? (
          <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick}>
            <CloseIcon />
          </motion.div>
        ) : (
          <motion.div key="ham" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick}>
            <HamIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SMHam;

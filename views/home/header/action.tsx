"use client";
import { motion } from "framer-motion";

const Action = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-3 py-2 flex items-center justify-center gap-1 bg-white rounded-lg border border-primary-1300 shadow-table-cta"
    >
      <span className="text-sm text-primary-50 font-medium px-[2px]">
        Launch app
      </span>
    </motion.button>
  );
};

export default Action;

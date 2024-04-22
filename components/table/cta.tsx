"use client";

import { motion } from "framer-motion";
import { RightArrowIcon, LeftArrowIcon } from "@/public/icons";

const CTA = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-3 py-2 flex items-center justify-center gap-1 bg-white rounded-lg border border-primary-1550 shadow-table-cta text-sm text-primary-1600 font-medium"
    >
      <span className="hidden md:block">{title}</span>

      <span className="md:hidden">
        {title === "Next" && <RightArrowIcon />}
        {title === "Previous" && <LeftArrowIcon />}
      </span>
    </motion.button>
  );
};

export default CTA;

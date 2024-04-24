import { motion } from "framer-motion";
import { ClickAnimation } from "./types";

const SMClickAnimation = ({ children, onClick, className }: ClickAnimation) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SMClickAnimation;

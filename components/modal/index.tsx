import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Modal } from "./types";

const SMModal = ({ close, children, variant = "normal" }: Modal) => {
  useEffect(() => {
    // Add no-scroll class to body when the modal opens
    document.body.classList.add("no-scroll");

    // Remove no-scroll class when the modal closes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center h-screen"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={() => variant === "normal" && close()}
        className="z-10 absolute w-full h-full bg-black-100 bg-opacity-10 backdrop-blur-[0.8px]"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className={classNames(
          "z-20 max-h-[65%] md:max-h-[80%] overflow-y-auto bg-white-50 shadow-wide-box p-6 lg:p-12",
          {
            "w-[72%] xl:w-[470px] rounded-xl": variant === "normal",
            "w-[85%] md:w-[90%] xl:w-[65%] rounded-3xl": variant === "large",
          }
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SMModal;

import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "./types";
import { RoundedCloseIcon } from "@/public/icons";
import useTruncateText from "@/hooks/useTruncateText";

const SMModal = ({ children, close, show, title }: Modal) => {
  const truncateTitle = useTruncateText(title!, 6, 6);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]"
          // onClick={close}
        >
          <div className="relative flex justify-center items-center bg-white p-5 rounded-2xl">
            <div className="absolute z-10 top-0 right-0 flex justify-end items-center w-full p-3">
              {close && (
                <div className="flex justify-end transition-all">
                  <div onClick={close} className="cursor-pointer">
                    <RoundedCloseIcon />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6 min-w-[300px] md:min-w-80">
              <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium">
                {truncateTitle}
              </h1>
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SMModal;

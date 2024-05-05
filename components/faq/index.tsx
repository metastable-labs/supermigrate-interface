import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@/public/icons";
import classNames from "classnames";

const SMFAQ = ({ answer, question, current, onClick }: ISMFAQ) => {
  return (
    <div
      className={classNames(
        "px-8 py-6 flex flex-col self-stretch items-start rounded-2xl md:w-[440px] lg:w-[576px]",
        { "gap-2 bg-primary-1450 transition-colors duration-300": current }
      )}
    >
      <div className="w-full flex justify-between items-center">
        <p className="w-full text-primary-300 text-[16px] leading-[24px] md:text-lg font-medium">
          {question}
        </p>

        <AnimatePresence mode="popLayout">
          {current ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cursor-pointer"
              onClick={onClick}
            >
              <MinusIcon color="black" height={24} width={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cursor-pointer"
              onClick={onClick}
            >
              <PlusIcon color="black" height={24} width={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        animate={{ height: current ? "fit-content" : 0 }}
        className="text-sm md:text-base text-primary-1500"
      >
        <AnimatePresence>
          {current && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {answer}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.p>
    </div>
  );
};

export default SMFAQ;

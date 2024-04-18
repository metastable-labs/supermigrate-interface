import { AnimatePresence, motion } from "framer-motion";

import NavAction from "./nav-action";
import { INavActions } from "./types";
import { CloseIcon, HamIcon } from "@/public/icons";

const Ham = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className="md:hidden flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {menuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <CloseIcon />
          </motion.div>
        ) : (
          <motion.div
            key="ham"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <HamIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Right = ({
  menuOpen,
  toggleMenu,
  actionItems,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
  actionItems: INavActions;
}) => {
  return (
    <div>
      <div className="hidden md:flex gap-4 items-center justify-center">
        {actionItems?.map((item, index) => (
          <NavAction key={index} {...item} />
        ))}
      </div>

      <Ham menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Right;

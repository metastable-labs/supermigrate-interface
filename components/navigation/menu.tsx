import { AnimatePresence, motion } from "framer-motion";
import { INavActions, INavLinks } from "./types";
import NavLink from "./nav-link";
import NavAction from "./nav-action";

const Menu = ({
  menuOpen,
  links,
  actionItems,
}: {
  menuOpen: boolean;
  links: INavLinks;
  actionItems: INavActions;
}) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute md:hidden left-0 top-[100%] w-full bg-white border-b border-b-primary-250 px-4 pt-[22px] pb-[50px] flex flex-col gap-[36px]"
        >
          <div className="w-full flex flex-col gap-3 ">
            {links.map((link, index) => (
              <NavLink key={index} {...link} fullWidth />
            ))}
          </div>

          <div className="flex items-center justify-start gap-4">
            {actionItems.map((item, index) => (
              <NavAction key={index} {...item} isMobile />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;

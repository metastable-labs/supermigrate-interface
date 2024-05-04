import { AnimatePresence, motion } from "framer-motion";
import { MenuProps, NavLink } from "./type";
import Action from "./action";

const Menu = ({ menuOpen, links, action }: MenuProps) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pt-8 absolute md:hidden top-[80%] right-[-1px] wide-full bg-primary-2400 border-x border-b border-primary-100  px-[18px] pb-4 flex flex-col gap-8 rounded-br-xl rounded-bl-xl backdrop-blur-[10px] shadow-landing-nav"
        >
          <div className="w-full flex flex-col gap-8">
            {links.map(({ name, href }, index) => (
              <a key={index} href={href} className="text-sm text-primary-650">
                {name}
              </a>
            ))}
          </div>

          <Action onClick={() => {}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;

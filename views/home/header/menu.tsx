import { AnimatePresence, motion } from 'framer-motion';
import { MenuProps } from './type';
import Action from './action';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const Menu = ({ menuOpen, links }: MenuProps) => {
  const { navigate } = useSystemFunctions();
  const action = () => navigate.push('/migrate');
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pt-8 absolute md:hidden top-[80%] right-[-1px] wide-full bg-white  px-[18px] pb-4 flex flex-col gap-8 rounded-br-base rounded-bl-base backdrop-blur-[10px] shadow-hero-header border-x border-b border-primary-250">
          <div className="w-full flex flex-col gap-8">
            {links.map(({ name, href }, index) => (
              <a key={index} href={href} className="text-sm text-primary-3400">
                {name}
              </a>
            ))}
          </div>

          <Action onClick={action} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;

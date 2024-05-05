import classNames from 'classnames';
import { motion } from 'framer-motion';

const OverrideIcon = ({ primaryColor, overridden, secondaryColor, onClick }: { overridden: boolean; primaryColor: string; secondaryColor: string; onClick?: () => void }) => {
  return (
    <div
      className={classNames('py-[3px] px-1 flex items-center rounded-[6px] bg-primary-1300 relative w-7 h-4', {
        'justify-end': overridden,
        'justify-start': !overridden,
      })}>
      <motion.div
        animate={{
          top: 0,
          right: overridden ? 0 : '100%',
        }}
        className="bg-white rounded-full p-[1px] absolute">
        <div className="p-[2px] rounded-full bg-light-gray">
          <div className="w-1 h-1 rounded-full bg-primary-1300" />
        </div>
      </motion.div>
    </div>
  );
};

export default OverrideIcon;

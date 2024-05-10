import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

const SMAnnouncement = ({ comment, link, linkText, show, variant = 'bottom' }: ISMAnnouncement) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classNames('fixed left-0 w-full px-6 py-3 bg-primary-3250 flex items-center justify-center z-50', { 'bottom-0': variant === 'bottom', 'top-0': variant === 'top' })}>
        <p className="text-primary-3850 text-[14px] leading-[24px]">
          {comment}{' '}
          <a href={link} target="_blank" className="underline underline-offset-4">
            {linkText}
          </a>
        </p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SMAnnouncement;

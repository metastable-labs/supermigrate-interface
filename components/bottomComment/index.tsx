import { AnimatePresence, motion } from 'framer-motion';

const SMBottomComment = ({ comment, link, linkText, show }: ISMBottomComment) => (
  <AnimatePresence>
    {show && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed bottom-0 left-0 w-full px-6 py-3 bg-primary-3250 flex items-center justify-center">
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

export default SMBottomComment;

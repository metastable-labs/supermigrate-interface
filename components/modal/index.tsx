'use client';

import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Modal } from './types';
import { RoundedCloseIcon } from '@/public/icons';
import classNames from 'classnames';

const modalAnimation = {
  initial: { scale: 0, x: '100%' },
  animate: {
    scale: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
  exit: {
    scale: 0,
    x: '100%',
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const noAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const SMModal = ({ children, close, show, variant = 'default' }: Modal) => {
  const animation = variant === 'git-connect' ? modalAnimation : noAnimation;

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classNames('fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center z-[9999] p-[15px]', {
            'justify-center': variant === 'default' || variant === 'secondary',
            'justify-end': variant === 'git-connect',
          })}>
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={classNames('relative flex justify-center items-center bg-white p-5 rounded-base', {
              'max-w-[496px]': variant === 'git-connect',
              'border border-primary-250': variant === 'secondary',
            })}>
            <div className="absolute z-10 top-0 right-0 flex justify-end items-center w-full p-3">
              {close && (
                <div className="flex justify-end transition-all">
                  <div onClick={close} className="cursor-pointer">
                    <RoundedCloseIcon />
                  </div>
                </div>
              )}
            </div>

            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SMModal;

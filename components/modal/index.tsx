'use client';

import { useEffect } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { Logo, RoundedCloseIcon } from '@/public/icons';
import useUserActions from '@/application/user/actions';
import { Modal } from './types';
import SMClickAnimation from '../click-animation';
import SMButton from '../button';

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

const SMModal = ({ children, close, show, variant = 'default', blur }: Modal) => {
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
            'backdrop-blur-sm': blur,
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

const SMAuthenticationModal = ({ show }: { show: boolean }) => {
  const { authenticateUser } = useUserActions();

  return (
    <SMModal show={show} blur>
      <div className="h-[184px] w-72 sm:w-80 flex flex-col gap-5 justify-between">
        <div className="flex items-center justify-between">
          <div className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center md:w-10 md:h-10">
            <Logo />
          </div>

          <SMClickAnimation
            onClick={authenticateUser}
            className="bg-white rounded-base border border-primary-250 shadow-nav-select-shadow py-1 px-2 flex items-center justify-center text-primary-50 text-sm tracking-[-0.084px] font-medium font-Bitform">
            Login / Signup
          </SMClickAnimation>
        </div>

        <h1 className="text-primary-50 text-lg text-center">
          To proceed, you have to be <span className="font-Bitform">authenticated</span>.
        </h1>

        <SMButton variant="tertiary" text="Continue" fullWidth onClick={authenticateUser} />
      </div>
    </SMModal>
  );
};

export default SMModal;
export { SMAuthenticationModal };

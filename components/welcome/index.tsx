'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { TextSampleIcon } from '@/public/icons';
import SMClickAnimation from '../click-animation';

const texts = [
  { text: 'Once your PR is merged, the token list will update automatically to include your token on our bridging interface.' },
  { text: 'To complete the migration, make sure you verify the migration by adding a link to the verification tweet on the pull request.' },
  { text: 'For support please reach out to us via our', link: 'https://t.me/+8vDPDkrN_-gwZTA8', linkText: 'telegram channel' },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path fill="none" stroke="currentColor" strokeWidth="3" d="M5 12l5 5L20 7" />
  </svg>
);

const SMWelcome = ({ show, close }: ISMWelcome) => {
  const [dontShow, setDontShow] = useState(false);
  const toggleDontShow = () => setDontShow((prev) => !prev);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex flex-col justify-center items-center bg-white p-5 rounded-base max-w-[440px]">
            <div className="pb-5 self-stretch flex flex-col items-center gap-6">
              <div className="self-stretch flex flex-col justify-center items-start gap-1">
                <h1 className="text-primary-1750 text-[20px] leading-[30px]">Welcome to Supermigrate</h1>
                <h5 className="text-primary-350 text-[14px] leading-[24px]">Please take note:</h5>
              </div>

              <div className="self-stretch flex flex-col items-center justify-center gap-6">
                {texts.map(({ text, link, linkText }, index) => (
                  <div key={index} className="flex justify-between gap-[17px]">
                    <div className="min-w-6 min-h-6">
                      <TextSampleIcon />
                    </div>

                    <p className="text-primary-2800 text-[14px] leading-[21.7px]">
                      {text}{' '}
                      {link && linkText && (
                        <a href={link} className="underline underline-offset-4 text-primary-2400">
                          {linkText}
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-stretch py-4 flex flex-col gap-3 justify-center items-center border-t border-primary-250">
              <SMClickAnimation
                onClick={close}
                className="self-stretch bg-primary-3250 shadow-welcome-button rounded-base px-3.5 py-2.5 flex items-center justify-center text-primary-3900 text-sm tracking-[-0.084px]">
                Agree and Continue
              </SMClickAnimation>

              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 p-[1.5px] flex items-center justify-center">
                  <div className="min-w-full min-h-full rounded-[4px] border border-primary-250 cursor-pointer" onClick={toggleDontShow}>
                    {dontShow && <CheckIcon />}
                  </div>
                </div>
                <span className="text-primary-50 tracking-[-0.084px] text-sm">{"Don't show it again"}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SMWelcome;

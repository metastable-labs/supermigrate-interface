'use client';
import { useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import Primary from './primary';
import Secondary from './secondary';

import { LangParamProp } from '@/config/internationalization/i18n';
import { SMContainer } from '@/components';
import { FooterLogo, MobileFooterLogo } from '@/public/icons';

const steps = [<Primary key={0} />, <Secondary key={1} />];

const EarnView = ({ lang }: LangParamProp) => {
  const [step, setStep] = useState(1);
  return (
    <>
      <SMContainer>
        <div className={classNames('pb-12 lg:pb-20', { 'md:mt-14 lg:mt-[90px]': step === 0, '-mt-10 md:mt-4 lg:mt-12': step === 1 })}>
          <AnimatePresence mode="popLayout">
            <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {steps[step]}
            </motion.div>
          </AnimatePresence>
        </div>
      </SMContainer>

      <footer className="w-full bg-primary-3250 flex justify-center pt-3">
        <div className="hidden lg:block">
          <FooterLogo />
        </div>
        <div className="block lg:hidden">
          <MobileFooterLogo />
        </div>
      </footer>
    </>
  );
};

export default EarnView;

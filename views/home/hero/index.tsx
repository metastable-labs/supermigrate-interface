'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import { SMContainer } from '@/components';
import HeroButton from './button';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const stepTexts = ['Layer 2', 'Base', 'Optimism', 'Mode'];
const stepTextColors = ['#D7FF00', '#C2D6FF', '#F25976', '#DFFE00'];

const stepBackgroundColors = ['#002132', '#162664', '#710E21', '#000'];

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const { navigate, locale } = useSystemFunctions();

  const { landingPage } = locale;
  const { subtitle, title } = landingPage.hero;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ backgroundColor: stepBackgroundColors[step] }}
      animate={{ backgroundColor: stepBackgroundColors[step] }}
      className="flex items-center justify-center min-h-[94.5vh] md:m-[25px] md:rounded-base relative"
      id="home">
      <div className="z-30">
        <SMContainer>
          <div className="flex flex-col justify-center items-center gap-[29px]">
            <div className="w-full flex flex-col justify-center items-center gap-8">
              <div className="text-[40px] leading-[79px] md:text-[72px] md:leading-[93.6px] tracking-[0.72px] text-white max-w-[674px] text-center w-full">
                {title}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={step}
                    initial={{
                      opacity: 0,
                      color: stepTextColors[step],
                    }}
                    animate={{
                      opacity: 1,
                      color: stepTextColors[step],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="whitespace-nowrap text-[40px] leading-[59px] md:text-[72px] md:leading-[93.6px] tracking-[0.72px] text-center w-full">
                    {stepTexts[step]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="text-white text-[20px] leading-[31px] max-w-[520px] text-center">{subtitle}</p>
            </div>

            <HeroButton onClick={() => navigate.push('/migrate')} />
          </div>
        </SMContainer>
      </div>

      <div className="absolute h-full w-full top-0 left-0 z-10 overflow-hidden">
        <Player autoplay loop src="https://res.cloudinary.com/djzeufu4j/raw/upload/v1714913894/lottie_ddfob3.json">
          <Controls visible={false} />
        </Player>
      </div>
    </motion.section>
  );
};

export default HeroSection;

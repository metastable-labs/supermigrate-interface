'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

import { SMContainer } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { FlashIcon } from '@/public/icons';

const stepTexts = ['Layer 2', 'Base', 'Optimism', 'Mode'];
const stepTextColors = ['#D7FF00', '#C2D6FF', '#F25976', '#DFFE00'];

const stepBackgroundColors = ['#002132', '#162664', '#710E21', '#000'];

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const { locale } = useSystemFunctions();

  const { landingPage } = locale;
  const { subtitle, title, actionText } = landingPage.hero;

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
      className="flex items-center justify-center min-h-[100vh] md:min-h-[94.5vh] md:mx-[25px] md:mb-[25px] md:mt-[75px] mt-[70px] md:rounded-base relative"
      id="home">
      <div className="z-30">
        <SMContainer>
          <div className="flex flex-col justify-center items-center gap-[29px]">
            <div className="bg-primary-150 rounded-full px-2.5 py-2 flex items-center gap-2 w-fit">
              <div className="min-w-fit">
                <FlashIcon color="#525866" width={16} height={16} />
              </div>

              <p className="text-[16px] leading-[16px] font-medium text-primary-200">
                Liquidity Migration is coming soon, read our{' '}
                <a
                  href="https://res.cloudinary.com/djzeufu4j/image/upload/v1724698235/Liquidity_Migration_Litepaper_1_tbcbym.pdf"
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Download Whitepaper"
                  className="text-primary-3250 underline cursor-pointer underline-offset-[3px]">
                  litepaper
                </a>{' '}
                to learn more
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-8">
              <div className="font-Bitform text-[40px] leading-[79px] md:text-[72px] md:leading-[93.6px] tracking-[0.72px] text-white max-w-[674px] text-center w-full">
                {title}

                <AnimatePresence mode="popLayout" initial={false} key={step}>
                  <motion.h1
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, color: stepTextColors[step] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="whitespace-nowrap text-[40px] leading-[59px] md:text-[72px] md:leading-[93.6px] tracking-[0.72px] text-center w-full">
                    {stepTexts[step]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <p className="text-white text-lg leading-[31px] max-w-[520px] text-center">{subtitle}</p>
            </div>

            <Link
              href="/dashboard"
              className="font-Bitform flex items-center justify-center px-[18px] py-3 rounded-base shadow-table-cta border-[0.3px] border-primary-3450 text-sm md:text-base min-w-[126px] md:min-w-[187px] transition-all duration-300 bg-white hover:bg-primary-3950 hover:rounded-lg">
              {actionText}
            </Link>
          </div>
        </SMContainer>
      </div>

      <div className="absolute h-full w-full top-0 left-0 z-10 overflow-hidden flex items-center justify-center">
        <Player autoplay loop src="https://res.cloudinary.com/djzeufu4j/raw/upload/v1714913894/lottie_ddfob3.json">
          <Controls visible={false} />
        </Player>
      </div>
    </motion.section>
  );
};
export default HeroSection;

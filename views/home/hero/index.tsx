"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SMContainer } from "@/components";
import {
  HeroIcon,
  HeroBaseBlandIcon,
  HeroBaseIcon,
  HeroModeIcon,
  HeroOptimismIcon,
  HeroScrollIcon,
  HeroTiles,
} from "@/public/icons";

const icons = [
  <HeroBaseBlandIcon key={0} />,
  <HeroBaseIcon key={1} />,
  <HeroOptimismIcon key={3} />,
  <HeroModeIcon key={2} />,
  <HeroScrollIcon key={4} />,
];

const stepTexts = ["Layer 2", "Base", "Optimism", "Mode", "Scroll"];
const stepTextColors = [
  { color: "#C2540A", stroke: "#6E330C" },
  { color: "#375DFB", stroke: "#253EA7" },
  { color: "#DF1C41", stroke: "#AF1D38" },
  { color: "#DFFE00", stroke: "#1A1D01" },
  { color: "#FFEDD8", stroke: "#1A1D01" },
];

const HeroSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full mb-[141px] md:mb-[326px]">
      <SMContainer>
        <div className="w-full flex flex-col md:flex-row items-center md:items-end md:justify-between gap-6">
          <div className="flex flex-col justify-center items-start gap-[29px]">
            <div className="w-full flex flex-col justify-center items-start gap-8">
              <p className="text-black text-[38px] leading-[49.4px] md:text-[82px] md:leading-[106.6px] font-medium tracking-[-0.82px] lg:max-w-[548px]">
                Your gateway to
                <AnimatePresence mode="wait">
                  <motion.span
                    key={step}
                    initial={{
                      opacity: 0,
                      color: "transparent",
                      WebkitTextStrokeWidth: 0,
                    }}
                    animate={{
                      opacity: 1,
                      color: stepTextColors[step].color,
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: stepTextColors[step].stroke,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="whitespace-nowrap"
                  >
                    {" "}
                    {stepTexts[step]}
                  </motion.span>
                </AnimatePresence>
              </p>
              <p className="text-primary-2350 text-[20px] leading-[31px] max-w-[520px]">
                Automatically deploy canonical bridged ERC20 to base and Create
                a PR on the superchain token list repo.
              </p>
            </div>
          </div>

          <div className="relative">
            <HeroIcon />

            <div className="absolute z-10 w-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {icons[step]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SMContainer>

      <div className="absolute top-[100%] md:top-[130%] right-0 w-full flex items-center justify-center md:pb-5">
        <HeroTiles />
      </div>
    </section>
  );
};

export default HeroSection;

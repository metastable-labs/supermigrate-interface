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
  HeroFadeShape,
  HeroBGLines,
} from "@/public/icons";
import HeroButton from "./button";
import useSystemFunctions from "@/hooks/useSystemFunctions";

const icons = [
  <HeroBaseBlandIcon key={0} />,
  <HeroBaseIcon key={1} />,
  <HeroOptimismIcon key={3} />,
  <HeroModeIcon key={2} />,
  <HeroScrollIcon key={4} />,
];

const stepTexts = ["Layer 2", "Base", "Optimism", "Mode", "Scroll"];
const stepTextColors = ["#D7FF00", "#C2D6FF", "#F25976", "#DFFE00", "#FFEDD8"];

const stepBackgroundColors = [
  "#002132",
  "#162664",
  "#710E21",
  "#000",
  "#B37A57",
];

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const { navigate } = useSystemFunctions();

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ backgroundColor: stepBackgroundColors[step] }}
      animate={{ backgroundColor: stepBackgroundColors[step] }}
      className="flex items-center justify-center min-h-[90vh] m-[25px] rounded-base relative"
    >
      <SMContainer>
        <div className="flex flex-col justify-center items-center gap-[29px]">
          <div className="w-full flex flex-col justify-center items-start gap-8">
            <p className="text-[62px] leading-[79px] md:text-[72px] md:leading-[93.6px] tracking-[0.72px] text-white max-w-[674px] text-center">
              Your gateway to
              <br />
              <AnimatePresence mode="popLayout" initial={false}>
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
                  transition={{ duration: 0.5 }}
                  className="whitespace-nowrap md:min-h-[88px]"
                >
                  {stepTexts[step]}
                </motion.p>
              </AnimatePresence>
            </p>
            <p className="text-white text-[20px] leading-[31px] max-w-[520px] text-center">
              Automatically deploy canonical bridged ERC20 to base and Create a
              PR on the superchain token list repo.
            </p>
          </div>

          <HeroButton onClick={() => navigate.push("/migrate")} />
        </div>
      </SMContainer>
    </motion.section>
  );
};

export default HeroSection;

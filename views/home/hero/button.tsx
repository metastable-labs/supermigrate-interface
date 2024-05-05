"use client";
import { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { SMClickAnimation } from "@/components";

const HeroButton = ({ onClick }: { onClick: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SMClickAnimation
      onClick={onClick}
      className="flex items-center justify-center px-[18px] py-3 rounded-base shadow-table-cta border-[0.3px] border-l-primary-3450 text-sm md:text-base min-w-[126px] md:min-w-[187px] transition-all duration-300 bg-white"
    >
      Start Migrating
    </SMClickAnimation>
  );
};

export default HeroButton;

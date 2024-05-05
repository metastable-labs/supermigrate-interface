'use client';
import { useState, useEffect } from 'react';
import { color, motion } from 'framer-motion';

const stepTextColors = [
  { backgroundColor: '#C2540A', borderColor: '#620F6C', color: '#fff' },
  { backgroundColor: '#375DFB', borderColor: '#E2E4E9', color: '#fff' },
  { backgroundColor: '#DF1C41', borderColor: '#710E21', color: '#fff' },
  { backgroundColor: '#DFFE00', borderColor: '#1A1D01', color: '#0A0D14' },
  { backgroundColor: '#FFEDD8', borderColor: '#620F6C', color: '#6E330C' },
];

const HeroButton = ({ onClick }: { onClick: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      initial={{
        backgroundColor: stepTextColors[0].backgroundColor,
        borderColor: stepTextColors[0].borderColor,
        color: stepTextColors[0].color,
      }}
      animate={{
        backgroundColor: stepTextColors[step].backgroundColor,
        borderColor: stepTextColors[step].borderColor,
        color: stepTextColors[step].color,
      }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-[18px] py-3 rounded-lg shadow-table-cta border text-sm md:text-base min-w-[126px] md:min-w-[187px]">
      Start Migrating
    </motion.button>
  );
};

export default HeroButton;

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const iconColors: { [key: number]: string } = {
  0: "#C2540A",
  1: "#375DFB",
  2: "#DF1C41",
  3: "#DFFE00",
  4: "#FFEDD8",
};

const HeroFadeShape = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <svg
      width="827"
      height="932"
      viewBox="0 0 827 932"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_571_27363)">
        <motion.ellipse
          cx="967.724"
          cy="236.501"
          rx="367.724"
          ry="358.501"
          initial={{ fill: iconColors[0] }}
          animate={{ fill: iconColors[step] }}
          transition={{ duration: 1 }}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_571_27363"
          x="0"
          y="-722"
          width="1935.45"
          height="1917"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="300"
            result="effect1_foregroundBlur_571_27363"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroFadeShape;

'use client';
import { motion } from 'framer-motion';

import useScreenDetect from '@/hooks/useScreenDetect';

const iconColors = {
  light: { primary: '#EBF1FF', secondary: '#0A0D14' },
  dark: { primary: '#0A0D14', secondary: '#EBF1FF' },
};

const SuperMigrateLogo = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const { isMobile } = useScreenDetect();

  const width = isMobile ? '34' : '42';
  const height = isMobile ? '20' : '21';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 42 21" fill="none">
      <motion.rect y="0.5" width="41.6667" height="20" rx="1.30952" animate={{ fill: iconColors[variant].primary }} />
      <rect x="7.69482" y="9.66666" width="26.6347" height="2.21956" rx="1.10978" fill={iconColors[variant].secondary} />
    </svg>
  );
};

export default SuperMigrateLogo;

'use client';
import { motion } from 'framer-motion';

import { WebIcon, XIcon } from '@/public/icons';
import { IFastLink } from './types';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const checkRef = (href?: string) => {
  if (!href) return '';

  if (href.startsWith('http') || href.startsWith('https')) {
    return href;
  } else {
    return `https://${href}`;
  }
};

const FastLink = ({ variant, href }: IFastLink) => {
  const { locale } = useSystemFunctions();
  const url = checkRef(href);

  const { twitterText, websiteText } = locale.tokenDetail;

  if (!href) return null;

  return (
    <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} href={url} target="_blank" className="flex px-1 md:px-3.5 md:py-2.5 md:gap-1">
      {variant === 'web' && <WebIcon />}
      {variant === 'x' && <XIcon color="#525866" width={20} height={20} />}

      <span className="hidden md:block text-primary-200 text-sm font-bold">
        {variant === 'web' && websiteText}
        {variant === 'x' && twitterText}
      </span>
    </motion.a>
  );
};

export default FastLink;

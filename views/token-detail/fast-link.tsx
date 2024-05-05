'use client';
import { motion } from 'framer-motion';

import { WebIcon, XIcon } from '@/public/icons';
import { IFastLink } from './types';

const FastLink = ({ variant, href }: IFastLink) => (
  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} href={href} target="_blank" className="flex px-1 md:px-3.5 md:py-2.5 md:gap-1">
    {variant === 'web' && <WebIcon />}
    {variant === 'x' && <XIcon color="#525866" width={20} height={20} />}

    <span className="hidden md:block text-primary-200 text-sm font-bold">
      {variant === 'web' && 'Website'}
      {variant === 'x' && 'Twitter'}
    </span>
  </motion.a>
);

export default FastLink;

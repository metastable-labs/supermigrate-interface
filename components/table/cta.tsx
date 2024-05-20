'use client';

import { motion } from 'framer-motion';
import { RightArrowIcon, LeftArrowIcon } from '@/public/icons';
import classNames from 'classnames';
import { CTAProps } from './types';

const CTA = ({ title, onClick, normal = false }: CTAProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={classNames('px-3 py-2 flex items-center justify-center gap-1 bg-white rounded-base border border-primary-1550 shadow-table-cta text-sm text-primary-1600 font-medium', {
        'min-w-[100px]': normal,
      })}>
      <span>{title}</span>
    </motion.button>
  );
};

export default CTA;

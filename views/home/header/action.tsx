'use client';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Action = () => {
  const { locale } = useSystemFunctions();
  const { landingPage } = locale;
  const { navigation } = landingPage;
  return (
    <Link href="/dashboard" className="pointer-events-none">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        className="px-3 py-2 flex items-center justify-center gap-1 bg-white rounded-base border border-primary-1300 shadow-table-cta">
        <span className="text-sm text-primary-50 font-medium px-[2px]">{navigation.actionText}</span>
      </motion.button>
    </Link>
  );
};

export default Action;

'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useChainId } from 'wagmi';

import { networks } from '@/config/rainbow/config';

interface ColorConfig {
  primary: string;
  secondary: string;
  tertiary: string;
}

const colors: { [key: string]: ColorConfig } = {
  base: { primary: '#D2E5F8', secondary: '#DAECFF', tertiary: '#F6F8FA' },
  optimism: { primary: '#F8D2D2', secondary: '#FFDADA', tertiary: '#FAF6F7' },
  mode: { primary: '#D2E5F8', secondary: '#DAECFF', tertiary: '#F6F8FA' },
  scroll: { primary: '#D2E5F8', secondary: '#DAECFF', tertiary: '#F6F8FA' },
};

const dashboardRegex = /^\/[a-z]{2}\/dashboard$/;

const SMTiles = () => {
  const chainId = useChainId();
  const pathname = usePathname();

  const connectedNetwork = networks.find((chain) => chain.chainId === chainId);
  let network = connectedNetwork?.variant || 'base';

  if (dashboardRegex.test(pathname)) {
    network = 'base';
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="235" viewBox="0 0 1440 235" fill="none" className="xl:scale-125 2xl:scale-[2]">
      <path
        d="M516.029 1H719.765V31.9921M516.029 1L493.927 31.9921M516.029 1H319.617M348.912 235.342H719.765V144.987M348.912 235.342L413.347 144.987M348.912 235.342H-17.2797M493.927 31.9921L471.826 62.9841M493.927 31.9921H719.765M493.927 31.9921H275.062M471.826 62.9841L443.562 102.617M471.826 62.9841H719.765M471.826 62.9841H230.506M443.562 102.617L413.347 144.987M443.562 102.617H719.765M443.562 102.617H173.529M413.347 144.987H719.765M413.347 144.987H112.617M-17.2797 235.342L112.617 144.987M-17.2797 235.342H-382.14M319.617 1L275.062 31.9921M319.617 1H124.869M112.617 144.987L173.529 102.617M112.617 144.987H-186.654M173.529 102.617L230.506 62.9841M173.529 102.617H-94.9842M230.506 62.9841L275.062 31.9921M230.506 62.9841H-9.23631M275.062 31.9921H57.8165M124.869 1H-69.8781L-159.429 31.9921M124.869 1L57.8165 31.9921M-382.14 235.342H-747L-485.924 144.987M-382.14 235.342L-186.654 144.987M57.8165 31.9921L-9.23631 62.9841M57.8165 31.9921H-159.429M-9.23631 62.9841L-94.9842 102.617M-9.23631 62.9841H-248.979M-94.9842 102.617L-186.654 144.987M-94.9842 102.617H-363.497M-186.654 144.987H-485.924M719.765 144.987V102.617M-485.924 144.987L-363.497 102.617M-363.497 102.617L-248.979 62.9841M719.765 102.617V62.9841M-248.979 62.9841L-159.429 31.9921M719.765 62.9841V31.9921M923.724 1H719.988V31.9921M923.724 1L945.826 31.9921M923.724 1H1120.14M1090.84 235.342H719.988V144.987M1090.84 235.342L1026.41 144.987M1090.84 235.342H1457.03M945.826 31.9921L967.927 62.9841M945.826 31.9921H719.988M945.826 31.9921H1164.69M967.927 62.9841L996.19 102.617M967.927 62.9841H719.988M967.927 62.9841H1209.25M996.19 102.617L1026.41 144.987M996.19 102.617H719.988M996.19 102.617H1266.22M1026.41 144.987H719.988M1026.41 144.987H1327.14M1457.03 235.342L1327.14 144.987M1457.03 235.342H1821.89M1120.14 1L1164.69 31.9921M1120.14 1H1314.88M1327.14 144.987L1266.22 102.617M1327.14 144.987H1626.41M1266.22 102.617L1209.25 62.9841M1266.22 102.617H1534.74M1209.25 62.9841L1164.69 31.9921M1209.25 62.9841H1448.99M1164.69 31.9921H1381.94M1314.88 1H1509.63L1599.18 31.9921M1314.88 1L1381.94 31.9921M1821.89 235.342H2186.75L1925.68 144.987M1821.89 235.342L1626.41 144.987M1381.94 31.9921L1448.99 62.9841M1381.94 31.9921H1599.18M1448.99 62.9841L1534.74 102.617M1448.99 62.9841H1688.73M1534.74 102.617L1626.41 144.987M1534.74 102.617H1803.25M1626.41 144.987H1925.68M719.988 144.987V102.617M1925.68 144.987L1803.25 102.617M1803.25 102.617L1688.73 62.9841M719.988 102.617V62.9841M1688.73 62.9841L1599.18 31.9921M719.988 62.9841V31.9921"
        stroke="url(#paint0_linear_891_29222)"
        stroke-width="1.28056"
      />
      <defs>
        <linearGradient id="paint0_linear_891_29222" x1="835.935" y1="140.616" x2="835.935" y2="-126.437" gradientUnits="userSpaceOnUse">
          <motion.stop
            initial={{
              stopColor: colors.base.primary,
            }}
            animate={{ stopColor: colors[network].primary }}
          />
          <motion.stop
            initial={{
              stopColor: colors.base.secondary,
            }}
            animate={{ stopColor: colors[network].secondary }}
            offset="0.31674"
          />
          <motion.stop
            initial={{
              stopColor: colors.base.tertiary,
            }}
            animate={{ stopColor: colors[network].tertiary }}
            offset="0.50309"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SMTiles;

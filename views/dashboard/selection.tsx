import { motion } from 'framer-motion';

import SMCard from '@/components/card';
import { NetworkProps, networks } from '@/config/privy/config';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const comingSoonNetworks: NetworkProps[] = [
  {
    title: 'World Chain',
    chainId: 0,
    comingSoon: true,
    variant: 'world-chain',
  },
];

const SelectionComponent = () => {
  const { locale } = useSystemFunctions();

  const { subtitle, title } = locale.dashboard;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="flex mt-7 md:mt-24 justify-center pb-10">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-2xl font-medium text-primary-300">{title}</h1>
          <span className="text-base">{subtitle}</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {networks.map((card, index) => (
            <SMCard key={index} {...card} />
          ))}

          {comingSoonNetworks.map((card, index) => (
            <SMCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SelectionComponent;

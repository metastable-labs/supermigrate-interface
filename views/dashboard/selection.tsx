import { motion } from 'framer-motion';

import SMCard from '@/components/card';
import { NetworkProps, networks } from '@/config/rainbow/config';

const comingSoonNetworks: NetworkProps[] = [
  {
    title: 'Scroll',
    variant: 'scroll',
    chainId: 0,
    comingSoon: true,
  },
  {
    title: 'Linea',
    chainId: 0,
    comingSoon: true,
    variant: 'linea',
  },
  {
    title: 'Zora',
    chainId: 0,
    comingSoon: true,
    variant: 'zora',
  },
  {
    title: 'World Chain',
    chainId: 0,
    comingSoon: true,
    variant: 'world-chain',
  },
  {
    title: 'Degen',
    chainId: 0,
    comingSoon: true,
    variant: 'degen',
  },
];

const SelectionComponent = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="flex mt-7 md:mt-24 justify-center pb-10">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-2xl font-medium text-primary-300">Select a network</h1>
          <span className="text-base">Select a network to start a new migration</span>
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

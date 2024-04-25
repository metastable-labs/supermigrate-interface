import { motion } from "framer-motion";

import { networks } from "@/config/rainbow/rainbowkit";
import SMCard from "@/components/card";
import { NetworkProps } from "@/config/rainbow/rainbowkit";

const comingSoonNetworks: NetworkProps[] = [
  {
    title: "Linea",
    chainId: 0,
    comingSoon: true,
    variant: "linea",
  },
  {
    title: "Zora",
    chainId: 0,
    comingSoon: true,
    variant: "zora",
  },
  {
    title: "World Chain",
    chainId: 0,
    comingSoon: true,
    variant: "world-chain",
  },
  {
    title: "Degen",
    chainId: 0,
    comingSoon: true,
    variant: "degen",
  },
  {
    title: "PGN",
    chainId: 0,
    comingSoon: true,
    variant: "pgn",
  },
];

const SelectionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex mt-7 md:mt-24 justify-center"
    >
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-2xl font-medium text-primary-300">
            Select a network
          </h1>
          <span className="text-base">
            Select a network to start a new migration
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {networks.map((card, index) => (
            <SMCard key={index} {...card} />
          ))}

          {comingSoonNetworks.map((card, index) => (
            <SMCard key={index} {...card} />
          ))}
        </div>

        <div className="self-stretch flex items-center rounded-xl bg-primary-650 px-6 py-3 ">
          <div className="text-primary-700 text-[14px] leading-[24px]">
            {
              "We are adding more L2 Integrations. If you'd like us to support your network, reach out to"
            }

            <p className="underline">
              <a
                href="https://www.integrations@metastablelabs.xyz"
                target="_blank"
              >
                integrations@metastablelabs.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectionComponent;

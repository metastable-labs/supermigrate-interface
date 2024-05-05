"use client";

import { Chain } from "@/application/migration/types";
import { CopySecondaryIcon } from "@/public/icons";
import { SMClickAnimation } from "@/components";
import useCopy from "@/hooks/useCopy";

function truncateAddress(address: string) {
  return `${address.slice(0, 10)}...${address.slice(-10)}`;
}

const TokenContract = ({ chains }: { chains: Chain[] }) => {
  const copy = useCopy();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary-50 text-[16px] leading-[24.8px] md:text-[20px] md:leading-[31px]">
        Token Contract
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chains.map((chain, index) => (
          <div
            key={index}
            className="p-4 border border-primary-2100 rounded-base flex items-center justify-between w-full bg-primary-2700"
          >
            <div className="flex flex-col items-start gap-1.5 justify-center">
              <h3 className="text-primary-200 text-[12px] leading-[17.4px] capitalize">
                {chain.name}
              </h3>
              <h3 className="text-primary-300 text-sm font-medium hidden md:block">
                {chain.token_address}
              </h3>
              <h3 className="text-primary-300 text-sm font-medium md:hidden block">
                {truncateAddress(chain.token_address)}
              </h3>
            </div>
            <SMClickAnimation onClick={() => copy(chain.token_address)}>
              <CopySecondaryIcon />
            </SMClickAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenContract;

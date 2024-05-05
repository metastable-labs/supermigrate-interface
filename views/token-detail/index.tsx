"use client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import NewMigrateHeader from "../new-migrate/header";
import { Network } from "@/config/rainbow/config";
import { SMButton, SMContainer, SMLoader } from "@/components";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import useMigrationActions from "@/application/migration/actions";
import FastLink from "./fast-link";
import { FastLinkVariant } from "./types";
import TokenContract from "./contract";
import PullRequests from "./pull-request";
import TransactionHash from "./hash";
import { getScanLink } from "@/utils/helpers";

const TokenDetailView = ({ id, network }: { id: string; network: Network }) => {
  const { migrationState, userState } = useSystemFunctions();
  const { getMigration } = useMigrationActions();
  const { migration, loading } = migrationState;

  const fastlinks = [
    { variant: "web" as FastLinkVariant, href: migration?.website! },
    { variant: "x" as FastLinkVariant, href: migration?.twitter! },
  ];

  // filter chains and retrurn only the ones that are not on chain id 1
  const hashes = migration?.chains
    ?.filter((chain) => chain.id !== 1)
    .map((chain) => ({
      name: chain.name,
      urlText: `View on ${chain.name}scan`,
      url: getScanLink(chain.id, chain.transaction_hash),
    }));

  useEffect(() => {
    getMigration(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if ((loading && !migration) || userState.loading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <SMLoader variant="medium" />
      </div>
    );
  }

  return (
    <SMContainer>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:px-8 pb-10 max-w-[1280px]"
        >
          <div className="pt-5 md:pt-12 md:pb-[86px] flex flex-col gap-8">
            <NewMigrateHeader title="Token info" />

            <div className="flex flex-col gap-8 md:gap-9">
              <div className="flex flex-col gap-6 items-stretch md:flex-row md:gap-3 md:items-start">
                <div className="w-full flex items-start justify-between">
                  <div className="flex gap-4 md:gap-5 items-center justify-center">
                    {migration?.logo_url && (
                      <Image
                        src={migration?.logo_url}
                        width={500}
                        height={500}
                        alt="logo"
                        className="md:w-16 md:h-16 w-10 h-10"
                      />
                    )}

                    <div>
                      <h1 className="text-primary-300 text-[20px] leading-[30px] md:text-[30px] md:leading-[38px]">
                        {migration?.name}
                      </h1>
                      <h3 className="text-primary-350 text-sm md:text-base">
                        {migration?.symbol}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center justify-center">
                    {fastlinks.map((link, index) => (
                      <FastLink key={index} {...link} />
                    ))}
                  </div>
                </div>

                <div className="md:w-[162px]">
                  <SMButton
                    text="Create Liquidity"
                    variant="new"
                    fullWidth
                    network={network}
                  />
                </div>
              </div>

              <div className="p-6 border border-primary-250 rounded-base flex flex-col gap-9 bg-white">
                <TokenContract chains={migration?.chains || []} />
                <PullRequests pullRequests={migration?.pull_requests || []} />
                <TransactionHash hashes={hashes} />
              </div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </SMContainer>
  );
};

export default TokenDetailView;

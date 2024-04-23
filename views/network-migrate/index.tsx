"use client";
import { motion } from "framer-motion";

import { INetwork } from "../migrate/types";
import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { SMContainer, SMTable, SMButton } from "@/components";
import { PullStatus } from "@/components/table/types";
import Connect from "./connect";
import useSystemFunctions from "@/hooks/useSystemFunctions";

const NetworkMigrationsView = ({ network }: INetwork) => {
  const { navigate } = useSystemFunctions();

  const action = () => navigate.push(`/migrate/${network}/new`);

  const tableData = [
    {
      tokenIcon: "/images/grin.png",
      tokenName: "$NJOKU",
      pullStatus: "merged" as PullStatus,
    },
    {
      tokenIcon: "/images/gulden.png",
      tokenName: "$GULDEN",
      pullStatus: "merged" as PullStatus,
    },
    {
      tokenIcon: "/images/handshake.png",
      tokenName: "$Handshake",
      pullStatus: "merged" as PullStatus,
    },
  ];

  return (
    <div className="pt-[123px] md:pt-[82px] pb-10">
      <SMContainer>
        <motion.div
          className="mt-5 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-8 w-full">
            <Connect network={network} />

            <div className="self-stretch pb-5 border-b border-l-primary-1350 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[14px] md:gap-8">
              <div className="flex-1 flex flex-col gap-1 items-start">
                <h1 className="text-[20px] md:text-[30px] text-primary-300 leading-[38px] font-medium">
                  Migrations
                </h1>
                <p className="text-[14px] text-primary-350 md:text-base max-w-[399px] text-wrap">
                  Manage all your Migrations and create new ones
                </p>
              </div>

              <SMButton
                onClick={action}
                text="new migration"
                variant="bland-new"
              />
            </div>

            <SMTable isConnected data={tableData} network={network} />
          </div>
        </motion.div>
      </SMContainer>

      <div className="hidden md:flex justify-center fixed w-screen bottom-0 -z-10">
        <DesktopTilesIcon />
      </div>
      <div className="flex md:hidden justify-center fixed w-screen bottom-0 -z-10">
        <MobileTilesIcon />
      </div>
    </div>
  );
};

export default NetworkMigrationsView;

"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

import { INetwork } from "../migrate/types";
import Button from "../migrate/button";
import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { SMContainer } from "@/components";
import Table from "./table";
import { PullStatus } from "./types";

const tableData = [
  {
    tokenIcon: "/public/images/grin.png",
    tokenName: "$NJOKU",
    pullStatus: "merged" as PullStatus,
  },
  {
    tokenIcon: "/public/images/gulden.png",
    tokenName: "$GULDEN",
    pullStatus: "merged" as PullStatus,
  },
  {
    tokenIcon: "/public/images/handshake.png",
    tokenName: "$Handshake",
    pullStatus: "merged" as PullStatus,
  },
];

const NetworkComponent = ({ network }: INetwork) => {
  const buttonText = "connect github";
  const buttonVariant = "git";
  const action = () => {};

  return (
    <div className="pt-[123px] md:pt-[82px]">
      <SMContainer>
        <motion.div
          className="mt-5 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-8 w-full">
            <div
              className={classNames(
                "py-6 px-4 md:px-8 rounded-xl self-stretch flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[18px] md:gap-[10px]",
                {
                  "bg-primary-750": network === "base",
                  "bg-primary-800": network === "optimism",
                  "bg-primary-850": network === "mode",
                  "bg-primary-900": network === "scroll",
                }
              )}
            >
              <div className="flex-1 flex flex-col gap-[10px] md:gap-2 items-start">
                <h1
                  className={classNames(
                    "text-[20px] leading-[30px] md:text-[24px] md:leading-[38px] font-medium",
                    {
                      "text-primary-650": network === "base",
                      "text-primary-1050": network === "optimism",
                      "text-primary-1150": network === "mode",
                      "text-primary-550": network === "scroll",
                    }
                  )}
                >
                  Please connect Github to continue
                </h1>
                <p
                  className={classNames(
                    "text-sm md:text-base max-w-[399px] text-wrap",
                    {
                      "text-primary-1000": network === "base",
                      "text-primary-1100": network === "optimism",
                      "text-primary-1200": network === "mode",
                      "text-primary-1250": network === "scroll",
                    }
                  )}
                >
                  The Github account connected will be used to fork and create a
                  PR on the Superchain token list repo
                </p>
              </div>

              <Button
                network={network}
                onClick={action}
                text={buttonText}
                variant={buttonVariant}
              />
            </div>

            <div className="self-stretch pb-5 border-b border-l-primary-1350 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[14px] md:gap-8">
              <div className="flex-1 flex flex-col gap-1 items-start">
                <h1 className="text-[20px] md:text-[30px] text-primary-300 leading-[38px] font-medium">
                  Migrations
                </h1>
                <p className="text-[14px] text-primary-350 md:text-base max-w-[399px] text-wrap">
                  Manage all your Migrations and create new ones
                </p>
              </div>

              <Button
                onClick={action}
                text="new migration"
                variant="bland-new"
              />
            </div>

            <Table data={tableData} network={network} />
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

export default NetworkComponent;

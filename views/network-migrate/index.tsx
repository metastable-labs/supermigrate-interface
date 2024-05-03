"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { SMContainer, SMTable, SMButton } from "@/components";
import { PullStatus } from "@/components/table/types";
import Connect from "./connect";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import { Network } from "@/config/rainbow/rainbowkit";
import SMLoader from "@/components/loader";
import useUserActions from "@/application/user/actions";

const NetworkMigrationsView = ({ network }: { network: Network }) => {
  const { navigate, userState, migrationState } = useSystemFunctions();
  const { authenticateGithub } = useUserActions();
  const searchParams = useSearchParams();

  const { loading, user } = userState;
  const { migrations, loading: migration_loading } = migrationState;

  const code = searchParams.get("code");

  const action = () => navigate.push(`/migrate/${network}/new`);

  const tableData = migrations?.map?.((migration) => ({
    tokenIcon: migration.logo_url,
    tokenName: migration.name,
    pullStatus:
      migration.pull_requests.status === "pending"
        ? "pending"
        : ("merged" as PullStatus),
  }));

  const handleGithubConnection = async () => {
    if (!code || loading) return;

    await authenticateGithub(code);
  };

  useEffect(() => {
    handleGithubConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  if (loading || migration_loading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <SMLoader variant="medium" />
      </div>
    );
  }

  return (
    <div className="pb-10">
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

            <div className="self-stretch pb-5 border-b border-primary-1350 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[14px] md:gap-8">
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
                variant="new"
                network={network}
              />
            </div>

            <SMTable
              isConnected={user ? true : false}
              data={tableData}
              network={network}
            />
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

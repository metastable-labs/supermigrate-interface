"use client";

import { useEffect, useState } from "react";
import { useAccount, useChainId } from "wagmi";
import { trim } from "viem";

import useSystemFunctions from "@/hooks/useSystemFunctions";
import { FormProp } from "@/views/new-migrate/migration-steps/types";
import useContract from "@/hooks/useContract";
import { networks } from "@/config/rainbow/config";
import {
  setLoading,
  setLoadingMigration,
  setMigration,
  setMigrations,
} from ".";
import api from "./api";
import { CallbackProps } from "../store";
import { Migration } from "./types";

const useMigrationActions = () => {
  const { dispatch, migrationState } = useSystemFunctions();
  const {
    deployToken,
    isPending,
    isConfirmed,
    getTransactionData,
    deployTokenWithDecimal,
  } = useContract();
  const { address } = useAccount();
  const chainId = useChainId();

  const [data, setData] = useState<FormProp>();

  const getMigrations = async () => {
    try {
      dispatch(setLoading(true));
      const migrations = await api.fetchMigrations();

      return dispatch(setMigrations(migrations));
    } catch (error: any) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getMigration = async (id: string) => {
    try {
      dispatch(setLoading(true));
      const migration = await api.fetchMigration(id);

      return dispatch(setMigration(migration));
    } catch (error: any) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getMigrationObject = async (id: string, body?: Migration) => {
    try {
      if (body) {
        return dispatch(setMigration(body));
      }

      const migration = await migrationState.migrations?.find(
        (item) => item.id === id
      );
      if (!migration) return;

      return dispatch(setMigration(migration));
    } catch (error: any) {}
  };

  const migrateToken = async (data: FormProp, callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));

      if (data.tokenDecimal === "18") {
        return deployToken(
          data.tokenAddress,
          data.tokenName!,
          data.tokenSymbol!
        );
      }

      deployTokenWithDecimal(
        data.tokenAddress,
        data.tokenName!,
        data.tokenSymbol!,
        data.tokenDecimal!
      );
      setData(data);

      callback?.onSuccess?.();
    } catch (error: any) {
      dispatch(setLoading(false));
    }
  };

  const _submitData = async () => {
    try {
      if (isPending || !isConfirmed) return;

      dispatch(setLoading(false));
      setLoadingMigration(true);
      const txData = await getTransactionData();

      const formData = new FormData();
      formData.append("logo", data?.file as File);
      formData.append("name", data?.tokenName!);
      formData.append("symbol", data?.tokenSymbol!);
      formData.append("decimals", data?.tokenDecimal!);
      formData.append("description", data?.tokenDescription!);
      if (data?.websiteLink) {
        formData.append("website", data?.websiteLink!);
      }
      formData.append("twitter", data?.twitterLink!);

      const deployedToken = await networks.find(
        (network) => network.chainId === chainId
      );
      const logIndex = data?.tokenDecimal !== "18" ? 1 : 0;
      const tokenAddress = txData?.logs?.[logIndex]?.topics?.[2];

      let chains = [
        {
          id: 1,
          name: "ethereum",
          token_address: data?.tokenAddress,
        },
        {
          id: chainId,
          name: deployedToken?.variant,
          token_address: trim(tokenAddress!),
          deployer_address: address,
          token_detail_override: {},
          transaction_hash: txData?.blockHash,
        },
      ];

      if (data?.overridden) {
        chains[1].token_detail_override = {
          name: data?.tokenName!,
          symbol: data?.tokenSymbol!,
          decimals: parseInt(data?.tokenDecimal!),
        };
      }
      formData.append("chains", JSON.stringify(chains));

      const response = await api.migrateToken(formData);

      getMigrationObject("", response);
      getMigrations();
    } catch (error: any) {
      setLoadingMigration(false);
    } finally {
      setLoadingMigration(false);
    }
  };

  useEffect(() => {
    _submitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, isConfirmed]);

  return {
    getMigrations,
    getMigration,
    getMigrationObject,
    migrateToken,
  };
};

export default useMigrationActions;

"use client";

import useSystemFunctions from "@/hooks/useSystemFunctions";
import { setLoading, setMigration, setMigrations } from ".";
import api from "./api";
import { Migration } from "./types";

const useMigrationActions = () => {
  const { dispatch } = useSystemFunctions();

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

  const getMigrationObject = async (body: Migration) => {
    try {
      return dispatch(setMigration(body));
    } catch (error: any) {}
  };

  return {
    getMigrations,
    getMigration,
    getMigrationObject,
  };
};

export default useMigrationActions;

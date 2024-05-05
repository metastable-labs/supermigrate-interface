'use client';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import api from './api';
import { CallbackProps } from '../store';
import { setLiquidities, setLiquidity, setLoading } from '.';
import { Liquidity } from './types';

const useLiquidityActions = () => {
  const { dispatch } = useSystemFunctions();

  const getLiquidities = async () => {
    try {
      dispatch(setLoading(true));
      const liqudities = await api.fetchLiquidities();

      return dispatch(setLiquidities(liqudities));
    } catch (error: any) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getLiquidity = async (id: string) => {
    try {
      dispatch(setLoading(true));
      const migration = await api.fetchLiquidity(id);

      return dispatch(setLiquidity(migration));
    } catch (error: any) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getLiquidityObject = async (body: Liquidity) => {
    try {
      return dispatch(setLiquidity(body));
    } catch (error: any) {}
  };

  const postLiquidity = async (data: any, callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));

      const response = await api.postLiquidity(data);

      callback?.onSuccess?.();
    } catch (error: any) {
      dispatch(setLoading(false));
    }
  };

  return {
    getLiquidities,
    getLiquidity,
    getLiquidityObject,
    postLiquidity,
  };
};

export default useLiquidityActions;

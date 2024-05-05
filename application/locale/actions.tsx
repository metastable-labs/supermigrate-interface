'use client';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import useDictionary from '@/hooks/useDictionary';
import { LangParamProp } from '@/config/internationalization/i18n';
import { setLocale } from '.';

const useLocaleActions = () => {
  const { dispatch } = useSystemFunctions();
  const getDictionary = useDictionary();

  const getLocale = async ({ lang }: LangParamProp) => {
    try {
      const dictionary = await getDictionary(lang);

      return dispatch(setLocale(dictionary));
    } catch (error: any) {
      //
    }
  };

  return {
    getLocale,
  };
};

export default useLocaleActions;

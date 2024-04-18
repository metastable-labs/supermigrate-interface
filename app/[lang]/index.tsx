import { ReactNode, useEffect } from "react";

import useLocaleActions from "@/application/locale/actions";
import { LangParamProp } from "@/config/internationalization/i18n";
import { SMNavigation } from "@/components";

const AppHome = ({
  locale,
  children,
}: {
  locale: LangParamProp;
  children: ReactNode;
}) => {
  const { getLocale } = useLocaleActions();

  useEffect(() => {
    getLocale({ lang: locale.lang });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <SMNavigation />
      {children}
    </main>
  );
};

export default AppHome;

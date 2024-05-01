import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import useLocaleActions from "@/application/locale/actions";
import { LangParamProp } from "@/config/internationalization/i18n";
import { SMNavigation } from "@/components";

import "react-toastify/dist/ReactToastify.css";

const AppHome = ({
  locale,
  children
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
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        position="top-center"
        theme="colored"
        bodyStyle={{ alignItems: "center" }}
        className="md:min-w-[430px] pt-0"
      />
    </main>
  );
};

export default AppHome;

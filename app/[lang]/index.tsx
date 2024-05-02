import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";

import useLocaleActions from "@/application/locale/actions";
import { LangParamProp } from "@/config/internationalization/i18n";
import { SMNavigation } from "@/components";
import { setTokenHeader } from "@/utils/axios";
import useUserActions from "@/application/user/actions";

import "react-toastify/dist/ReactToastify.css";

const AppHome = ({
  locale,
  children
}: {
  locale: LangParamProp;
  children: ReactNode;
}) => {
  const [cookies] = useCookies(["SMauthtoken"]);
  const { getLocale } = useLocaleActions();
  const { getUser } = useUserActions();

  const fetchUser = async () => {
    await setTokenHeader(cookies?.SMauthtoken);
    getUser();
  };

  useEffect(() => {
    if (!cookies?.SMauthtoken) return;

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

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

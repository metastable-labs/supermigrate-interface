"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import useConnect from "@/hooks/useConnect";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import useUserActions from "@/application/user/actions";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import { LangParamProp } from "@/config/internationalization/i18n";
import useLocaleActions from "@/application/locale/actions";

export default function HomeView({ lang }: LangParamProp) {
  const { userState, locale } = useSystemFunctions();
  const { getUser } = useUserActions();
  const { getLocale } = useLocaleActions();
  const { openConnectModal } = useConnectModal();
  const {} = useConnect();
  const { isConnected, address } = useAccount();

  const connect = () => {
    openConnectModal && openConnectModal();
  };

  useEffect(() => {
    getUser();
    getLocale({ lang });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center">
      <h1>
        {locale?.page?.home?.title}, {userState.user?.name}
      </h1>

      {!isConnected && !address && (
        <button className="h-14 w-24 bg-blue-300" onClick={connect}>
          {locale?.page?.home?.btn}
        </button>
      )}

      <div className="text-right">
        {locale?.page?.home?.description}:{" "}
        <span className="font-semibold">{address}</span>
      </div>
    </main>
  );
}

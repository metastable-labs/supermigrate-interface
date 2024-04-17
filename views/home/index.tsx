"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import useConnect from "@/hooks/useConnect";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import useUserActions from "@/application/user/actions";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import { LangParamProp } from "@/config/internationalization/i18n";
import { SMContainer } from "@/components";
import Hero from "./hero";
import LandingNav from "./nav";

export default function HomeView({ lang }: LangParamProp) {
  const { userState, locale } = useSystemFunctions();
  const { getUser } = useUserActions();
  const { openConnectModal } = useConnectModal();
  const {} = useConnect();
  const { isConnected, address } = useAccount();

  const connect = () => {
    openConnectModal && openConnectModal();
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SMContainer>
      <LandingNav lang={lang} />
      {/* <Hero lang={lang} /> */}
    </SMContainer>
  );
}

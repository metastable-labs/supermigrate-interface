"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import useConnect from "@/hooks/useConnect";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import useUserActions from "@/application/user/actions";
import useSystemFunctions from "@/hooks/useSystemFunctions";

export default function Home() {
  const { userState } = useSystemFunctions();
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
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center">
      <h1>Hello, {userState.user?.name}</h1>

      {!isConnected && !address && (
        <button className="h-14 w-24 bg-blue-300" onClick={connect}>
          Connect
        </button>
      )}

      <div className="text-right">
        your wallet address: <span className="font-semibold">{address}</span>
      </div>
    </main>
  );
}

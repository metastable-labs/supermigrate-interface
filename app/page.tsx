"use client";
import { useEffect } from "react";

import useUserActions from "@/application/user/actions";
import useSystemFunctions from "@/hooks/useSystemFunctions";

export default function Home() {
  const { userState } = useSystemFunctions();
  const { getUser } = useUserActions();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1>Hello, {userState.user?.name}</h1>
    </main>
  );
}

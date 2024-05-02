"use client";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import { store } from "@/application/store";
import RainbowProvider from "@/config/rainbow/rainbowkit";
import { LangParamProp } from "@/config/internationalization/i18n";
import AppHome from ".";

const App = ({
  locale,
  children,
}: {
  locale: LangParamProp;
  children: ReactNode;
}) => {
  const cookieOptions = {
    path: "/",
    expires: new Date(new Date().getTime() + 8 * 60 * 60 * 1000),
  };

  return (
    <CookiesProvider defaultSetOptions={cookieOptions}>
      <RainbowProvider>
        <ReduxProvider store={store}>
          <AppHome locale={locale}>{children}</AppHome>
        </ReduxProvider>
      </RainbowProvider>
    </CookiesProvider>
  );
};

export default App;

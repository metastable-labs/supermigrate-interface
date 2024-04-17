"use client";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

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
  return (
    <RainbowProvider>
      <ReduxProvider store={store}>
        <AppHome locale={locale}>{children}</AppHome>
      </ReduxProvider>
    </RainbowProvider>
  );
};

export default App;

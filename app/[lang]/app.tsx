"use client";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/application/store";
import RainbowProvider from "@/config/rainbow/rainbowkit";
import AppHome from ".";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <RainbowProvider>
      <ReduxProvider store={store}>
        <AppHome>{children}</AppHome>
      </ReduxProvider>
    </RainbowProvider>
  );
};

export default App;

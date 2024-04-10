"use client";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/application/store";
import AppHome from ".";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <AppHome>{children}</AppHome>
    </ReduxProvider>
  );
};

export default App;

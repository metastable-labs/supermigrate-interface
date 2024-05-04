"use client";
import { ReactNode, useEffect } from "react";

import { DesktopTilesIcon, MobileTilesIcon } from "@/public/icons";
import { Network } from "@/config/rainbow/config";

interface PageProps {
  params: { network: Network };
  children: ReactNode;
}

const defaultGradient =
  "linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #CCCCCC 100%)";

const networkBackgrounds: Record<Network, string> = {
  base: "linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #0052FF 100%)",
  optimism: "linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #FF1636 100%)",
  mode: "linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #CDFF00 100%)",
  scroll: "linear-gradient(180deg, #FFF 0%, #FCFCFC 43%, #F1C087 100%)",
  linea: defaultGradient,
  zora: defaultGradient,
  "world-chain": defaultGradient,
  degen: defaultGradient,
  pgn: defaultGradient,
};

const App = ({ params, children }: PageProps) => {
  useEffect(() => {
    const bgDiv = document.createElement("div");
    bgDiv.style.position = "fixed";
    bgDiv.style.top = "0";
    bgDiv.style.left = "0";
    bgDiv.style.width = "100vw";
    bgDiv.style.height = "100vh";
    bgDiv.style.backgroundImage = networkBackgrounds[params.network];
    bgDiv.style.backgroundSize = "cover";
    bgDiv.style.backgroundPosition = "center";
    bgDiv.style.zIndex = "-10";
    bgDiv.style.opacity = "0.1";
    bgDiv.style.transition = "background 300ms ease-in-out";
    bgDiv.style.pointerEvents = "none";

    document.body.appendChild(bgDiv);

    return () => {
      if (document.body.contains(bgDiv)) {
        document.body.removeChild(bgDiv);
      }
    };
  }, [params.network]);

  return (
    <main>
      {children}
      <div className="hidden md:flex justify-center fixed w-screen bottom-0 -z-10">
        <DesktopTilesIcon />
      </div>
      <div className="flex md:hidden justify-center fixed w-screen bottom-0 -z-10">
        <MobileTilesIcon />
      </div>
    </main>
  );
};

export default App;

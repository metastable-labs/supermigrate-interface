import { useEffect, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { SMButton } from "@/components";
import { Network } from "@/config/rainbow/rainbowkit";
import useSystemFunctions from "@/hooks/useSystemFunctions";

const Connect = ({ network }: { network: Network }) => {
  const { userState, pathname } = useSystemFunctions();
  const { loading, user } = userState;

  const [path, setPath] = useState("");

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=Iv1.c178abebc418bb02&redirect_uri=http://${path}`;
  console.log(githubAuthUrl);

  useEffect(() => {
    if (!window) return;

    const url = window.location.host + pathname;
    const regex = /(?<=\/)[a-z]{2}\//;
    const removeLanguagePath = url.replace(regex, "");

    setPath(removeLanguagePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence>
        {!user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "py-6 px-4 md:px-8 rounded-xl self-stretch flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[18px] md:gap-[10px]",
              {
                "bg-primary-750": network === "base",
                "bg-primary-800": network === "optimism",
                "bg-primary-850": network === "mode",
                "bg-primary-900": network === "scroll",
              }
            )}
          >
            <div className="flex-1 flex flex-col gap-[10px] md:gap-2 items-start">
              <h1
                className={classNames(
                  "text-[20px] leading-[30px] md:text-[24px] md:leading-[38px] font-medium",
                  {
                    "text-primary-650": network === "base",
                    "text-primary-1050": network === "optimism",
                    "text-primary-1150": network === "mode",
                    "text-primary-550": network === "scroll",
                  }
                )}
              >
                Please connect Github to continue
              </h1>
              <p
                className={classNames(
                  "text-sm md:text-base max-w-[399px] text-wrap",
                  {
                    "text-primary-1000": network === "base",
                    "text-primary-1100": network === "optimism",
                    "text-primary-1200": network === "mode",
                    "text-primary-1250": network === "scroll",
                  }
                )}
              >
                The Github account connected will be used to fork and create a
                PR on the Superchain token list repo
              </p>
            </div>

            <a href={githubAuthUrl} target="_blank" rel="noreferrer">
              <SMButton
                disabled={loading}
                network={network}
                text="connect github"
                variant="git"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Connect;

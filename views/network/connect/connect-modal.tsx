import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { SMModal, SMButton } from "@/components";
import { AccountIcon, AuthorizeIcon, BlueCheckMarkIcon } from "@/public/icons";
import { Network } from "@/components/button/types";

const ConnectModal = ({
  connectModalOpen,
  handleConnectModal,
  network,
}: {
  network: Network;
  connectModalOpen: boolean;
  handleConnectModal: () => void;
}) => {
  const [hasReadInstructions, setHasReadInstructions] = useState(false);

  const toggleReadInstructions = () => setHasReadInstructions((prev) => !prev);
  const connectToGithub = () => {};

  return (
    <SMModal
      show={connectModalOpen}
      close={handleConnectModal}
      variant="git-connect"
    >
      <div className="h-[92vh] bg-white overflow-auto">
        <div className="p-6 flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col items-start gap-9">
            <div className="flex flex-col items-start gap-3 flex-1">
              <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium">
                Connecting Github
              </h1>
              <p className="text-primary-1500 text-sm self-stretch">
                To connect your GitHub account to our platform and enable
                seamless integration, please follow these steps:
              </p>
            </div>

            <div className="max-w-[560px] flex flex-col gap-8 items-start">
              <div className="flex items-start gap-4 self-stretch">
                <AccountIcon />

                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <h1 className="text-primary-300 text-[18px] leading-[24px] font-medium">
                      Account Selection:
                    </h1>
                    <p className="self-stretch text-sm text-primary-1500">
                      Select your{" "}
                      <span className="font-bold">personal account</span>, not
                      individual organizations, to give the correct permission.
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-[8.065px] rounded-[8.065px] border-[3.226px] border-dashed border-primary-1950">
                    {/* <Image src="" alt="" width={} height={} /> */}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 self-stretch">
                <AuthorizeIcon />

                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <h1 className="text-primary-300 text-[18px] leading-[24px] font-medium">
                      Authorize Access:
                    </h1>
                    <p className="self-stretch text-sm text-primary-1500">
                      GitHub will ask for your permission to grant Base Migrate
                      access to your account. Select{" "}
                      <span className="font-bold">
                        all repositories and future repositories.
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-[8.065px] rounded-[8.065px] border-[3.226px] border-dashed border-primary-1950">
                    {/* <Image src="" alt="" width={} height={} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-2000 px-[25.61px] py-[20.51px] flex items-center justify-center max-w-[448px] rounded-[10px]">
            <p className="text-[14px] leading-[24px] text-primary-600">
              Please remember to disconnect your GitHub account from our
              platform after the migration process is complete or if you no
              longer wish to use our services.
            </p>
          </div>
        </div>

        <div className="flex flex-col self-stretch items-center justify-center px-5 py-4 gap-3 bg-white border-t border-primary-250">
          <SMButton
            onClick={connectToGithub}
            network={network}
            text="Connect Github"
            fullWidth
          />

          <div className="flex items-center justify-center gap-2">
            <AnimatePresence mode="popLayout">
              {hasReadInstructions ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={0}
                  onClick={toggleReadInstructions}
                  className="cursor-pointer"
                >
                  <BlueCheckMarkIcon />
                </motion.div>
              ) : (
                <motion.div
                  key={1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleReadInstructions}
                  className="w-5 h-[21px] bg-white border border-primary-1000 rounded cursor-pointer"
                />
              )}
            </AnimatePresence>
            <span className="text-sm tracking-[-0.084px] text-primary-50 font-medium">
              I have read all insructions
            </span>
          </div>
        </div>
      </div>
    </SMModal>
  );
};

export default ConnectModal;

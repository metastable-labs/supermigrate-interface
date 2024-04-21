import SMClickAnimation from "@/components/click-animation";
import { DisconnectIcon, CopyIcon } from "@/public/icons";

const WalletModal = ({ close }: { close: () => void }) => {
  const copyAction = () => {};
  const disconnectAction = () => {};
  return (
    <div className="flex items-center justify-center gap-3">
      <SMClickAnimation
        className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-xl"
        onClick={copyAction}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <CopyIcon />
          <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">
            Copy address
          </span>
        </div>
      </SMClickAnimation>

      <SMClickAnimation
        className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-xl"
        onClick={disconnectAction}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <DisconnectIcon />
          <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">
            Disconnect
          </span>
        </div>
      </SMClickAnimation>
    </div>
  );
};

export default WalletModal;

import SMClickAnimation from "@/components/click-animation";
import useTruncateText from "@/hooks/useTruncateText";
import { DisconnectIcon, CopyIcon } from "@/public/icons";

const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";

const WalletModal = ({ close }: { close: () => void }) => {
  const truncateWallet = useTruncateText(walletAddress, 6, 6);
  const copyAction = () => {};
  const disconnectAction = () => {};

  return (
    <div className="flex flex-col gap-6 min-w-[300px] md:min-w-80">
      <h1 className="text-[20px] leading-[30px] text-primary-1750 text-left font-medium">
        {truncateWallet}
      </h1>
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
    </div>
  );
};

export default WalletModal;

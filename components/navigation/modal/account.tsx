import SMClickAnimation from "@/components/click-animation";
import { DisconnectIcon } from "@/public/icons";

const AccountModal = ({ close }: { close: () => void }) => {
  const action = () => {};

  return (
    <SMClickAnimation
      className="flex-1 bg-primary-150 flex items-center justify-center p-3 rounded-xl"
      onClick={action}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <DisconnectIcon />
        <span className="text-primary-50 text-[14px] leading-[21.7px] font-medium text-center">
          Disconnect
        </span>
      </div>
    </SMClickAnimation>
  );
};

export default AccountModal;

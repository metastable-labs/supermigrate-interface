import { DoubleCheckIcon, MergedIcon } from "@/public/icons";
import { PullStatus } from "./types";

const Status = ({ status }: { status?: PullStatus }) => (
  <div className="h-full flex items-start justify-start gap-1">
    <div className="flex items-center justify-center gap-1 border-b border-b-primary-1650">
      <MergedIcon />
      <span className="text-[14px] leading-[20px] text-primary-1650 capitalize hidden md:block">
        {status}
      </span>
    </div>
    <DoubleCheckIcon />
  </div>
);

export default Status;

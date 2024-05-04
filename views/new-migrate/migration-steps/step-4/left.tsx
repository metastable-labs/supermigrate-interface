import useSystemFunctions from "@/hooks/useSystemFunctions";
import useTruncateText from "@/hooks/useTruncateText";
import {
  CopySecondaryIcon,
  LinkRightArrow,
  MergedSecondaryIcon,
  MergedTertiaryIcon,
} from "@/public/icons";

const Link = ({ link, text }: { link: string; text: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-1 border-b border-b-primary-3350 text-[16px] leading-[30px] text-primary-3350"
    >
      <MergedTertiaryIcon />
      {text}
    </a>
  );
};

const Left = () => {
  const { migrationState } = useSystemFunctions();
  const { migration } = migrationState;

  const pullRequestsLength = migration?.pull_requests?.length! - 1;
  const chainsLength = migration?.chains?.length! - 1;
  const title =
    migration?.pull_requests[pullRequestsLength].chain === "base"
      ? "based"
      : "super";
  const address = migration?.chains[chainsLength].token_address;
  const txHash = migration?.chains[chainsLength].transaction_hash;

  const truncateAddress = useTruncateText(address || "", 7, 4);

  const links = migration?.pull_requests?.map((pullRequest) => ({
    text:
      pullRequest.owner === "optimism" || pullRequest.owner === "iamnotstatic"
        ? "View Pull request on token list repo"
        : "View Pull request on Superbridge",
    link: pullRequest.url,
  }));

  return (
    <div className="w-full flex flex-col items-start justify-center gap-16 rounded-xl p-6 min-w-[343px] md:w-[400px]">
      <div className="flex flex-col self-stretch gap-3 items-start">
        <div className="p-3 bg-primary-3350 w-12 h-12 rounded-[10px] flex justify-center items-center shadow-sm">
          <MergedSecondaryIcon />
        </div>

        <div className="flex flex-col gap-5 self-stretch items-start">
          <h1 className="text-[30px] md:text-[36px] leading-[44px] font-medium tracking-[0.6px] md:tracking-[-0.72px] text-primary-300 whitespace-nowrap">
            Migration Successful!
          </h1>

          {links?.map((link, index) => (
            <Link key={index} link={link.link!} text={link.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 self-stretch">
        <h1 className="text-primary-200 text-[14px] leading-[28px]">
          Token Details
        </h1>

        <div className="flex items-center justify-center gap-2 text-primary-50 text-[16px] leading-[30px] font-medium">
          {truncateAddress}
          <CopySecondaryIcon />
        </div>

        <a
          href={`https://basescan.org/tx/${txHash}`}
          target="_blank"
          className="text-primary-3350 text-[16px] leading-[30px] flex items-center justify-center gap-2 pb-[3px] underline underline-offset-4"
        >
          View on basescan
          <LinkRightArrow color="#6B8000" />
        </a>
      </div>
    </div>
  );
};

export default Left;

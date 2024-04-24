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
      className="flex items-center gap-1 border-b border-b-primary-1650 text-[16px] leading-[30px] text-primary-1650"
    >
      <MergedTertiaryIcon />
      {text}
    </a>
  );
};

const Left = () => {
  const truncateAddress = useTruncateText(
    "0x1234567890123456789012345678901234567890",
    7,
    4
  );

  const links = [
    {
      link: "https://twitter.com/BaseMigrate",
      text: "View Pull request on token list repo",
    },
    {
      link: "https://twitter.com/BaseMigrate",
      text: "View Pull request on Superbridge",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-center gap-16 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:w-[325px]">
      <div className="flex flex-col self-stretch gap-3 items-start">
        <div className="p-3 bg-primary-2300 w-12 h-12 rounded-[10px] flex justify-center items-center shadow-sm">
          <MergedSecondaryIcon />
        </div>

        <div className="flex flex-col gap-5 self-stretch items-start">
          <h1 className="text-[24px] leading-[44px] font-medium tracking-[-0.48px] text-primary-300">
            {"You're almost"} <span className="text-primary-1650">based</span>!
            🔵
          </h1>

          {links.map((link, index) => (
            <Link key={index} link={link.link} text={link.text} />
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
          href="https://twitter.com/BaseMigrate"
          target="_blank"
          className="text-primary-1650 text-[16px] leading-[30px] underline flex items-center justify-center gap-2 pb-[3px]"
        >
          View on basescan
          <LinkRightArrow />
        </a>
      </div>
    </div>
  );
};

export default Left;

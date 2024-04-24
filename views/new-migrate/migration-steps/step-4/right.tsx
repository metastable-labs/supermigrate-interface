import { LinkRightArrow, MergedSecondaryIcon, XIcon } from "@/public/icons";
import { VerifyStepProps } from "./types";

const verifySteps: VerifyStepProps[] = [
  {
    text: "Make the tweet below from the account of the twitter URL you provided",
    variant: "x",
  },
  {
    text: "Go to the Pull requests and add a comment saying approved with a link to the tweet",
    variant: "git",
  },
];

const VerifyStep = ({ text, variant = "x" }: VerifyStepProps) => {
  return (
    <div className="self-stretch flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-start min-w-[320px] max-w-[560px]">
      <div className="p-3 bg-primary-2300 w-12 h-12 rounded-[10px] flex justify-center items-center shadow-sm">
        {variant === "git" ? <MergedSecondaryIcon /> : <XIcon />}
      </div>
      <p className="flex flex-col items-start justify-center gap-2 self-stretch">
        <span className="text-primary-1500 text-[14px] leading-[21px]">
          {text}
        </span>
        {variant === "x" && (
          <a
            href="https://twitter.com/BaseMigrate"
            target="_blank"
            className="text-primary-1650 text-[14px] leading-[18.2px] tracking-[-0.14px] underline flex items-center justify-center gap-2 pb-[3px]"
          >
            Verifying migration on @supermigrate
            <LinkRightArrow />
          </a>
        )}
      </p>
    </div>
  );
};

const Right = () => (
  <div className="flex flex-col item-center gap-11 min-w-[343px] lg:w-[556px]">
    <p className="self-stretch flex flex-col items-start gap-3 md:gap-[10px] md:px-8">
      <span className="text-primary-300 text-[24px] leading-[36px] md:leading-[44px] tracking-[-0.48px] font-medium">
        Verifying Migration
      </span>
      <span className="text-primary-1500 text-sm md:text-[16px] md:leading-[30px]">
        Please follow these steps to verify migration:
      </span>
    </p>
    <div className="max-w-[560px] flex-1 flex flex-col items-start gap-9 md:px-8">
      {verifySteps.map((step, index) => (
        <VerifyStep key={index} text={step.text} variant={step.variant} />
      ))}
    </div>
    <div className="bg-white rounded-tl-[10px] rounded-tr-[10px]">
      <div className="bg-primary-2000 px-[25.61px] py-[20.51px] flex items-center justify-center rounded-[10px]">
        <p className="text-[14px] leading-[24px] text-primary-600 lg:min-w-[467px] lg:px-4">
          After the automated checks pass and a reviewer approves the PR, then
          it will automatically be merged.
        </p>
      </div>
    </div>
  </div>
);
export default Right;

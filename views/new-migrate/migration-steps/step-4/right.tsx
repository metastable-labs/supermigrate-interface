import { LinkRightArrow, MergedSecondaryIcon, XIcon } from '@/public/icons';
import { VerifyStepProps } from './types';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const twitterUrl = `https://twitter.com/intent/tweet?text=@supermigrate`;

const VerifyStep = ({ text, variant = 'x' }: VerifyStepProps) => {
  const { locale } = useSystemFunctions();
  const { linkText } = locale.newMigration.step4.right;
  return (
    <div className="self-stretch flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-start min-w-[320px] max-w-[560px]">
      <div className="p-3 bg-primary-150 w-12 h-12 rounded-[10px] flex justify-center items-center shadow-sm">{variant === 'git' ? <MergedSecondaryIcon color="#31353F" /> : <XIcon />}</div>
      <p className="flex flex-col items-start justify-center gap-2 self-stretch">
        <span className="text-primary-1500 text-[14px] leading-[21px]">{text}</span>
        {variant === 'x' && (
          <a
            href={twitterUrl}
            target="_blank"
            className="text-primary-3350 text-[14px] leading-[18.2px] tracking-[-0.14px] underline underline-offset-4 flex items-center justify-center gap-2 pb-[3px]">
            {linkText}
            <LinkRightArrow color="#6B8000" />
          </a>
        )}
      </p>
    </div>
  );
};

const Right = () => {
  const { locale } = useSystemFunctions();
  const { gitText, subtitle, title, xText } = locale.newMigration.step4.right;

  const verifySteps: VerifyStepProps[] = [
    {
      text: xText,
      variant: 'x',
    },
    {
      text: gitText,
      variant: 'git',
    },
  ];

  return (
    <div className="flex flex-col item-center gap-11 min-w-[343px] lg:w-[556px] py-[50px] px-5 md:px-0 border border-primary-1350 rounded-base shadow-table-cta bg-white">
      <p className="self-stretch flex flex-col items-start gap-3 md:gap-[10px] md:px-8">
        <span className="text-primary-300 text-[24px] leading-[36px] md:leading-[44px] tracking-[-0.48px] font-medium">{title}</span>
        <span className="text-primary-1500 text-sm md:text-[16px] md:leading-[30px]">{subtitle}</span>
      </p>
      <div className="max-w-[560px] flex-1 flex flex-col items-start gap-9 md:px-8">
        {verifySteps.map((step, index) => (
          <VerifyStep key={index} text={step.text} variant={step.variant} />
        ))}
      </div>
    </div>
  );
};
export default Right;

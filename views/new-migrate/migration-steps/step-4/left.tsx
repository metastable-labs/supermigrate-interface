import { SMClickAnimation } from '@/components';
import { networks } from '@/config/rainbow/config';
import useCopy from '@/hooks/useCopy';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import useTruncateText from '@/hooks/useTruncateText';
import { CopySecondaryIcon, LinkRightArrow, MergedSecondaryIcon, MergedTertiaryIcon } from '@/public/icons';
import { getScanLink } from '@/utils/helpers';
import { useChainId } from 'wagmi';

const Link = ({ link, text }: { link: string; text: string }) => {
  return (
    <a href={link} target="_blank" className="flex items-center gap-1 border-b border-b-primary-3350 text-[16px] leading-[30px] text-primary-3350">
      <MergedTertiaryIcon />
      {text}
    </a>
  );
};

const Left = () => {
  const copy = useCopy();
  const { migrationState, locale } = useSystemFunctions();
  const chainId = useChainId();
  const { migration } = migrationState;
  const { linkTexts, subtitle, title, viewOn } = locale.newMigration.step4.left;

  const chainsLength = migration?.chains?.length! - 1;
  const address = migration?.chains[chainsLength].token_address;

  const { truncatedText } = useTruncateText(address || '', 7, 4);

  const currentNetwork = networks.find((network) => network.chainId === chainId);

  const links = migration?.pull_requests
    ?.filter((pullRequest) => pullRequest.chain === currentNetwork?.variant)
    .map((pullRequest) => ({
      text: pullRequest.owner === 'optimism' || pullRequest.owner === 'iamnotstatic' ? linkTexts.primary : linkTexts.secondary,
      link: pullRequest.url,
    }));

  // filter chains and retrurn only the ones that are not on chain id 1
  const hashes = migration?.chains
    ?.filter((chain) => chain.id === chainId)
    .map((chain) => ({
      urlText: `${viewOn} ${chain.name}scan`,
      url: getScanLink(chain.id, chain.transaction_hash),
    }));

  return (
    <div className="w-full flex flex-col items-start justify-center gap-16 rounded-xl p-6 min-w-[343px] md:w-[400px]">
      <div className="flex flex-col self-stretch gap-3 items-start">
        <div className="p-3 bg-primary-3350 w-12 h-12 rounded-[10px] flex justify-center items-center shadow-sm">
          <MergedSecondaryIcon />
        </div>

        <div className="flex flex-col gap-5 self-stretch items-start">
          <h1 className="text-[30px] md:text-[36px] leading-[44px] font-medium tracking-[0.6px] md:tracking-[-0.72px] text-primary-300 whitespace-nowrap">{title}</h1>

          {links?.map((link, index) => (
            <Link key={index} link={link.link!} text={link.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 self-stretch">
        <h1 className="text-primary-200 text-[14px] leading-[28px]">{subtitle}</h1>

        <SMClickAnimation onClick={() => copy(address!)} className="flex items-center justify-center gap-2 text-primary-50 text-[16px] leading-[30px] font-medium">
          {truncatedText}
          <CopySecondaryIcon />
        </SMClickAnimation>

        {hashes?.map((hash, index) => (
          <a key={index} href={hash.url} target="_blank" className="text-primary-3350 text-[16px] leading-[30px] flex items-center justify-center gap-2 pb-[3px] underline underline-offset-4">
            {hash.urlText}
            <LinkRightArrow color="#6B8000" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Left;

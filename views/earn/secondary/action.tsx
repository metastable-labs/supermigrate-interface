import { SMButton } from '@/components';
import { ActionProps, Badge, BadgeVariant } from './types';
import { WarningIcon, MigrateLinkIcon, FlashIcon } from '@/public/icons';
import classNames from 'classnames';
import useTruncateText from '@/hooks/useTruncateText';

const getIconColor = (variant?: BadgeVariant) => {
  switch (variant) {
    case 'mint':
      return '#176448';
    case 'plain':
      return '#525866';
    case 'tertiary':
      return '#693D11';
    case 'secondary':
      return '#620F6C';
    case 'primary':
      return '#164564';
  }
};

const BadgeComponent = ({ text, type, variant, mobileText }: Badge) => (
  <div
    className={classNames('py-1 pl-1 pr-2 flex  items-center gap-0.5 rounded-full text-xs md:text-[14px] md:leading-[21px] font-medium', {
      'text-primary-4650 bg-primary-4700': variant === 'mint',
      'text-primary-200 bg-primary-150': variant === 'plain',
      'text-primary-2650 bg-primary-4550': variant === 'tertiary',
      'text-primary-4750 bg-primary-4800': variant === 'secondary',
      'text-primary-4850 bg-primary-4900': variant === 'primary',
    })}>
    {type === 'primary' && (
      <div className="min-w-fit">
        <FlashIcon color={getIconColor(variant)} />
      </div>
    )}
    {type === 'secondary' && (
      <div className="min-w-fit">
        <MigrateLinkIcon color={getIconColor(variant)} width={16} height={17} />
      </div>
    )}
    <p className="block md:hidden">{mobileText}</p>
    <p className="hidden md:block">{text}</p>
  </div>
);

const Action = ({ action, buttonText, icon, subtitle, title, badges, hasWarning, titleAlt, titleBadge, mobileTitle }: ActionProps) => {
  const { truncatedText } = useTruncateText(title, 11, 5);
  const truncateTitle = title.length > 22;
  return (
    <div className="self-stretch rounded-base bg-white border border-primary-3450 py-6 px-4 md:p-6 flex-1 flex flex-col gap-10 items-stretch justify-center md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-start space-x-5">
          {icon && icon}
          <div className="flex flex-col space-y-3">
            <div className="flex items-start justify-start space-x-3">
              <div
                className={classNames('text-lg', {
                  'md:text-[20px] md:leading-[30px] text-primary-3400 tracking-[-0.4px] font-Bitform': !titleAlt,
                  'md:text-[20px] md:leading-[38px] text-primary-300 font-Bitform': titleAlt,
                })}>
                <p className="block lg:hidden">{mobileTitle ? mobileTitle : truncateTitle ? truncatedText : title}</p>
                <p className="hidden lg:block">{title}</p>
                {titleAlt && <p className="text-primary-350 text-base font-Aeonik"> {titleAlt}</p>}
              </div>

              {titleBadge && <BadgeComponent {...titleBadge} />}
            </div>

            {subtitle && <p className="text-sm md:text-base text-primary-350">{subtitle}</p>}
          </div>
        </div>

        {Boolean(badges) && (
          <div className="flex items-center gap-3.5 flex-wrap self-stretch">
            {badges?.map((badge, index) => (
              <BadgeComponent {...badge} key={index} />
            ))}
          </div>
        )}

        {hasWarning && (
          <div className="py-3 px-4 md:px-6 flex items-center justify-center gap-1 self-stretch bg-primary-4300 rounded-xl text-primary-3400 text-xs md:text-[14px] md:leading-[21px] w-fit">
            <div className="min-w-fit">
              <WarningIcon />
            </div>
            Bridging rewards will be earned retroactively and points will become available every 2 weeks after snapshots have been taken.
          </div>
        )}
      </div>

      <div className="md:w-[140px]">
        <SMButton variant="tertiary" text={buttonText} type="submit" fullWidth onClick={action} />
      </div>
    </div>
  );
};

export default Action;

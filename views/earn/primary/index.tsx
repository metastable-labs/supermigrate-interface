import useScreenDetect from '@/hooks/useScreenDetect';
import { EarnAnnouncement } from '@/public/icons';
import Action from './action';
import { ActionVariant } from './types';

const actions = [
  {
    variant: 'wallet' as ActionVariant,
    action: () => console.log('wallet'),
  },
  {
    variant: 'code' as ActionVariant,
    action: (value?: string) => console.log(value),
  },
  {
    variant: 'x' as ActionVariant,
    action: () => console.log('x'),
  },
];

const Primary = () => {
  const { isMobile } = useScreenDetect();
  return (
    <div className="min-w-full flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:pl-[40.5px] bg-white rounded-base border border-primary-3450 w-fit md:w-full gap-[64.5px]">
        <div className="py-[39px] flex flex-col items-start justify-start min-h-full flex-1 px-5 md:px-0 gap-3.5">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-primary-300 text-[24px] leading-[36px] tracking-[-0.48px]">Start earning with Supermigrate</h1>
            <span className="text-primary-350 text-[16px] leading-[30px]">Please follow these steps to continue to Earn:</span>
          </div>

          <div className="flex flex-col gap-[13px] w-full">
            {actions.map((action, index) => (
              <div key={index} className="flex items-center justify-center px-3 py-4 w-full">
                <Action {...action} index={index} />
              </div>
            ))}
          </div>
        </div>

        <EarnAnnouncement width={isMobile ? 350 : 474} height={isMobile ? 395 : 536} />
      </div>
    </div>
  );
};

export default Primary;

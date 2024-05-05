import { SMContainer } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { EasyIcon, EarnIcon, FastIcon, ForwardIcon } from '@/public/icons';

const SectionOne = () => {
  const { locale } = useSystemFunctions();
  const { landingPage } = locale;
  const { first, second, third, title, titleCont } = landingPage.section1;

  const listings = [
    {
      title: first.title,
      description: first.content,
      icon: <EasyIcon />,
    },
    {
      title: second.title,
      description: second.content,
      icon: <FastIcon />,
    },
    {
      title: third.title,
      description: third.content,
      icon: <EarnIcon />,
    },
  ];

  return (
    <SMContainer>
      <section id="about" className="py-[58px] lg:py-[72px] flex flex-col items-stretch gap-12 lg:gap-16">
        <div className="flex flex-col gap-12 lg:gap-16 min-w-full">
          <h1 className="text-left text-[30px] lg:text-[44px] text-black tracking-[0.44px]">
            {title} <br className="hidden lg:block" />
            {titleCont}
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-stretch">
          {listings?.map((item, index) => (
            <div key={item?.title} className="pt-5 pr-[43px] pl-11 h-[438px] rounded-base border border-primary-250 bg-primary-3500 relative">
              <div className="w-full pb-[22px] flex items-center justify-center gap-2.5">
                <span className="text-primary-2050 text-[14px] leading-[18.2px] tracking-[0.14px]">0{index + 1}</span>
                <div className="flex-1 h-[1px] bg-primary-2050" />
                <ForwardIcon />
              </div>
              <h1 className="text-[20px] leading-[39.24px] lg:text-[24px] lg:leading-[43.244px] text-xl font-medium text-white">{item?.title}</h1>
              <h2 className="text-primary-3550 text-sm lg:text-lg">{item?.description}</h2>

              <div className="absolute bottom-0 left-0 flex items-center justify-center w-full">{item?.icon}</div>
            </div>
          ))}
        </div>
      </section>
    </SMContainer>
  );
};

export default SectionOne;

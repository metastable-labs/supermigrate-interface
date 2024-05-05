import { SMContainer } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const SectionOne = () => {
  const { locale } = useSystemFunctions();
  const { landingPage } = locale;
  const { first, second, third, title, titleCont } = landingPage.section1;

  const listings = [
    {
      title: first.title,
      description: first.content,
    },
    {
      title: second.title,
      description: second.content,
    },
    {
      title: third.title,
      description: third.content,
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
          {listings?.map((item) => (
            <div key={item?.title} className="py-[42px] pr-[43px] pl-11 h-[438px] rounded-base border border-primary-250 bg-primary-3500">
              <h1 className="text-[20px] leading-[39.24px] lg:text-[24px] lg:leading-[43.244px] text-xl font-medium text-white">{item?.title}</h1>
              <h2 className="text-primary-3550 text-sm lg:text-lg">{item?.description}</h2>
            </div>
          ))}
        </div>
      </section>
    </SMContainer>
  );
};

export default SectionOne;

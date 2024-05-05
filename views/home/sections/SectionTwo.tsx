import Link from 'next/link';
import classNames from 'classnames';

import useSystemFunctions from '@/hooks/useSystemFunctions';

const SectionTwo = () => {
  const { locale } = useSystemFunctions();
  const { landingPage } = locale;
  const { first, second, third, title } = landingPage.section2;

  const listings = [
    {
      action: first.actionText,
      title: first.title,
      content: first.content,
      link: '/migrate',
    },
    {
      action: second.actionText,
      title: second.title,
      content: second.content,
      link: '/bridge',
    },
    {
      action: third.actionText,
      title: third.title,
      content: third.content,
      link: '/liquidity',
    },
  ];

  return (
    <section id="about" className="pt-[50px] lg:pt-[50px] flex flex-col items-stretch gap-12 lg:gap-16">
      <div className="flex flex-col gap-12 lg:gap-16 min-w-full">
        <h1 className="text-left text-[30px] lg:text-[44px] text-black tracking-[0.44px] px-6 lg:px-20">Everything, all in one place</h1>

        <div className="px-[30px] pb-20 lg:pb-[100px] flex flex-col items-stretch justify-center gap-12 lg:gap-16">
          {listings.map((item, index) => (
            <div
              key={index}
              className={classNames('p-6 lg:p-[50px] rounded-base flex flex-col justify-center items-start gap-16 lg:gap-[94px]', {
                'bg-primary-3450': index === 0,
                'bg-primary-3400': index === 1,
                'bg-primary-3250': index === 2,
              })}>
              <div className="flex flex-col items-start justify-center gap-4">
                <Link
                  href={item.link}
                  className={classNames('px-3.5 py-2.5 text-[16px] leading-none rounded-lg', {
                    'text-white bg-primary-3400': index === 0,
                    'text-primary-3400 bg-primary-3600': index === 1,
                    'text-primary-3250 bg-primary-3600': index === 2,
                  })}>
                  {item.action}
                </Link>

                <h2
                  className={classNames('text-[20px] leading-[30px] lg:text-[30px] lg:leading-[39px] tracking-[-0.3px]', {
                    'text-primary-3400': index === 0,
                    'text-primary-3600': index === 1 || index === 2,
                  })}>
                  {item.title}
                </h2>

                <p
                  className={classNames('text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]', {
                    'max-w-[689px] text-primary-3400': index === 0,
                    'max-w-[599px] text-primary-3800': index === 1,
                    'text-primary-3600': index === 2,
                  })}>
                  {item.content}
                </p>
              </div>
              <div>GIF goes here</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

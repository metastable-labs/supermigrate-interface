import { SMContainer } from '@/components';
import React from 'react';

const SectionOne = () => {
  const listings = [
    {
      title: 'Easy',
      description: 'whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy',
    },
    {
      title: 'Fast',
      description: 'Never loose a sleep, fully automated process.',
    },
    {
      title: 'Earn',
      description: 'Earn rewards and Incentives for getting on L2s',
    },
  ];
  return (
    <SMContainer>
      <section id="about" className="py-[58px] lg:py-[72px] flex flex-col items-stretch gap-12 lg:gap-16">
        <div className="flex flex-col gap-12 lg:gap-16 min-w-full">
          <h1 className="text-left text-[30px] lg:text-[44px] text-black tracking-[0.44px]">
            Streamlined and easy migration <br className="hidden lg:block" />
            to Layer 2 Networks
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

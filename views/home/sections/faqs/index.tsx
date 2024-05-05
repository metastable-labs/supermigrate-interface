'use client';
import { useState } from 'react';

import { SMContainer, SMFAQ } from '@/components';
import { LinkRightArrow } from '@/public/icons';
import { faqs } from './dummy';

const FAQs = () => {
  const [current, setCurrent] = useState(0);

  return (
    <SMContainer>
      <section id="faq" className="py-[58px] lg:py-24 mt-14 lg:mt-24 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="self-stretch flex flex-col gap-5">
            <h3 className="text-[24px] leading-[44px] lg:text-[36px] text-primary-300 tracking-[-0.48px] md:tracking-[-0.72px]">Frequently Asked Questions</h3>

            <h4 className="text-sm leading-normal lg:text-lg text-primary-350">
              Everything you need to know about Supermigrate and . Can’t find the answer you’re looking for?{' '}
              <a href="" className="text-primary-3350 underline underline-offset-2">
                See our Support page
              </a>
            </h4>
          </div>

          <div className="flex flex-col gap-4 items-start">
            {faqs.map(({ answer, question }, index) => (
              <SMFAQ key={index} question={question} answer={answer} current={current === index} onClick={() => setCurrent(index)} />
            ))}

            <a href="" className="px-8 py-6 self-stretch flex items-center justify-start gap-1 text-left rounded-2xl min-w-full text-primary-3350 text-lg font-medium">
              See more FAQ <LinkRightArrow color="#6B8000" width={24} height={24} />
            </a>
          </div>
        </div>
      </section>
    </SMContainer>
  );
};

export default FAQs;

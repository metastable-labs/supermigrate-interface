'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { SMClickAnimation, SMContainer, SMFAQ } from '@/components';
import { LinkRightArrow } from '@/public/icons';
import { faqs } from './data';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const FAQs = () => {
  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const { locale } = useSystemFunctions();
  const { landingPage } = locale;

  const { question1, question2, question3, question4, question5, question6, subtitle, supportText, title, seeMore, seeLess } = landingPage.faq;

  const faqs = [
    {
      question: question1.question,
      answer: question1.answer,
    },
    {
      question: question2.question,
      answer: question2.answer,
    },
    {
      question: question3.question,
      answer: question3.answer,
    },
    {
      question: question4.question,
      answer: question4.answer,
    },
    {
      question: question5.question,
      answer: question5.answer,
    },
    {
      question: question6.question,
      answer: question6.answer,
    },
  ];

  return (
    <SMContainer>
      <section id="faq" className="py-[58px] lg:py-24 mt-14 lg:mt-24 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="self-stretch flex flex-col gap-5">
            <h3 className="font-Bitform text-[24px] leading-[44px] lg:text-[36px] text-primary-300 tracking-[-0.48px] md:tracking-[-0.72px]">{title}</h3>

            <h4 className="text-sm leading-normal lg:text-lg text-primary-350">
              {subtitle}{' '}
              <a href="" className="text-primary-3350 underline underline-offset-2">
                {supportText}
              </a>
            </h4>
          </div>

          <div className="flex flex-col gap-4 items-start">
            {faqs.slice(0, showMore ? faqs.length : 4).map(({ answer, question }, index) => (
              <SMFAQ key={index} question={question} answer={answer} current={current === index} onClick={() => setCurrent(index)} />
            ))}

            <div
              onClick={() => setShowMore(!showMore)}
              className="font-Bitform px-8 py-6 self-stretch flex items-center justify-start gap-1 text-left rounded-2xl min-w-full text-primary-3350 text-lg font-medium cursor-pointer">
              {showMore ? seeLess : seeMore}{' '}
              <motion.div initial={{ rotate: 115 }} animate={{ rotate: showMore ? 315 : 135 }} transition={{ duration: 0.3 }} className="flex items-center justify-center">
                <LinkRightArrow color="#6B8000" width={24} height={24} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SMContainer>
  );
};

export default FAQs;

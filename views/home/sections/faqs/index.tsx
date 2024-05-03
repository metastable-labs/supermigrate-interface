"use client";
import { useState } from "react";

import { faqs } from "./dummy";
import { SMFAQ } from "@/components";
import { LinkRightArrow } from "@/public/icons";

const FAQs = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="faq" className="mt-[58px] lg:mt-[96px] lg:mb-[96px]">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="self-stretch">
          <h3 className="text-[24px] leading-[44px] md:text-[36px] text-primary-300 font-medium tracking-[-0.48px] md:tracking-[-0.72px]">
            Frequently Asked Questions
          </h3>

          <h4 className="text-sm leading-normal md:text-lg text-[#475467]">
            Everything you need to know about Supermigrate and . Can’t find the
            answer you’re looking for?{" "}
            <a
              href=""
              className="text-primary-2450 underline underline-offset-2"
            >
              See our Support page
            </a>
          </h4>
        </div>

        <div className="flex flex-col gap-4 items-start">
          {faqs.map(({ answer, question }, index) => (
            <SMFAQ
              key={index}
              question={question}
              answer={answer}
              current={current === index}
              onClick={() => setCurrent(index)}
            />
          ))}

          <a
            href=""
            className="px-8 py-6 self-stretch flex items-center justify-start gap-1 text-left rounded-2xl min-w-full text-primary-2450 text-lg font-medium"
          >
            See more FAQ{" "}
            <LinkRightArrow color="#C2540A" width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

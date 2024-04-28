import { cn } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const FAQListing = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  return (
    <div
      className={cn("px-8 py-6", {
        "!bg-[#F9FAFB] rounded-2xl": displayAnswer
      })}
    >
      <div
        className="flex items-center justify-between gap-4 cursor-pointer"
        onClick={() => setDisplayAnswer(!displayAnswer)}
      >
        <h1 className="text-[#101828] lg:text-lg font-medium">{question}</h1>

        <div className="w-6 h-6 relative">
          <Image
            className=""
            layout="fill"
            src={
              displayAnswer
                ? "https://res.cloudinary.com/palmlight/image/upload/v1714329758/subtract-line_n4v7na.svg"
                : "https://res.cloudinary.com/palmlight/image/upload/v1714329758/add-line_qhzbjk.svg"
            }
            alt=""
          />
        </div>
      </div>
      <AnimatePresence>
        {displayAnswer && (
          <motion.p
            animate={{ y: 0 }}
            initial={{ y: -10 }}
            exit={{ y: -5 }}
            className="mr-8 mt-2 text-sm lg:text-base text-[#475467]"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const FaqList = [
    {
      question: "How do I start a migration process",
      answer:
        "whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy"
    },
    {
      question: "Can I create new tokens on Supermigrate?",
      answer:
        "whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy"
    },
    {
      question: "Can I bridge my migrated tokens?",
      answer:
        "whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy"
    },
    {
      question: "How can I properly connect GitHub",
      answer:
        "whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy"
    }
  ];
  return (
    <section className="mt-[58px] lg:mt-[96px] lg:mb-[96px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16">
        <div className="mb-16 lg:mb-0">
          <h3 className="text-2xl lg:text-[36px] text-[#101828] font-medium mb-2 lg:mb-5">
            Frequently Asked Questions
          </h3>
          <h4 className="text-sm leading-normal lg:text-lg text-[#475467]">
            Everything you need to know about Supermigrate and . Can’t find the
            answer you’re looking for?{" "}
            <span className="text-[#C2540A]">See our Support page</span>
          </h4>
        </div>

        <div className="">
          <div className="space-y-4">
            {FaqList?.map(faq => (
              <FAQListing {...faq} key={faq.question} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

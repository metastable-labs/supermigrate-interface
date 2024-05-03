import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const SectionFour = () => {
  const listings = [
    {
      title: "Easy",
      description:
        "whether you're new to L2s, or you don't have a technical team. Supermigrate makes it easy",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165543/easy_u1uz3f.svg",
      bgColor: "bg-[#FDF9FD]"
    },
    {
      title: "Fast",
      description: "Never loose a sleep, fully automated process.",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165547/fast_l0pin3.svg",
      bgColor: "bg-[#F4F6FB]"
    },
    {
      title: "Earn",
      description: "Earn rewards and Incentives for getting on L2s",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165542/earn_bojc0h.svg",
      bgColor: "bg-[#FCFFFE]"
    }
  ];
  return (
    <section className="bg-[#EBF1FF] py-6 lg:py-[50px] px-4 lg:px-[50px] rounded-xl mb-8 lg:mb-16">
      <h2 className="w-[80px] lg:w-[90px] py-2.5 text-sm lg:text-base bg-[#162664] rounded-lg text-center text-[#EBF1FF] shadow-[0px_1.544px_3.089px_0px_rgba(164,172,185,0.24),0px_0px_0px_1.544px_rgba(18,55,105,0.08)]">
        Liquidity
      </h2>
      <h3 className="my-4 text-[20px] lg:text-[46px] text-[#162664] font-medium lg:w-[550px] w-full">
        Add Liquidity for newly deployed tokens
      </h3>
      <p className="leading-relaxed w-full lg:w-[550px] text-[#717184] text-sm lg:text-[18px]">
        An interface that makes it easy for people to provide liquidity for any
        recently migrated tokens on L2 and get incentivised for doing that.
      </p>
      <div className="mt-8 lg:mt-[90px] grid lg:grid-cols-3 grid-cols-1 gap-10 items-stretch w-full">
        {listings?.map(item => (
          <div
            key={item?.title}
            className={cn(
              "flex flex-col border border-primary-250 rounded-xl bg-[#FDF9FD]",
              item?.bgColor
            )}
          >
            <div className="pt-6 lg:pt-10 pb-10 px-4 lg:px-[30px]">
              <h1 className="lg:text-2xl text-xl font-medium">{item?.title}</h1>
              <h2 className="mt-2 text-[#666D80] text-sm lg:text-lg">
                {item?.description}
              </h2>
            </div>

            <div className="w-full px-5">
              <Image
                src={item?.image}
                alt={item?.title}
                className="mt-auto"
                width={400}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;

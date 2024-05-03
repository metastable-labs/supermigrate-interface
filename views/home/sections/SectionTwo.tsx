import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  const listings = [
    {
      title: "Easy",
      description:
        "whether you're new to L2s, or you don't have a technical team. Supermigrate makes it easy",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165543/easy_u1uz3f.svg",
      bgColor: "bg-[#FDF9FD]",
    },
    {
      title: "Fast",
      description: "Never loose a sleep, fully automated process.",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165547/fast_l0pin3.svg",
      bgColor: "bg-[#F4F6FB]",
    },
    {
      title: "Earn",
      description: "Earn rewards and Incentives for getting on L2s",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714165542/earn_bojc0h.svg",
      bgColor: "bg-[#FCFFFE]",
    },
  ];
  return (
    <section id="whitepaper">
      <h1 className="text-center text-[24px] lg:text-[46px] font-medium mt-[24px] lg:mt-[50px]">
        Everything, all in one place
      </h1>

      <section className="my-8 lg:my-16 bg-[#FEF3EB] py-6 lg:py-[50px] rounded-xl px-4 lg:px-[50px]">
        <h2 className="text-[#FEF3EB] text-xs lg:text-base bg-[#6E330C] w-[80px] lg:w-[100px] px-[14px] py-[10px] rounded-lg text-center shadow-[0px_1.544px_3.089px_0px_rgba(164,172,185,0.24),0px_0px_0px_1.544px_rgba(18,55,105,0.08)]">
          Migration
        </h2>
        <div className="lg:w-[600px] w-full">
          <h1 className="py-4 font-medium text-[20px] lg:text-[46px] text-[#6E330C] tracking-tight leading-tight">
            Deploy canonical bridged tokens
          </h1>
          <h2 className="text-[#717184] text-sm lg:text-[18px] leading-relaxed w-full lg:w-[500px]">
            We&apos;re providing a straightforward process for users to deploy
            their ERC20 tokens on L2 networks that automatically makes it
            bridgable.
          </h2>
        </div>
        <div className="mt-8 lg:mt-[90px] grid lg:grid-cols-3 grid-cols-1 gap-10 items-stretch w-full">
          {listings?.map((item) => (
            <div
              key={item?.title}
              className={cn(
                "flex flex-col border border-primary-250 rounded-xl bg-[#FDF9FD]",
                item?.bgColor
              )}
            >
              <div className="pt-6 lg:pt-10 pb-10 px-4 lg:px-[30px]">
                <h1 className="lg:text-2xl text-xl font-medium">
                  {item?.title}
                </h1>
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
    </section>
  );
};

export default SectionTwo;

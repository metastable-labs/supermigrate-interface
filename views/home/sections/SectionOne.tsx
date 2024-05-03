import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const SectionOne = () => {
  const listings = [
    {
      title: "Easy",
      description:
        "whether you’re new to L2s, or you don’t have a technical team. Supermigrate makes it easy",
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
    <section id="about" className="py-[58px] lg:py-[72px]">
      <h1 className="text-center text-[24px] lg:text-[46px] font-medium mb-8 lg:mb-[90px]">
        Streamlined and easy migration <br className="hidden lg:block" />
        to Layer 2 Networks
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-stretch">
        {listings?.map((item) => (
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

export default SectionOne;

import Image from "next/image";
import Marquee from "react-fast-marquee";

import { testimonials } from "./dummy";
import { SMTestimonial } from "@/components";
import { ISMTestimonial } from "@/components/testimonial/types";

const marqueeContent = (items: ISMTestimonial[]) => {
  return (
    <div className="flex items-stretch justify-between">
      {items.map((testimonial, index) => (
        <SMTestimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[46px] lg:leading-[59.8px] lg:tracking-[-0.46px] text-[24px] leading-[31.2px] tracking-[-0.24px] font-medium text-black">
          Real stuff, from actual people
        </h1>

        <div className="hidden lg:flex items-center gap-4">
          <div className="rounded-lg shadow-[0px_1.544px_3.089px_0px_rgba(164,172,185,0.24),0px_0px_0px_1.544px_rgba(18,55,105,0.08)] px-3 py-2 flex gap-3">
            <Image
              src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg"
              alt="twitter"
              width={24}
              height={24}
            />

            <div className="flex items-center gap-2">
              <h2 className="lg:text-base text-xs">Follow Supermigrate</h2>
              <Image
                height={24}
                width={24}
                alt="caret"
                src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/arrow-right-up-line_kxleei.svg"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-[0px_1.544px_3.089px_0px_rgba(164,172,185,0.24),0px_0px_0px_1.544px_rgba(18,55,105,0.08)] px-3 py-2 flex gap-3">
            <Image
              src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/telegram_qmowq3.svg"
              alt="twitter"
              width={24}
              height={24}
            />

            <div className="flex items-center gap-2">
              <h2 className="lg:text-base text-xs">Join community</h2>
              <Image
                height={24}
                width={24}
                alt="caret"
                src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/arrow-right-up-line_kxleei.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[30px] lg:mt-[56px] flex flex-col gap-[30px]">
        {testimonials.length > 8 ? (
          <>
            <Marquee direction="left" gradient speed={75} pauseOnHover>
              {marqueeContent(firstHalf)}
            </Marquee>
            <Marquee direction="right" gradient speed={75} pauseOnHover>
              {marqueeContent(secondHalf)}
            </Marquee>
          </>
        ) : (
          <Marquee direction="left" gradient speed={75} pauseOnHover>
            {marqueeContent(testimonials)}
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

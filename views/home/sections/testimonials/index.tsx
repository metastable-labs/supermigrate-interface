import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { testimonials } from './dummy';
import { SMTestimonial } from '@/components';
import { ISMTestimonial } from '@/components/testimonial/types';
import { LinkRightArrow } from '@/public/icons';

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
        <h1 className="lg:text-[46px] lg:leading-[59.8px] lg:tracking-[-0.46px] text-[24px] leading-[31.2px] tracking-[-0.24px] font-medium text-black">Real stuff, from actual people</h1>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" target="_blank" className="rounded-lg shadow-very-light-gray px-3 py-2 flex items-center justify-center gap-0 min-w-fit">
            <Image
              src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg"
              alt="twitter"
              width={24}
              height={24}
              className="flex items-center justify-center lg:mx-3 lg:my-2"
            />

            <div className="flex items-center justify-center gap-2">
              <h2 className="lg:text-base text-xs whitespace-nowrap">Follow Supermigrate</h2>

              <LinkRightArrow color="#0A0D14" width={24} height={24} />
            </div>
          </a>

          <a href="#" target="_blank" className="rounded-lg shadow-very-light-gray px-3 py-2 flex items-center justify-center gap-0">
            <Image
              src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/telegram_qmowq3.svg"
              alt="twitter"
              width={24}
              height={24}
              className="flex items-center justify-center lg:mx-3 lg:my-2"
            />

            <div className="flex items-center justify-center gap-2">
              <h2 className="lg:text-base text-xs whitespace-nowrap">Join community</h2>

              <LinkRightArrow color="#0A0D14" width={24} height={24} />
            </div>
          </a>
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

      <div className="flex lg:hidden mt-8 items-center gap-4 w-full">
        <a href="#" target="_blank" className="rounded-lg shadow-very-light-gray px-3 py-2 flex items-center justify-center gap-1">
          <Image
            src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg"
            alt="twitter"
            width={24}
            height={24}
            className="flex items-center justify-center lg:mx-3 lg:my-2"
          />

          <h2 className="lg:text-base text-xs whitespace-nowrap">Follow Supermigrate</h2>
        </a>

        <a href="#" target="_blank" className="rounded-lg shadow-very-light-gray px-3 py-2 flex items-center justify-between gap-1">
          <Image
            src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/telegram_qmowq3.svg"
            alt="twitter"
            width={24}
            height={24}
            className="flex items-center justify-center lg:mx-3 lg:my-2"
          />

          <h2 className="lg:text-base text-xs whitespace-nowrap">Join community</h2>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;

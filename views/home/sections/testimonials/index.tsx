import Marquee from 'react-fast-marquee';

import { testimonials } from './dummy';
import { SMClickAnimation, SMContainer, SMTestimonial } from '@/components';
import { ISMTestimonial } from '@/components/testimonial/types';
import { LinkRightArrow, TelegramIcon, XIcon } from '@/public/icons';
import { ISocialLink } from './types';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const marqueeContent = (items: ISMTestimonial[]) => {
  return (
    <div className="flex items-stretch justify-between">
      {items.map((testimonial, index) => (
        <SMTestimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

const SocialLink = ({ icon, link, text, isMobile }: ISocialLink) => (
  <SMClickAnimation>
    <a href={link} target="_blank" className="rounded-base px-[18px] py-3 flex items-center justify-center gap-1.5 border-[0.3px] border-primary-3450 bg-white">
      {icon}

      <div className="flex items-center justify-center gap-2">
        <h2 className="font-Bitform lg:text-base text-primary-3250 text-xs whitespace-nowrap">{text}</h2>

        {!isMobile && <LinkRightArrow color="#0A0D14" width={24} height={24} />}
      </div>
    </a>
  </SMClickAnimation>
);

const Testimonials = () => {
  const { locale } = useSystemFunctions();

  const { landingPage } = locale;
  const { telegramText, title, twitterText } = landingPage.testimonial;

  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

  const socialLinks = [
    {
      text: twitterText,
      icon: <XIcon color="#0A0D14" width={20} height={20} />,
      link: 'https://twitter.com/supermigrate',
    },
    {
      text: telegramText,
      icon: <TelegramIcon />,
      link: 'https://t.me/+8vDPDkrN_-gwZTA8',
    },
  ];

  return (
    <SMContainer>
      <div className="flex items-center justify-between">
        <h1 className="font-Bitform lg:text-[42px] xl:text-[46px] lg:leading-[59.8px] lg:tracking-[-0.46px] text-[24px] leading-[31.2px] tracking-[-0.24px] text-black whitespace-nowrap">{title}</h1>

        <div className="hidden xl:flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
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

      <div className="flex xl:hidden mt-8 items-center gap-4 w-full flex-wrap">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} isMobile />
        ))}
      </div>
    </SMContainer>
  );
};

export default Testimonials;

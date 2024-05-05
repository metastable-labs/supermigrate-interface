import Image from 'next/image';
import { ISMTestimonial } from './types';

const SMTestimonial = ({ content, imageUrl, name, twitterUrl, username }: ISMTestimonial) => {
  return (
    <div className="mx-[15px] py-6 px-8 border border-primary-250 flex flex-col gap-6 rounded-base w-[293px] md:w-[429px] min-h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src={imageUrl} alt={`${name}'s avatar`} height={40} width={40} className="rounded-full" />
          <div>
            <h3 className="text-sm font-medium text-primary-3700">{name}</h3>
            <a href={twitterUrl} target="_blank" className="text-primary-3650 text-sm">
              @{username}
            </a>
          </div>
        </div>
        <a href={twitterUrl} target="_blank">
          <Image src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg" height={24} width={24} alt="Twitter" />
        </a>
      </div>

      <p className="text-primary-3650 text-[10px] leading-[15px] md:text-base">{content.substring(0, 80)}...</p>
    </div>
  );
};

export default SMTestimonial;

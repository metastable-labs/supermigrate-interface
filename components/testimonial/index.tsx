import Image from "next/image";
import { ISMTestimonial } from "./types";

const getTwitterUsername = (url: string) => {
  try {
    const twitterUrlObj = new URL(url);
    return twitterUrlObj.pathname.split("/").pop();
  } catch (error) {
    console.error("Invalid URL", error);
    return "";
  }
};

const SMTestimonial = ({
  content,
  imageUrl,
  name,
  twitterUrl,
}: ISMTestimonial) => {
  const twitterUsername = getTwitterUsername(twitterUrl);

  return (
    <div className="mx-[15px] py-6 px-8 border border-[#CDD0D5] flex flex-col gap-6 rounded-lg w-[293px] md:w-[429px] min-h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src={imageUrl}
            alt={`${name}'s avatar`}
            height={40}
            width={40}
            className="rounded-full"
          />
          <div>
            <h3 className="text-sm font-medium">{name}</h3>
            <a href={twitterUrl} target="_blank">
              <h4 className="text-[#666D80] text-sm">@{twitterUsername}</h4>
            </a>
          </div>
        </div>
        <a href={twitterUrl} target="_blank">
          <Image
            src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg"
            height={24}
            width={24}
            alt="Twitter"
          />
        </a>
      </div>

      <p className="text-[#666D80] text-[10px] leading-[15px] md:text-base">
        {content}
      </p>
    </div>
  );
};

export default SMTestimonial;

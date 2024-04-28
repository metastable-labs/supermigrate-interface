import Image from "next/image";
import React from "react";

const TweetSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[46px] text-[24px] font-medium">
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

      <div className="mt-[30px] lg:mt-[56px]">
        <div className="py-6 px-8 border border-[#CDD0D5] w-[430px] rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image
                src="https://res.cloudinary.com/palmlight/image/upload/v1714338390/imnage_e7kbac.svg"
                alt="avatar"
                height={40}
                width={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium">Njoku script</h3>
                <h4 className="text-[#666D80] text-sm">@njokuscript</h4>
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/palmlight/image/upload/v1714329710/twitter-x-line_iekg46.svg"
              height={24}
              width={24}
              alt="Twitter"
            />
          </div>

          <p className="text-[#666D80] mt-6">
            whether you’re new to L2s, or you don’t have a technical team.
            Supermigrate makes it easy
          </p>
        </div>
      </div>
    </section>
  );
};

export default TweetSection;

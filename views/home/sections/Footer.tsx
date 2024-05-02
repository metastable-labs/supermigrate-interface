import { SMContainer } from "@/components";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-16 pb-12 bg-[#FEF3EB]">
      <SMContainer>
        <div className="flex items-start justify-between">
          <div className="">
            <h1 className="text-[#101828] font-medium text-xl mb-2">
              Stay up to date
            </h1>
            <h2 className="text-[#475467]">
              We’ll send you a nice letter once per week. No spam.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              className="shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#D0D5DD] rounded-lg bg-white h-[44px] px-3.5"
              placeholder="Enter your email"
            />
            <button className="w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg border border-[#F17B2C] h-[44px] font-medium text-white bg-[#C2540A]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="my-16 border-b border-[#EAECF0]" />

        <div className="flex justify-between">
          <div>
            <h1 className="font-medium text-sm text-[#0A0D14]">Supermigrate</h1>
            <p className="mt-8 text-[#475467]">
              Migrate ERC20 Tokens to the suprechain
            </p>
          </div>
          <div className="gap-8 flex items-start">
            <div className="w-[150px]">
              <h3 className="mb-4 font-medium text-[#101828] text-sm">
                Resources
              </h3>
              <p className="mb-3 text-[#C2540A] font-medium">Blog</p>
              <p className="mb-3 text-[#C2540A] font-medium">Github</p>
            </div>
            <div className="w-[150px]">
              <h3 className="mb-4 font-medium text-[#101828] text-sm">
                Company
              </h3>
              <p className="mb-3 text-[#C2540A] font-medium">Privacy</p>
              <p className="mb-3 text-[#C2540A] font-medium">Terms</p>
            </div>
          </div>
        </div>
      </SMContainer>
    </div>
  );
};

export default Footer;

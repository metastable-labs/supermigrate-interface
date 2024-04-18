import { SMContainer } from "@/components";
import MigratorSvg from "./migratorSvg";

const HeroSection = () => {
  return (
    <section>
      <SMContainer>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between min-h-screen">
          <div className="lg:max-w-[48%] pt-52">
            <h1 className="text-[38px] md:text-[60px] lg:text-[82px] font-medium leading-[130%] text-black">
              Your gateway to <span>Layer 2</span>
            </h1>
            <p className="lg:text-xl leading-[155%] mt-5 lg:mt-8 text-grey-50">
              Automatically deploy canonical bridged ERC20 to base and Create a
              PR on the superchain token list repo.
            </p>
          </div>
          <MigratorSvg />
        </div>
      </SMContainer>
    </section>
  );
};

export default HeroSection;

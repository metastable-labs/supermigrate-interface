import { SMContainer } from "@/components";
import MigratorSvg from "./migratorSvg";

const HeroSection = () => {
  const HeroListing = [
    {
      title: "Layer 2",
      textColor: "#C2540A",
      bgColor: "#C2540A",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_xfoqvs.svg"
    },
    {
      title: "Base",
      textColor: "#375DFB",
      bgColor: "#375DFB",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_1_fuejpd.svg"
    },
    {
      title: "Optimism",
      textColor: "#DF1C41",
      bgColor: "#710E21",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_2_ndibrj.svg"
    },
    {
      title: "Layer 2",
      textColor: "#DFFE00",
      bgColor: "#C2540A",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_xfoqvs.svg"
    },
    {
      title: "Layer 2",
      textColor: "#C2540A",
      bgColor: "#C2540A",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_xfoqvs.svg"
    }
  ];
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

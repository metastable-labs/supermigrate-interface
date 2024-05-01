import { SMContainer } from "@/components";
import MigratorSvg from "./migratorSvg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers";

interface IHeroListing {
  title: string;
  textClassname: string;
  btnClassname: string;
  image: string;
}

const HeroSection = () => {
  const [selectedView, setSelectedView] = useState(1);
  const HeroListings: IHeroListing[] = [
    {
      title: "Layer 2",
      textClassname: "text-[#C2540A] stroke-[#6E330C]",
      btnClassname:
        "bg-[#C2540A] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border-[0.3px] border-[#620F6C] text-white",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_xfoqvs.svg"
    },
    {
      title: "Base",
      textClassname: "text-[#375DFB] ",
      btnClassname:
        "bg-[#375DFB] text-white border border-[#E2E4E9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_1_fuejpd.svg"
    },
    {
      title: "Optimism",
      textClassname: "#DF1C41",
      btnClassname: "#710E21",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_2_ndibrj.svg"
    },
    {
      title: "Mode",
      textClassname: "#DFFE00",
      btnClassname: "#C2540A",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_3_rmhz1v.svg"
    },
    {
      title: "Scroll",
      textClassname: "#FFEDD8",
      btnClassname: "#FFEDD8",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_4_fpb8d6.svg"
    }
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newValue =
  //       selectedView + 1 > HeroListings?.length ? 0 : selectedView + 1;
  //     setSelectedView(newValue);
  //   }, 1000);

  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedView]);

  const view = HeroListings?.at(selectedView) as IHeroListing;
  return (
    <section className="w-full">
      <SMContainer>
        <div className="w-full grid pt-[120px] grid-cols-[520px_1fr] items-center gap-[250px]">
          <div className="w-full">
            <div className="">
              <h1 className="font-medium text-[78px] leading-tight">
                Your gateway to{" "}
                <span className={cn("", view.textClassname)}>
                  {view?.title}
                </span>
              </h1>
              <p className="mt-8 text-xl leading-normal text-[#717184]">
                Automatically deploy canonical bridged ERC20 to base and Create
                a PR on the superchain token list repo.
              </p>
              <button
                className={cn(
                  "mt-7 py-3 w-[190px] rounded-lg font-medium",
                  view.btnClassname
                )}
              >
                Start migrating
              </button>
            </div>
          </div>
          <div className="w-full h-[570px] relative">
            <Image layout="fill" src={view?.image} alt={view?.title} />
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between min-h-screen">
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
        </div> */}
      </SMContainer>
    </section>
  );
};

export default HeroSection;

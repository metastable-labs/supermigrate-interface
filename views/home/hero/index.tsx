import { SMContainer } from "@/components";
import MigratorSvg from "./migratorSvg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";

interface IHeroListing {
  title: string;
  textClassname: string;
  btnClassname: string;
  image: string;
}

const HeroSection = () => {
  const [selectedView, setSelectedView] = useState(4);
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
      textClassname: "text-[#375DFB] stroke-[#253EA7]",
      btnClassname:
        "bg-[#375DFB] text-white border border-[#E2E4E9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_1_fuejpd.svg"
    },
    {
      title: "Optimism",
      textClassname: "text-[#DF1C41] stroke-[#AF1D38]",
      btnClassname:
        "bg-[#DF1C41] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-white border-[0.3px] border-[#710E21]",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_2_ndibrj.svg"
    },
    {
      title: "Mode",
      textClassname: "text-[#DFFE00] stroke-[#1A1D01] stroke-1",
      btnClassname:
        "bg-[#DFFE00] border-[#1A1D01] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_3_rmhz1v.svg"
    },
    {
      title: "Scroll",
      textClassname: "text-[#FFEDD8] scroll-hero-text",
      btnClassname:
        "bg-[#FFEDD8] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ",
      image:
        "https://res.cloudinary.com/palmlight/image/upload/v1714475521/migrator_4_fpb8d6.svg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue =
        selectedView === HeroListings?.length - 1 ? 0 : selectedView + 1;
      setSelectedView(newValue);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedView]);

  const view = HeroListings?.at(selectedView) as IHeroListing;
  return (
    <section className="w-full">
      <SMContainer>
        <div className="w-full grid pt-[120px] grid-cols-[520px_1fr] items-center gap-[250px]">
          <div className="w-full">
            <div className="">
              <div className="font-medium text-[78px] leading-tight">
                <h1>Your gateway</h1>
                <div className="flex items-start gap-1 box-content">
                  <p>to</p>{" "}
                  <AnimatePresence>
                    <motion.p
                      className={cn("inline-block", view.textClassname)}
                      key={view?.title}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                    >
                      {view?.title}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
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

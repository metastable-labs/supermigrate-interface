"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import { SuperMigrateLogo } from "@/public/icons";
import Action from "./action";
import useScreenDetect from "@/hooks/useScreenDetect";
import SMHam from "@/components/ham";
import { NavLink } from "./type";
import Menu from "./menu";

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Whitepaper", href: "#whitepaper" },
  { name: "FAQ", href: "#faq" },
];

const LandingHeader = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop, isTablet, isMobile } = useScreenDetect();

  let width = "100%";
  if (isDesktop && !isTop) width = "648px";
  if (isDesktop && isTop) width = "87vw";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsTop(position < 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-screen z-20 flex justify-center items-center pt-[33px] px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(
          "px-[18px] py-4 md:px-[14px] md:py-[10px] bg-primary-50 rounded-xl border border-primary-100 shadow-hero-header relative",
          { "w-full": isMobile || isTablet }
        )}
      >
        <motion.div
          initial={{ width: "87vw" }}
          animate={{ width }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
            type: "spring",
            bounce: 0.3,
          }}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center justify-center md:gap-3">
            <SuperMigrateLogo />
            <a
              href="#home"
              className="text-sm tracking-[-0.14px] text-primary-650 font-medium hidden md:block"
            >
              Supermigrate
            </a>
          </div>

          <div className="hidden md:flex items-center justify-between min-w-[250px]">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="px-3 py-2 text-sm tracking-[-0.14px] text-primary-650"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Action onClick={() => {}} />
          </div>

          <SMHam isOpen={isMenuOpen} onClick={toggleMenu} />

          <Menu menuOpen={isMenuOpen} links={navLinks} action={() => {}} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingHeader;

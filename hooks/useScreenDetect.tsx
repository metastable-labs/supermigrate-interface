import { useEffect, useState } from "react";

interface ScreenType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useScreenDetect = () => {
  const mobileBreakpoint = 480;
  const tabletBreakpoint = 768;

  const [screenType, setScreenType] = useState<ScreenType>({
    isMobile: window.innerWidth <= mobileBreakpoint,
    isTablet:
      window.innerWidth > mobileBreakpoint &&
      window.innerWidth <= tabletBreakpoint,
    isDesktop: window.innerWidth > tabletBreakpoint,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenType({
        isMobile: window.innerWidth <= mobileBreakpoint,
        isTablet:
          window.innerWidth > mobileBreakpoint &&
          window.innerWidth <= tabletBreakpoint,
        isDesktop: window.innerWidth > tabletBreakpoint,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenDetect;

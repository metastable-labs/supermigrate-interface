import { usePathname } from "next/navigation";
import classNames from "classnames";

const isHomePage = (path: string): boolean => {
  const homePageRegex = /^\/[a-z]{2}\/?$/;
  return homePageRegex.test(path);
};

const SMNavigation = () => {
  const pathname = usePathname();
  const isHome = isHomePage(pathname);

  return (
    <div
      className={classNames(
        "fixed w-screen flex justify-center items-center pt-[55.013px] md:pt-0 bg-white",
        {
          hidden: isHome,
        }
      )}
    >
      <nav className="flex-1 bg-white px-4 py-[14px] md:px-11 md:py-5 items-center justify-between">
        this is nav
      </nav>
    </div>
  );
};

export default SMNavigation;

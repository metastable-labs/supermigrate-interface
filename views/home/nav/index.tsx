import { Locale } from "@/config/internationalization/i18n";

interface LandingNavProps {
  lang: Locale;
}

const LandingNav = ({ lang }: LandingNavProps) => {
  return (
    <div className="fixed w-screen flex justify-center items-center pt-[55px] md:pt-[33px]">
      <nav className="max-w-[648px] py-[10px] px-[14px] bg-primary-50 rounded-[12px] border-primary-100 shadow-landing-nav flex items-center justify-between gap-5">
        <h1>Logo</h1>
        <h1>links</h1>
        <h1>actions</h1>
      </nav>
    </div>
  );
};

export default LandingNav;

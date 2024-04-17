import { Locale } from "@/config/internationalization/i18n";

interface LandingNavProps {
  lang: Locale;
}

const LandingNav = ({ lang }: LandingNavProps) => {
  return (
    <div>
      <nav></nav>
    </div>
  );
};

export default LandingNav;

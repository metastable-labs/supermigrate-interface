import { LangParamProp } from "@/config/internationalization/i18n";
import HomeView from "@/views/home";

export default function Home({ params: { lang } }: { params: LangParamProp }) {
  return <HomeView lang={lang} />;
}

import { LangParamProp } from "@/config/internationalization/i18n";
import { MigrateView } from "@/views";

export default function Home({ params: { lang } }: { params: LangParamProp }) {
  return <MigrateView lang={lang} />;
}

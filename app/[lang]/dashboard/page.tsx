import { LangParamProp } from '@/config/internationalization/i18n';
import { DashboardView } from '@/views';

export default function Dashboard({ params: { lang } }: { params: LangParamProp }) {
  return <DashboardView lang={lang} />;
}

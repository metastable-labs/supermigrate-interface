import { LangParamProp } from '@/config/internationalization/i18n';
import { MigrateView } from '@/views';

export default function Migrate({ params: { lang } }: { params: LangParamProp }) {
  return <MigrateView lang={lang} />;
}

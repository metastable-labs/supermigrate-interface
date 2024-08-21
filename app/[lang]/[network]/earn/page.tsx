import { LangParamProp } from '@/config/internationalization/i18n';
import { EarnView } from '@/views';

export default function Earn({ params: { lang } }: { params: LangParamProp }) {
  return <EarnView lang={lang} />;
}

import { LangParamProp } from '@/config/internationalization/i18n';
import { BridgeView } from '@/views';

export default function Bridge({ params: { lang } }: { params: LangParamProp }) {
  return <BridgeView lang={lang} />;
}

import { LangParamProp } from "@/config/internationalization/i18n";
import { LiquidityView } from "@/views";

export default function Liquidity({
  params: { lang },
}: {
  params: LangParamProp;
}) {
  return <LiquidityView lang={lang} />;
}

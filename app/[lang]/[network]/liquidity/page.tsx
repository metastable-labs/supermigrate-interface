import { Locale } from '@/config/internationalization/i18n';
import { Network } from '@/config/privy/config';
import { LiquidityView } from '@/views';

interface PageProps {
  params: { network: Network; lang: Locale };
}

export default function Liquidity({ params: { lang, network } }: PageProps) {
  return <LiquidityView lang={lang} network={network} />;
}

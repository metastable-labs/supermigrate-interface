import { Locale } from '@/config/internationalization/i18n';
import { Network } from '@/config/privy/config';
import { EarnView } from '@/views';

interface PageProps {
  params: { network: Network; lang: Locale };
}

export default function Earn({ params: { lang, network } }: PageProps) {
  return <EarnView lang={lang} network={network} />;
}

import { Locale } from '@/config/internationalization/i18n';
import { Network } from '@/config/rainbow/config';
import { MigrateLiquidityView } from '@/views';

interface PageProps {
  params: { network: Network; lang: Locale; migrationId: string };
}

export default function MigrateLiquidity({ params: { lang, network, migrationId } }: PageProps) {
  return <MigrateLiquidityView lang={lang} network={network} migrationId={migrationId} />;
}

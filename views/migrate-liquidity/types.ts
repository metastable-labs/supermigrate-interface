import { LangParamProp } from '@/config/internationalization/i18n';
import { Network } from '@/config/privy/config';

export type MigrateLiquidityViewProps = LangParamProp & { network: Network; migrationId: string };

export type Period = '1h' | '24h' | '1w' | '1m';

export type ChartData = {
  date: string;
  value: number;
}[];

'use client';

import { LangParamProp } from '@/config/internationalization/i18n';
import { Network } from '@/config/rainbow/config';
import { SMContainer, SMTable } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { tableData } from './dummy';

export type LiquidityViewProps = LangParamProp & { network: Network };

const LiquidityView = ({ lang, network }: LiquidityViewProps) => {
  const { navigate } = useSystemFunctions();
  const rowClick = (id: string) => {
    navigate.push(`/${network}/liquidity/${id}`);
  };
  return (
    <SMContainer>
      <div className="pt-12 pb-[86px] flex flex-col items-stretch gap-8">
        <div className="flex flex-col gap-[13px] pb-5 border-b border-b-primary-1350">
          <h1 className="text-[30px] leading-[38px] font-Bitform text-primary-3400">Add Liquidity to Earn rewards</h1>
          <p className="text-primary-200">Add liquidity to newly deployed supermigrate tokens and earn rewards</p>
        </div>

        <SMTable data={tableData} network={network} isConnected variant="secondary" rowClick={rowClick} />
      </div>
    </SMContainer>
  );
};

export default LiquidityView;

'use client';

import { SMContainer } from '@/components';
import { LangParamProp } from '@/config/internationalization/i18n';
import SelectionComponent from './selection';

export default function MigrateView({ lang }: LangParamProp) {
  return (
    <div className="pb-28 lg:pb-0">
      <SMContainer>
        <SelectionComponent />
      </SMContainer>

      <div className="fixed bottom-0 left-0 w-full px-6 py-3 bg-primary-3250 flex items-center justify-center">
        <p className="text-primary-3850 text-[14px] leading-[24px]">
          {`We are adding more L2/L3 Integrations. If you'd like us to support your network, reach out to`} <a className="underline underline-offset-4">integrations@metastablelabs.xyz</a>
        </p>
      </div>
    </div>
  );
}

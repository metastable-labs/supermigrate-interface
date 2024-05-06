'use client';
import { useState } from 'react';

import { SMBottomComment, SMContainer, SMWelcome } from '@/components';
import { LangParamProp } from '@/config/internationalization/i18n';
import SelectionComponent from './selection';

export default function MigrateView({ lang }: LangParamProp) {
  const [showWelcome, setShowWelcome] = useState(true);

  const closeWelcome = () => setShowWelcome(false);
  return (
    <div className="pb-28 lg:pb-0">
      <SMContainer>
        <SelectionComponent />
      </SMContainer>

      <SMWelcome show={showWelcome} close={closeWelcome} />

      <SMBottomComment
        comment={"We are adding more L2/L3 Integrations. If you'd like us to support your network, reach out to"}
        link="https://metastablelabs.xyz/"
        linkText="integrations@metastablelabs.xyz"
        show
      />
    </div>
  );
}

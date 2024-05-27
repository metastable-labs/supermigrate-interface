'use client';
import { useState } from 'react';
import classNames from 'classnames';

import { LangParamProp } from '@/config/internationalization/i18n';
import { SMContainer } from '@/components';

const EarnView = ({ lang }: LangParamProp) => {
  const [step, setStep] = useState(0);
  return (
    <SMContainer>
      <div className={classNames('', { 'mt-[90px]': step === 0, 'mt-12': step === 1 })}>
        <h1>Earn</h1>
      </div>
    </SMContainer>
  );
};

export default EarnView;

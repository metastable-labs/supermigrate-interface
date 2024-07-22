'use client';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { SMAnnouncement, SMContainer, SMWelcome } from '@/components';
import { LangParamProp } from '@/config/internationalization/i18n';
import SelectionComponent from './selection';
import useSystemFunctions from '@/hooks/useSystemFunctions';

export default function DashboardView({ lang }: LangParamProp) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [cookies] = useCookies(['SMHasShownWelcomeModal']);
  const { locale } = useSystemFunctions();

  const { announcement } = locale.dashboard;

  const closeWelcome = () => setShowWelcome(false);

  useEffect(() => {
    if (!cookies) return;

    const hasShowWelcomeModalToUser = cookies.SMHasShownWelcomeModal;
    if (!hasShowWelcomeModalToUser) {
      setShowWelcome(true);
    }
  }, [cookies]);

  return (
    <div className="pb-28 lg:pb-0">
      <SMContainer>
        <SelectionComponent />
      </SMContainer>

      <SMWelcome show={showWelcome} close={closeWelcome} />

      <SMAnnouncement comment={announcement} link="mailto:admin@metastablelabs.xyz" linkText="admin@metastablelabs.xyz" show />
    </div>
  );
}

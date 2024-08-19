'use client';
import { useLayoutEffect } from 'react';
import { toast } from 'react-toastify';

import { Network } from '@/config/privy/config';
import { NewMigrateView } from '@/views';
import useSystemFunctions from '@/hooks/useSystemFunctions';

interface PageProps {
  params: { network: Network };
}

const NewMigrate = ({ params }: PageProps) => {
  const { navigate, userState } = useSystemFunctions();

  const { loading, user } = userState;

  useLayoutEffect(() => {
    if (!loading && !user) {
      navigate.push(`/${params.network}/migrate`);
      toast.warning('Please connect to Github to continue');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  return <NewMigrateView network={params.network} />;
};

export default NewMigrate;

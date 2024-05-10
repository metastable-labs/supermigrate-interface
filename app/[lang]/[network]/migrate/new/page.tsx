'use client';

import { Network } from '@/config/rainbow/config';
import { NewMigrateView } from '@/views';

interface PageProps {
  params: { network: Network };
}

const NewMigrate = ({ params }: PageProps) => {
  return <NewMigrateView network={params.network} />;
};

export default NewMigrate;

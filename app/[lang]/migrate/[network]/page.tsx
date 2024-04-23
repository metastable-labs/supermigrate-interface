"use client";

import { NetworkMigrationsView } from "@/views";
import { Network } from "@/components/button/types";

interface PageProps {
  params: { network: Network };
}

const NetworkMigrations = ({ params }: PageProps) => {
  return <NetworkMigrationsView network={params.network} />;
};

export default NetworkMigrations;

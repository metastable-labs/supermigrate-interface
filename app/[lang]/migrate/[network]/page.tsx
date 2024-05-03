"use client";

import { Network } from "@/config/rainbow/rainbowkit";
import { NetworkMigrationsView } from "@/views";

interface PageProps {
  params: { network: Network };
}

const NetworkMigrations = ({ params }: PageProps) => {
  return <NetworkMigrationsView network={params.network} />;
};

export default NetworkMigrations;

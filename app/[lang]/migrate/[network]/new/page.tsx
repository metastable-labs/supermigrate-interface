"use client";

import { NewMigrateView } from "@/views";
import { Network } from "@/components/button/types";

interface PageProps {
  params: { network: Network };
}

const NewMigrate = ({ params }: PageProps) => {
  return <NewMigrateView network={params.network} />;
};

export default NewMigrate;

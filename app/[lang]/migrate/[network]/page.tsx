import { Network } from "@/views/migrate/types";

import NetworkComponent from "@/views/network";

interface PageProps {
  params: { network: Network };
}

const NetworkMigratePage = ({ params }: PageProps) => {
  return <NetworkComponent network={params.network} />;
};

export default NetworkMigratePage;

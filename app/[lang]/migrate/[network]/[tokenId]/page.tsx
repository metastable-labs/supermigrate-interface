import { Network } from "@/config/rainbow/config";
import { TokenDetailView } from "@/views";

interface PageProps {
  params: { network: Network; tokenId: string };
}

const TokenDetail = ({ params }: PageProps) => {
  return <TokenDetailView id={params.tokenId} network={params.network} />;
};

export default TokenDetail;

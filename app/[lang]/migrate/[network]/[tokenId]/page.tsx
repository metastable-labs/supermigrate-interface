import { Network } from "@/config/rainbow/config";
import { TokenDetailView } from "@/views";

interface PageProps {
  params: { tokenId: Network };
}

const TokenDetail = ({ params }: PageProps) => {
  return <TokenDetailView id={params.tokenId} />;
};

export default TokenDetail;

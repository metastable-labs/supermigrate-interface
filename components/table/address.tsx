import useTruncateText from '@/hooks/useTruncateText';
import useCopy from '@/hooks/useCopy';
import SMClickAnimation from '../click-animation';
import { SecondaryCopyIcon } from '@/public/icons';

const Address = ({ address }: { address?: string }) => {
  const truncateWallet = useTruncateText(address!, 5, 5);
  const copy = useCopy();

  return (
    <div className="flex items-start justify-start gap-1">
      <span className="text-primary-300 text-sm font-medium">{truncateWallet}</span>
      <SMClickAnimation onClick={() => copy(address!)}>
        <SecondaryCopyIcon />
      </SMClickAnimation>
    </div>
  );
};

export default Address;

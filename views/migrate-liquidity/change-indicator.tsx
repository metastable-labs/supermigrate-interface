import classNames from 'classnames';
import { motion } from 'framer-motion';

import { ChangeIndicatorIcon } from '@/public/icons';

interface ChangeIndicatorProps {
  change: number;
  increased: boolean;
}

const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ change, increased }) => {
  const isNeutral = change === 0 && increased === false;
  const isPositive = change > 0 && increased;
  const realCastChange = isNeutral ? 0 : increased ? Math.abs(change) : -Math.abs(change);

  const loading = false;

  return (
    <div
      className={classNames('flex items-center justify-center gap-1 text-[14px] leading-[14px] tracking-[-0.14px] font-medium', {
        'text-primary-4250': isPositive && !loading,
        'text-primary-1950': !isPositive && !loading && !isNeutral,
        'text-primary-250 animate-pulse': loading,
        'text-neutral-500': isNeutral && !loading,
      })}>
      <motion.div animate={{ rotate: isPositive || isNeutral ? 0 : 180 }}>
        <ChangeIndicatorIcon color={loading ? '#e2e4e9' : isNeutral ? '#A0A0A0' : isPositive ? '#32AE60' : '#DF1C41'} width={18} height={18} />
      </motion.div>
      {loading ? '--' : realCastChange}%
    </div>
  );
};

export default ChangeIndicator;

import { DoubleCheckIcon, MergedIcon } from '@/public/icons';
import { PullStatus } from './types';
import classNames from 'classnames';

const Status = ({ status }: { status?: PullStatus }) => {
  let text;
  switch (status) {
    case 'merged':
      text = 'Success';
      break;
    case 'pending':
      text = 'Pending';
      break;
    case 'failed':
      text = 'Failed';
      break;
    default:
      text = 'Success';
      break;
  }
  return (
    <div
      className={classNames('px-2.5 py-0.5 flex items-center justify-center border rounded-2xl max-w-20', {
        'border-primary-3100 text-primary-3100 text-sm': status === 'merged',
        'border-primary-3150 text-primary-3150 text-sm': status === 'pending',
        'border-primary-3200 text-primary-3200 text-sm': status === 'failed',
      })}>
      {text}
    </div>
  );
};

export default Status;

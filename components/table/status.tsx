import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StatusProps } from './types';
import classNames from 'classnames';

const Status = ({ status }: StatusProps) => {
  const { locale } = useSystemFunctions();
  const { status: statusText } = locale.components.table.body;

  let text;
  switch (status) {
    case 'merged':
      text = statusText.success;
      break;
    case 'pending':
      text = statusText.pending;
      break;
    case 'failed':
      text = statusText.failed;
      break;
    default:
      text = statusText.success;
      break;
  }
  return (
    <div
      className={classNames('px-2.5 py-0.5 flex items-center justify-center border rounded-2xl min-w-20 max-w-fit', {
        'border-primary-3100 text-primary-3100 text-sm': status === 'merged',
        'border-primary-3150 text-primary-3150 text-sm': status === 'pending',
        'border-primary-3200 text-primary-3200 text-sm': status === 'failed',
      })}>
      {text}
    </div>
  );
};

export default Status;

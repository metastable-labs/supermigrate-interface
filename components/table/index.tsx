'use client';
import classNames from 'classnames';

import { TableProps } from './types';
import CTA from './cta';
import EmptyState from './empty';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { headers } from './utils';
import Row from './row';

const SMTable = ({ data, network, isConnected, variant = 'primary', loading, ctaAction, rowClick }: TableProps) => {
  const { locale } = useSystemFunctions();

  const { next, page, previous } = locale.components.table.footer;

  return (
    <div className={classNames('self-stretch overflow-x-auto rounded-base border border-primary-1350 flex flex-col justify-between bg-white', {})}>
      {loading && <div className="flex-1 flex items-center justify-center italic font-medium text-xs">Loading...</div>}

      <table className="md:min-w-full divide-y divide-primary-1350">
        <thead className="bg-primary-1450 text-primary-1500 border-b border-primary-1350">
          <tr>
            {headers.map((header, index) => (
              <th
                scope="col"
                key={header.key}
                className={classNames('px-4 md:px-6 py-3 text-left text-xs font-medium', {
                  'whitespace-nowrap': index === 0 || index === 2,
                  'hidden md:table-cell': index === 1 || (index === 2 && variant === 'primary'),
                  'hidden sm:table-cell': (index === 2 || index === 4) && variant === 'secondary',
                })}>
                {header[variant]} {variant === 'primary' && index === 2 && network}
              </th>
            ))}
          </tr>
        </thead>

        {Boolean(data.length) && !loading && (
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <Row key={index} variant={variant} item={item} index={index} ctaAction={ctaAction} rowClick={rowClick} network={network} />
            ))}
          </tbody>
        )}
      </table>

      {!Boolean(data.length) && !loading && <EmptyState isConnected={isConnected} network={network} action={() => ctaAction?.()} variant={variant} />}

      {Boolean(data.length) && (
        <div className=" border-t border-primary-1350 flex justify-between items-center px-6 pt-3 pb-4 bg-white">
          <CTA title={previous} onClick={() => {}} />

          <span className="flex items-center justify-center px-3 text-sm text-primary-1600">{page} 1 of 1</span>

          <CTA title={next} onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default SMTable;

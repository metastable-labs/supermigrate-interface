'use client';

import { LinkRightArrow } from '@/public/icons';

import { ITransactionHash } from './types';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const TransactionHash = ({ hashes }: ITransactionHash) => {
  const { locale } = useSystemFunctions();
  const { title } = locale.tokenDetail.transactionHash;
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary-50 text-[16px] leading-[24.8px] md:text-[20px] md:leading-[31px]">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hashes?.map((hash, index) => (
          <div key={index} className="p-4 border border-primary-2100 rounded-base flex items-center justify-start w-full bg-primary-2700">
            <div className="flex flex-col items-start gap-1.5 justify-center">
              <h3 className="text-primary-200 text-[12px] leading-[17.4px] capitalize">{hash.name}</h3>

              <a href={hash.url} target="_blank" className="flex gap-2 items-center justify-center">
                <span className="text-primary-1650 text-[14px] leading-[30px] underline underline-offset-4">{hash.urlText}</span>

                <LinkRightArrow />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHash;

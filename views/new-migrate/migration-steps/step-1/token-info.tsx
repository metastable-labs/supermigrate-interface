import classNames from 'classnames';
import { SMLoader } from '@/components';
import { ITokenInfo } from './types';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const TokenInfo = ({ decimal, name, symbol, loading, network }: ITokenInfo) => {
  const { locale } = useSystemFunctions();
  const { tokenInfo } = locale.newMigration.step1;

  const items = [
    { name: tokenInfo.name, value: name },
    { name: tokenInfo.symbol, value: symbol },
    { name: tokenInfo.decimals, value: decimal },
  ];

  return (
    <div className="w-full flex flex-col items-stretch justify-center gap-6 px-6 py-3 bg-white rounded-base border border-primary-2100 min-h-[141px]">
      {!loading &&
        items.map((item) => (
          <div key={item.name} className="flex self-stretch items-center justify-between gap-5">
            <span className="font-medium text-primary-1750">{item.name}</span>
            <span
              className={classNames('font-normal transition-colors duration-300', {
                'text-primary-1650': network === 'base',
                'text-primary-2150': network === 'optimism',
                'text-primary-500': network === 'mode',
                'text-primary-550': network === 'scroll',
              })}>
              {item.value}
            </span>
          </div>
        ))}

      {loading && (
        <div className="w-full h-full flex items-center justify-center">
          <SMLoader variant="medium" />
        </div>
      )}
    </div>
  );
};

export default TokenInfo;

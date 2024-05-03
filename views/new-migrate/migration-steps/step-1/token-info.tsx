import { SMLoader } from "@/components";

const TokenInfo = ({
  decimal,
  name,
  symbol,
  loading,
}: {
  name: string;
  symbol: string;
  decimal: string;
  loading?: boolean;
}) => {
  const items = [
    { name: "Token Name", value: name },
    { name: "Token Symbol", value: symbol },
    { name: "Token Decimal", value: decimal },
  ];

  return (
    <div className="w-full flex flex-col items-stretch justify-center gap-6 px-6 py-3 bg-white rounded-[10px] border border-primary-2100 min-h-[215px]">
      {!loading &&
        items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-stretch justify-center gap-1"
          >
            <div className="text-sm flex flex-col items-start justify-center gap-[7px]">
              <span className="font-medium text-primary-1750">{item.name}</span>
              <span className="font-normal text-primary-2150">
                {item.value}
              </span>
            </div>
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

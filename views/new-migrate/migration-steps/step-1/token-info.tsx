const TokenInfo = ({
  decimal,
  name,
  symbol,
}: {
  name: string;
  symbol: string;
  decimal: string;
}) => {
  const items = [
    { name: "Token Name", value: name },
    { name: "Token Symbol", value: symbol },
    { name: "Token Decimal", value: decimal },
  ];

  return (
    <div className="w-full flex flex-col items-stretch justify-center gap-6 px-6 py-3 bg-white rounded-[10px] border border-l-primary-2100">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-stretch justify-center gap-1"
        >
          <div className="text-sm flex flex-col items-start justify-center gap-[7px]">
            <span className="font-medium text-primary-1750">{item.name}</span>
            <span className="font-normal text-primary-2150">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenInfo;

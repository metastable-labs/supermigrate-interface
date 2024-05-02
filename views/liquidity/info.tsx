import { AnimatePresence, motion } from "framer-motion";

import { rates } from "./dummy";

const Info = ({
  amount,
  show,
  token,
  wallet,
  poolPercentage,
  step,
}: {
  amount: number;
  show: boolean;
  wallet?: string;
  token?: string;
  poolPercentage: number;
  step?: number;
}) => {
  const tokenRate: any = rates?.find((rate) => rate?.name === token)?.[wallet!];

  let items = [
    {
      primaryText: `${wallet} deposited`,
      secondaryText: `${amount} ${wallet}`,
      condition: step === 1,
    },
    {
      primaryText: `$${token} deposited`,
      secondaryText: `${(tokenRate! * amount).toLocaleString()} ${token}`,
      condition: step === 1,
    },
    {
      primaryText: "Rate",
      secondaryText: `1 ${wallet} = ${tokenRate?.toLocaleString()} ${token}`,
    },
    {
      primaryText: "Share of pool",
      secondaryText: `${poolPercentage}%`,
    },
    {
      primaryText: "Network fee",
      secondaryText: `0.0046${wallet}`,
      tertiaryText: `$${2.03}`,
    },
  ];

  items = items.filter((item) => item.condition !== false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col gap-3"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center text-primary-200 text-sm"
            >
              <span>{item.primaryText}:</span>

              <div className="flex items-center justify-center gap-2 font-medium">
                {item.tertiaryText && (
                  <span className="text-primary-2050">{item.tertiaryText}</span>
                )}

                <span>{item.secondaryText}</span>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Info;

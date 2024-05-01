import { useState, useEffect } from "react";

import { SMButton, SMClickAnimation, SMSelect } from "@/components";
import { IOption } from "@/components/select/types";
import { PlusIcon } from "@/public/icons";
import { walletOptions, rates, tokenOptions, Rate } from "./dummy";
import Info from "./info";
import Extra from "./extra";

const Add = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ amount: "", liquidity: "" });
  const [wallet, setWallet] = useState<IOption>();
  const [token, setToken] = useState<IOption>();
  const [walletBalance, setWalletBalance] = useState("24.64");
  const [headerText, setHeaderText] = useState("Add Liquidity");
  const [buttonText, setButtonText] = useState("Invalid Pair");

  const showText = Boolean(wallet && token) && step === 0;
  const showInputSection = step === 0;
  const showExtra = Boolean(wallet && token) && step === 1;

  const handleWallet = (wallet: IOption) => setWallet(wallet);
  const handleToken = (token: IOption) => setToken(token);

  const handleInputChange =
    (field: "amount" | "liquidity") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawNumber = event.target.value.replace(/\D+/g, "");
      const num =
        rawNumber === "" ? "" : parseInt(rawNumber, 10).toLocaleString("en-US");
      setValues((prev) => ({ ...prev, [field]: num }));
      updateLiquidity(num, field === "liquidity");
    };

  const updateLiquidity = (value: string, isLiquidityInput: boolean) => {
    const numericValue = parseInt(value.replace(/,/g, ""), 10);

    if (isNaN(numericValue) || !wallet || !token) return;

    const rateEntry = rates.find((rate) => rate.name === token.value);
    if (!rateEntry) return;

    const conversionRate = rateEntry[wallet.text as keyof Rate];

    if (typeof conversionRate !== "number") return;

    const calculatedValue = isLiquidityInput
      ? numericValue / conversionRate
      : numericValue * conversionRate;

    const formattedValue = calculatedValue.toLocaleString("en-US");

    if (isLiquidityInput) {
      setValues((prev) => ({ ...prev, amount: formattedValue }));
    } else {
      setValues((prev) => ({ ...prev, liquidity: formattedValue }));
    }
  };

  const handleButtonAction = () => {
    if (step === 0) {
      setStep(1);
      setHeaderText("You will receive");
      setButtonText("Confirm");
    }

    if (step === 1) {
      setButtonText("Confirming Transaction...");
    }
  };

  useEffect(() => {
    if (values.amount) {
      updateLiquidity(values.amount.replace(/,/g, ""), false);
    }
    if (wallet && token) {
      setButtonText("Supply");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, token]);

  return (
    <div className="w-[295px] md:w-[400px] p-1 flex flex-col gap-6 items-start rounded-2xl">
      <h1 className="text-primary-50 text-[24px] leading-[37.2px] font-medium">
        {headerText}
      </h1>

      {showInputSection && (
        <>
          <div className="w-full p-4 flex justify-between items-center gap-5 bg-primary-2700 rounded border border-primary-2100">
            <input
              type="text"
              value={values.amount}
              onChange={handleInputChange("amount")}
              placeholder="0"
              className="flex-1 min-w-0 placeholder-primary-2750 text-primary-50 text-[24px] leading-[34.8px] font-medium focus:outline-none bg-transparent"
            />

            <div className="flex flex-col items-end gap-[6px] shrink-0">
              <SMSelect
                options={walletOptions}
                text="Select wallet"
                onClick={handleWallet}
              />

              {Boolean(wallet) && (
                <span className="text-primary-200 text-[12px] leading-[17.4px] font-medium">
                  Balance: {walletBalance} {wallet?.text}
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <SMClickAnimation className="flex justify-center items-center rounded-full border-[0.4px] border-primary-250 p-[2px]">
              <PlusIcon color="#0A0D14" width={24} height={24} />
            </SMClickAnimation>
          </div>

          <div className="w-full p-4 flex justify-between items-center gap-5 bg-primary-2700 rounded border border-primary-2100">
            <input
              type="text"
              value={values.liquidity}
              onChange={handleInputChange("liquidity")}
              placeholder="0"
              className="flex-1 min-w-0 placeholder-primary-2750 text-primary-50 text-[24px] leading-[34.8px] font-medium focus:outline-none bg-transparent"
              disabled={!token}
            />

            <div className="flex flex-col items-end gap-[6px] shrink-0">
              <SMSelect
                options={tokenOptions}
                text="Select token"
                onClick={handleToken}
              />
            </div>
          </div>
        </>
      )}

      <Extra
        amount={parseInt(values.amount.replace(/,/g, ""), 10)}
        show={showExtra}
        token={token}
        wallet={wallet}
      />

      <Info
        poolPercentage={9.3}
        show={Boolean(token)}
        token={token?.value}
        wallet={wallet?.text}
        amount={parseInt(values.amount.replace(/,/g, ""), 10)}
        step={step}
      />

      <SMButton
        text={buttonText}
        onClick={handleButtonAction}
        fullWidth
        network="base"
        variant="plain"
        disabled={!wallet || !token}
      />

      {showText && (
        <p className="p-4 rounded-[10px] bg-primary-650 self-stretch text-primary-700 text-[14px] leading-[24px]">
          {
            "By adding liquidity you'll earn 0.2% of all trades on this pair proportional to your share of the pool"
          }
        </p>
      )}
    </div>
  );
};

export default Add;

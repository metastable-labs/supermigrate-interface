import React from "react";
import { SMSelect } from "@/components";
import { IOption } from "@/components/select/types";

const LiquidityInput = ({
  value,
  onChange,
  placeholder,
  options,
  onSelect,
  selectText,
  balanceText,
  balanceValue,
  disabled,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  options: IOption[];
  onSelect: (option: IOption) => void;
  selectText: string;
  balanceText?: string;
  balanceValue?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="w-full p-4 flex justify-between items-center gap-5 bg-primary-2700 rounded border border-primary-2100">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 min-w-0 placeholder-primary-2750 text-primary-50 text-[24px] leading-[34.8px] font-medium focus:outline-none bg-transparent"
        disabled={disabled}
      />
      <div className="flex flex-col items-end gap-[6px] shrink-0">
        <SMSelect options={options} text={selectText} onClick={onSelect} />
        {balanceValue && balanceText && (
          <span className="text-primary-200 text-[12px] leading-[17.4px] font-medium">
            Balance: {balanceValue} {balanceText}
          </span>
        )}
      </div>
    </div>
  );
};

export default LiquidityInput;

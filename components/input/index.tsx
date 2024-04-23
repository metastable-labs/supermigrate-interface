import classNames from "classnames";

import { ISMInput } from "./types";

const SMInput = ({
  name,
  className,
  disabled,
  error,
  isRequired,
  label,
  placeholder,
  register,
  rows,
  type,
  variant = "primary",
}: ISMInput) => {
  return (
    <div
      className={classNames(
        "w-full text-sm tracking-[-0.084px] text-primary-50",
        { "text-primary-1950": error }
      )}
    >
      <label
        htmlFor={name}
        className={classNames("", {
          "flex items-center justify-center gap-2 text-primary-50 font-medium":
            isRequired,
        })}
      >
        {label}
        {isRequired && (
          <span className="text-primary-1950 font-normal">{"(Required)"}</span>
        )}
      </label>

      {variant === "primary" && (
        <input
          name={name}
          disabled={disabled}
          {...register}
          className={classNames(
            `px-[10px] pl-3 pr-[10px] self-stretch w-full rounded-[10px] border border-primary-250 bg-white shadow-nav-select-shadow placeholder-primary-2050 font-normal ${className}`
          )}
          placeholder={placeholder}
          type={type}
        />
      )}

      {variant === "secondary" && (
        <textarea
          name={name}
          disabled={disabled}
          {...register}
          className={`px-[10px] pl-3 pr-[10px] self-stretch w-full rounded-[10px] border border-primary-250 bg-white shadow-nav-select-shadow placeholder-primary-2050 font-normal ${className}`}
          placeholder={placeholder}
          rows={rows}
        />
      )}
    </div>
  );
};

export default SMInput;

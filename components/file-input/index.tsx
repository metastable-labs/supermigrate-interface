import classNames from "classnames";
import { ISMFileInput } from "./types";

const SMFileInput = ({
  name,
  className,
  handleFileChange,
  disabled,
  isRequired,
  label,
}: ISMFileInput) => {
  return (
    <div
      className={classNames(
        "w-full text-sm tracking-[-0.084px] text-primary-50 flex flex-col items-start gap-1"
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
        <span className="text-primary-1950 font-normal">{"(Required)"}</span>
      </label>

      <input
        id="image"
        onChange={handleFileChange}
        type="file"
        accept=".png, .jpg, .jpeg"
        className="hidden"
      />
    </div>
  );
};

export default SMFileInput;

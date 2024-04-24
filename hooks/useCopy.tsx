import { toast } from "react-toastify";

const useCopy = () => {
  const copyAction = (text: string) => {
    navigator.clipboard.writeText(text);

    return toast("copied to clipboard", {
      type: "info",
    });
  };

  return copyAction;
};

export default useCopy;

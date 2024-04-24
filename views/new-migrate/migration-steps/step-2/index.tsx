"use client";

import { StepProps } from "../types";
import { SMButton, SMFileInput, SMInput } from "@/components";
import FileSample from "./file-sample";

const Step2 = ({
  errors,
  network,
  register,
  setStep,
  setFile,
  file,
}: StepProps) => {
  const handleFile = (e: any) => {
    const file = e.target?.files?.[0];
    setFile?.(file);
  };

  const deleteFile = () => setFile?.(null);

  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:min-w-[448px]">
      <div className="w-full flex flex-col gap-1">
        <SMFileInput
          name="image"
          handleFileChange={handleFile}
          label="Token Image"
          isRequired
        />

        <FileSample file={file} deleteFile={deleteFile} />
      </div>

      <SMInput
        name="websiteLink"
        register={register?.("websiteLink")}
        placeholder="Logo URL"
        error={errors?.websiteLink}
        type="text"
        label="Website Link"
      />

      <SMInput
        name="twitterLink"
        register={register?.("twitterLink")}
        placeholder="Twitter URL"
        error={errors?.twitterLink}
        type="text"
        label="Twitter Link"
        isRequired
      />

      <SMButton
        onClick={handleNext}
        text="Next"
        fullWidth
        network={network}
        variant="plain"
      />
    </div>
  );
};

export default Step2;

'use client';

import { StepProps } from '../types';
import { SMButton, SMFileInput, SMFileSample, SMInput } from '@/components';

const Step2 = ({ errors, network, register, setFile, file }: StepProps) => {
  const twitterLinkError = errors?.twitterLink;

  const disableButton = !file || Boolean(twitterLinkError?.message);

  const handleFile = (e: any) => {
    const file = e.target?.files?.[0];
    setFile?.(file);
  };

  const deleteFile = () => setFile?.(null);

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:min-w-[448px]">
      <div className="w-full flex flex-col gap-1">
        <SMFileInput name="image" handleFileChange={handleFile} label="Token Image" isRequired />

        <SMFileSample file={file} deleteFile={deleteFile} />
      </div>

      <SMInput name="websiteLink" register={register?.('websiteLink')} placeholder="Logo URL" error={errors?.websiteLink} type="text" label="Website Link" />

      <SMInput name="twitterLink" register={register?.('twitterLink')} placeholder="Twitter URL" error={errors?.twitterLink} type="text" label="Twitter Link" isRequired />

      <SMButton text="Next" fullWidth network={network} variant="plain" type="submit" disabled={disableButton} />
    </div>
  );
};

export default Step2;

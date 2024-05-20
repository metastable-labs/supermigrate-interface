'use client';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { StepProps } from '../types';
import { SMButton, SMFileInput, SMFileSample, SMInput } from '@/components';

const Step2 = ({ errors, network, register, setFile, file }: StepProps) => {
  const { locale } = useSystemFunctions();
  const { buttonText, imageInput, twitterInput, websiteInput } = locale.newMigration.step2;
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
        <SMFileInput name="image" handleFileChange={handleFile} label={imageInput.label} isRequired />

        <SMFileSample file={file} deleteFile={deleteFile} />
      </div>

      <SMInput name="websiteLink" register={register?.('websiteLink')} placeholder={websiteInput.placeholder} error={errors?.websiteLink} type="text" label={websiteInput.label} />

      <SMInput name="twitterLink" register={register?.('twitterLink')} placeholder={twitterInput.placeholder} error={errors?.twitterLink} type="text" label={twitterInput.label} isRequired />

      <SMButton text={buttonText} fullWidth network={network} variant="plain" type="submit" disabled={disableButton} />
    </div>
  );
};

export default Step2;

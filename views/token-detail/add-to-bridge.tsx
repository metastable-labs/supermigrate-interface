'use client';
import { useState } from 'react';

import { SMButton, SMFileInput, SMFileSample, SMModal } from '@/components';
import { AddToBridgeProps } from './types';
import useMigrationActions from '@/application/migration/actions';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const AddToBridge = ({ close, show, network, id }: AddToBridgeProps) => {
  const [file, setFile] = useState<File | null>(null);
  const { addToBridge } = useMigrationActions();
  const { migrationState } = useSystemFunctions();
  const { addToBridgeLoading } = migrationState;

  const handleFile = (e: any) => {
    const file = e.target?.files?.[0];
    setFile?.(file);
  };

  const deleteFile = () => setFile?.(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('logo', file);

    addToBridge(id, formData, { onSuccess: close });
  };

  return (
    <SMModal show={show} close={close} variant="secondary">
      <form onSubmit={onSubmit}>
        <h1 className="text-primary-50 text-[24px] leading-[37.2px] font-medium mb-6">Add to bridge</h1>
        <div className="flex items-stretch justify-between flex-col gap-10 md:min-w-96 min-w-72">
          <div className="w-full flex flex-col gap-1">
            <SMFileInput name="image" handleFileChange={handleFile} label="Token Image" isRequired />

            <SMFileSample file={file} deleteFile={deleteFile} />
          </div>

          <SMButton text="Add to Bridge" disabled={!file} fullWidth loading={addToBridgeLoading} network={network} variant="plain" type="submit" />
        </div>
      </form>
    </SMModal>
  );
};

export default AddToBridge;

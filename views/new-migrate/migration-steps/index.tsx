import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { Network } from '@/config/privy/config';
import readTokenData from '@/utils/read-contract';
import Header from './header';
import Step1 from './step-1';
import Step2 from './step-2';
import { FormProp } from './types';
import Step3 from './step-3';
import Step4 from './step-4';
import useMigrationActions from '@/application/migration/actions';
import { SMAnnouncement } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const schema = yup.object().shape({
  tokenAddress: yup.string().required('Token Address is Required'),
  tokenName: yup.string(),
  tokenSymbol: yup.string(),
  tokenDecimal: yup.string(),
  tokenDescription: yup.string().required('Token Description is Required'),
  websiteLink: yup.string(),
  twitterLink: yup
    .string()
    .matches(/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}\/?$/i, 'Invalid Twitter URL')
    .required('Twitter URL is Required'),
});

const MigrationSteps = ({ network }: { network: Network }) => {
  const { migrateToken } = useMigrationActions();
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [overridden, setOverridden] = useState(false);
  const [fetchingTokenAddress, setFetchingTokenAddress] = useState(false);
  const { locale } = useSystemFunctions();
  const { announcement } = locale.newMigration.step4;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormProp>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const tokenAddress = watch('tokenAddress');

  const steps = [
    <Step1
      key={0}
      register={register}
      errors={errors}
      network={network}
      setStep={setStep}
      watch={watch}
      overridden={overridden}
      setOverridden={setOverridden}
      fetchingTokenAddress={fetchingTokenAddress}
    />,
    <Step2 key={1} register={register} errors={errors} network={network} setStep={setStep} setFile={setFile} file={file} />,

    <Step3 key={2} network={network} setStep={setStep} />,
    <Step4 key={2} />,
  ];

  const onSubmit = (data: FormProp) => {
    migrateToken({ ...data, file, overridden }, { onSuccess: () => setStep(2) });
  };

  const fetchTokenData = async () => {
    // Check if the input is a valid Ethereum wallet address
    const isAddressMatch = tokenAddress?.match(/^0x[a-fA-F0-9]{40}$/);
    if (!isAddressMatch) {
      setFetchingTokenAddress(false);
      setValue('tokenName', '');
      setValue('tokenSymbol', '');
      setValue('tokenDecimal', '');
      return;
    }

    try {
      setFetchingTokenAddress(true);
      const res = await readTokenData(tokenAddress! as `0x${string}`);

      setValue('tokenName', res.name);
      setValue('tokenSymbol', res.symbol);
      setValue('tokenDecimal', res.decimal.toString());
    } catch (err) {
      toast(`Invalid address: Address must be a valid token contract on Ethereum(L1)`, {
        type: 'error',
      });
    } finally {
      setFetchingTokenAddress(false);
    }
  };

  useEffect(() => {
    if (!tokenAddress) return;

    fetchTokenData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAddress]);

  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center gap-6">
      <Header step={step} network={network} setStep={setStep} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="popLayout">
          <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </form>

      <SMAnnouncement comment={announcement} show={step === 3} />
    </div>
  );
};

export default MigrationSteps;

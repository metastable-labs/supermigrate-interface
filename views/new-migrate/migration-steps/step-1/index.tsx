import { AnimatePresence, motion } from 'framer-motion';

import { StepProps } from '../types';
import TokenInfo from './token-info';
import OverrideSection from './override-section';
import { SMButton, SMInput } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const Step1 = ({ register, errors, network, setStep, watch, overridden, setOverridden, fetchingTokenAddress }: StepProps) => {
  const { locale } = useSystemFunctions();
  const { addressInput, buttonText, decimalInput, descriptionInput, nameInput, override, symbolInput } = locale.newMigration.step1;
  const tokenAddress = watch?.('tokenAddress');
  const tokenDecimal = watch?.('tokenDecimal');
  const tokenDescription = watch?.('tokenDescription');
  const tokenName = watch?.('tokenName');
  const tokenSymbol = watch?.('tokenSymbol');

  const tokenInfo = {
    name: tokenName || '',
    symbol: `$${tokenSymbol}` || '',
    decimal: tokenDecimal || '',
  };

  const disbleButton = !tokenAddress || (!tokenDecimal && overridden) || !tokenDescription;

  const handleOverride = () => setOverridden!((prev) => !prev);
  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-primary-2100 bg-white p-6 min-w-[343px] md:min-w-[448px]">
      <SMInput name="tokenAddress" register={register?.('tokenAddress')} placeholder={addressInput.placeholder} error={errors?.tokenAddress} type="text" label={addressInput.label} isRequired />

      {tokenAddress && tokenInfo.name && <TokenInfo network={network} loading={fetchingTokenAddress} {...tokenInfo} />}

      <OverrideSection handleOverride={handleOverride} overridden={overridden!} network={network} />

      <AnimatePresence>
        {overridden && (
          <motion.div className="flex flex-col gap-6 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SMInput name="tokenName" register={register?.('tokenName')} placeholder={nameInput.placeholder} error={errors?.tokenName} type="text" label={nameInput.label} />
            <SMInput name="tokenSymbol" register={register?.('tokenSymbol')} placeholder={symbolInput.placeholder} error={errors?.tokenSymbol} type="text" label={symbolInput.label} />
            <SMInput name="tokenDecimal" register={register?.('tokenDecimal')} placeholder={decimalInput.placeholder} error={errors?.tokenDecimal} type="text" label={decimalInput.label} isRequired />
          </motion.div>
        )}
      </AnimatePresence>

      <SMInput
        name="tokenDescription"
        register={register?.('tokenDescription')}
        placeholder={descriptionInput.placeholder}
        error={errors?.tokenDescription}
        type="text"
        label={descriptionInput.label}
        isRequired
        variant="secondary"
      />

      <SMButton onClick={handleNext} text={buttonText} fullWidth network={network} variant="plain" disabled={disbleButton} />
    </div>
  );
};

export default Step1;

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SMButton } from '@/components';
import { ActionProps, FormProp } from './types';
import { BarcodeIcon, XIcon, WalletAltIcon } from '@/public/icons';

const schema = yup.object().shape({
  code: yup.string().required('Code is Required'),
});

const Action = ({ index, variant = 'code', action }: ActionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProp>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  let buttonText;
  switch (variant) {
    case 'wallet':
      buttonText = 'Connect Wallet';
      break;
    case 'x':
      buttonText = 'Connect X';
      break;
    default:
      buttonText = 'Enter Code';
      break;
  }

  let headerText;
  switch (variant) {
    case 'wallet':
      headerText = 'Connect wallet';
      break;
    case 'x':
      headerText = 'Connect twitter';
      break;
    default:
      headerText = 'Invite code';
      break;
  }

  const onSubmit = (data: FormProp) => {
    action(data.code);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="flex items-center justify-between gap-5 max-w-[621px] ">
        <div className="flex items-center justify-center p-3 rounded-[10px] bg-primary-150">
          {variant === 'wallet' && <WalletAltIcon />}
          {variant === 'x' && <XIcon />}
          {variant === 'code' && <BarcodeIcon />}
        </div>

        <div className="flex flex-col gap-2 items-start">
          <span className="text-[18px] leading-[27px] tracking-[-0.36px] font-medium text-primary-3400">
            {index + 1}. {headerText}
          </span>

          <p className="text-primary-350 text-[14px] leading-[21px] max-w-[317px] md:w-[280px] lg:w-[317px]">
            {variant === 'wallet' && 'Connect your wallet Connect your wallet Connect your wallet Connect your wallet.'}
            {variant === 'x' && 'Connect your wallet Connect your wallet Connect your wallet Connect your wallet.'}
            {variant === 'code' &&
              `You can join our ${(
                <a className="underline" href="https://t.me/+8vDPDkrN_-gwZTA8" target="_blank">
                  Telegram
                </a>
              )} or check our ${(
                <a className="underline" href="https://t.me/+8vDPDkrN_-gwZTA8" target="_blank">
                  Discord
                </a>
              )} server for invite codes`}
          </p>
        </div>
      </div>

      <div className="lg:w-[150px] w-full">
        {variant === 'code' && (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-stretch justify-center gap-3.5">
            <input
              type="text"
              placeholder="Your code"
              className="text-sm tracking-[-0.084px] text-primary-2050 self-stretch py-[10px] pr-[10px] pl-3 bg-white shadow-nav-select-shadow border border-primary-250 rounded-base outline-none"
              {...register('code')}
            />

            <SMButton variant="tertiary" text={buttonText} type="submit" fullWidth />
          </form>
        )}
        {variant !== 'code' && <SMButton variant="tertiary" text={buttonText} onClick={action} fullWidth />}
      </div>
    </div>
  );
};

export default Action;

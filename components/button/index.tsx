import classNames from 'classnames';
import { motion } from 'framer-motion';

import { IButton } from './types';
import { GithubButtonIcon, PlusIcon } from '@/public/icons';
import SMLoader from '../loader';

const SMButton = ({ network, onClick, text, variant = 'git', fullWidth, disabled, type = 'button', loading }: IButton) => {
  let iconColor;
  if (network === 'base' || network === 'optimism' || variant === 'bland-new') {
    iconColor = 'white';
  }
  if (network === 'mode' || network === 'scroll') {
    iconColor = '#242D01';
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      disabled={disabled || loading}
      className={classNames('px-[14px] flex items-center justify-center gap-1 font-Bitform', {
        'border-[0.5px] border-primary-1400': !disabled,
        'bg-primary-150 pointer-events-none border-[0.5px] border-transparent': disabled || loading,
        'bg-base-github-button shadow-base-github-button': network === 'base' && !disabled,
        'bg-optimism-github-button shadow-optimism-github-button': network === 'optimism' && !disabled,
        'bg-mode-github-button shadow-mode-github-button': network === 'mode' && !disabled,
        'bg-scroll-github-button shadow-scroll-github-button': network === 'scroll' && !disabled,
        'bg-primary-1300 shadow-bland-new-button': variant === 'bland-new',
        'bg-primary-3250 shadow-welcome-button': variant === 'tertiary' && !disabled,
        'w-full': fullWidth,
        'rounded-lg py-2': variant === 'tertiary',
        'rounded-base py-[10px]': variant !== 'tertiary',
      })}
      onClick={onClick}>
      {!loading && variant === 'git' && <GithubButtonIcon color={iconColor} />}
      {!loading && (variant === 'new' || variant === 'bland-new') && <PlusIcon color={iconColor} />}

      <div
        className={classNames('font-medium tracking-[-0.084px] text-sm text-center transition-all duration-300 capitalize whitespace-nowrap', {
          'text-white': (network === 'base' || network === 'optimism' || variant === 'bland-new') && !disabled,
          'text-primary-950': (network === 'mode' || network === 'scroll') && !disabled,
          'text-primary-1300': disabled,
          'text-primary-4400': variant === 'tertiary' && !disabled,
        })}>
        {loading ? <SMLoader color="#ffffff" /> : text}
      </div>
    </motion.button>
  );
};

export default SMButton;

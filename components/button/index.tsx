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
      className={classNames('py-[10px] px-[14px] flex items-center justify-center gap-1 rounded-base', {
        'border-[0.5px] border-primary-1400': !disabled,
        'bg-primary-150 pointer-events-none': disabled || loading,
        'bg-base-github-button': network === 'base' && !disabled,
        'bg-optimism-github-button': network === 'optimism' && !disabled,
        'bg-mode-github-button': network === 'mode' && !disabled,
        'bg-scroll-github-button': network === 'scroll' && !disabled,
        'bg-primary-1300': variant === 'bland-new',
        'shadow-base-github-button': network === 'base' && !disabled,
        'shadow-optimism-github-button': network === 'optimism' && !disabled,
        'shadow-mode-github-button': network === 'mode' && !disabled,
        'shadow-scroll-github-button': network === 'scroll' && !disabled,
        'shadow-bland-new-button': variant === 'bland-new',
        'w-full': fullWidth,
      })}
      onClick={onClick}>
      {!loading && variant === 'git' && <GithubButtonIcon color={iconColor} />}
      {!loading && (variant === 'new' || variant === 'bland-new') && <PlusIcon color={iconColor} />}

      <div
        className={classNames('font-medium tracking-[-0.084px] text-sm text-center transition-all duration-300 capitalize whitespace-nowrap', {
          'text-white': network === 'base' || network === 'optimism' || variant === 'bland-new',
          'text-primary-950': network === 'mode' || network === 'scroll',
          'text-primary-1300': disabled,
        })}>
        {loading ? <SMLoader color="#ffffff" /> : text}
      </div>
    </motion.button>
  );
};

export default SMButton;

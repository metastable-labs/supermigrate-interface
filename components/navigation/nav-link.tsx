import { networks } from '@/config/rainbow/config';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useChainId } from 'wagmi';

interface NavLinkProps {
  title: string;
  icon: ReactNode;
  href: string;
  isActive: boolean;
  fullWidth?: boolean;
  comingSoon?: boolean;
}

const NavLink = ({ title, icon, href, isActive, fullWidth, comingSoon }: NavLinkProps) => {
  const { locale } = useSystemFunctions();
  const { comingSoon: comingSoonText } = locale;
  return (
    <Link
      href={href}
      className={classNames('py-2 pl-2 pr-3 rounded-lg transition-all duration-200 flex gap-2 items-center justify-start', {
        'bg-primary-150 text-primary-50': isActive,
        'bg-white text-primary-200': !isActive,
        'w-full': fullWidth,
        'pointer-events-none': comingSoon,
      })}>
      {icon}
      <span className="tracking-[-0.084px] text-sm">{title}</span>
      {comingSoon && (
        <div className="min-h-full flex items-end -m-1">
          <div className="flex items-center px-2 py-[2px] bg-primary-2550 rounded-full text-[8px] leading-[12px] font-medium tracking-[0.16px] capitalize text-white whitespace-nowrap">
            {comingSoonText}
          </div>
        </div>
      )}
    </Link>
  );
};

export default NavLink;

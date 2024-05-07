import { networks } from '@/config/rainbow/config';
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
}

const NavLink = ({ title, icon, href, isActive, fullWidth }: NavLinkProps) => {
  const chainId = useChainId();

  const connectedNetwork = networks.find((chain) => chain.chainId === chainId);

  const network = connectedNetwork?.variant;

  let link = href;
  if (href === '/migrate' && network) {
    link = `${href}/${network}`;
  }

  return (
    <Link
      href={link}
      className={classNames('py-2 pl-2 pr-3 rounded-lg transition-all duration-200 flex gap-2 items-center justify-start', {
        'bg-primary-150 text-primary-50': isActive,
        'bg-white text-primary-200': !isActive,
        'w-full': fullWidth,
      })}>
      {icon}
      <span className="tracking-[-0.084px] text-sm">{title}</span>
    </Link>
  );
};

export default NavLink;

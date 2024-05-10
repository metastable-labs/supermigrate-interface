import { Logo } from '@/public/icons';
import NavLink from './nav-link';
import { INavLinks } from './types';
import Link from 'next/link';

const Left = ({ links }: { links: INavLinks }) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Link href="/dashboard" className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center md:w-10 md:h-10">
        <Logo />
      </Link>

      <div className="gap-1 md:flex items-center justify-center hidden">
        {links?.map((link) => (
          <NavLink key={link.title} title={link.title} href={link.href} isActive={link.isActive} icon={link.icon} comingSoon={link.comingSoon} />
        ))}
      </div>
    </div>
  );
};

export default Left;

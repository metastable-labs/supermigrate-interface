import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  title: string;
  icon: ReactNode;
  href: string;
  isActive: boolean;
  fullWidth?: boolean;
}

const NavLink = ({ title, icon, href, isActive, fullWidth }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        "py-2 pl-2 pr-3 rounded-lg transition-all duration-200 flex gap-2 items-center justify-start",
        {
          "bg-primary-150 text-primary-50": isActive,
          "bg-white text-primary-200": !isActive,
          "w-full": fullWidth,
        }
      )}
    >
      {icon}
      <span className="tracking-[-0.084px] text-sm">{title}</span>
    </Link>
  );
};

export default NavLink;

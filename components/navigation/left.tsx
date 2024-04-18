import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

import {
  SMLogo,
  BridgeLinkIcon,
  LiquidityLinkIcon,
  MigrateLinkIcon,
} from "@/public/icons";

const links = [
  {
    title: "Migrate",
    icon: <MigrateLinkIcon />,
    href: "/migrate",
    isActive: false,
  },
  {
    title: "Bridge",
    icon: <BridgeLinkIcon />,
    href: "/bridge",
    isActive: false,
  },
  {
    title: "Liquidity",
    icon: <LiquidityLinkIcon />,
    href: "/liquidity",
    isActive: false,
  },
];

interface LinkCardProps {
  title: string;
  icon: ReactNode;
  href: string;
  isActive: boolean;
}

const LinkCard = ({ title, icon, href, isActive }: LinkCardProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        "py-2 pl-2 pr-3 rounded-lg transition-all duration-200 flex gap-2 items-center justify-center",
        {
          "bg-primary-150 text-primary-50": isActive,
          "bg-white text-primary-200": !isActive,
        }
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

const Left = () => {
  const pathname = usePathname();

  const updatedLinks = links.map((link) => {
    const regex = new RegExp(`^/[a-z]{2}${link.href}`);
    return {
      ...link,
      isActive: regex.test(pathname),
    };
  });

  return (
    <div className="flex items-center justify-center gap-6">
      <SMLogo />

      <div className="gap-1 md:flex items-center justify-center hidden">
        {updatedLinks.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            href={link.href}
            isActive={link.isActive}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Left;

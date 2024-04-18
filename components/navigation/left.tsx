import { usePathname } from "next/navigation";

import { SMLogo } from "@/public/icons";
import NavLink from "./nav-link";
import { INavLinks } from "./types";

const Left = ({ links }: { links: INavLinks }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-6">
      <SMLogo />

      <div className="gap-1 md:flex items-center justify-center hidden">
        {links?.map((link) => (
          <NavLink
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

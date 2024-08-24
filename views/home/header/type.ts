type NavLink = {
  name: string;
  href: string;
  download?: boolean;
};

interface MenuProps {
  menuOpen: boolean;
  links: NavLink[];
}

export type { NavLink, MenuProps };

type NavLink = {
  name: string;
  href: string;
};

interface MenuProps {
  menuOpen: boolean;
  links: NavLink[];
}

export type { NavLink, MenuProps };

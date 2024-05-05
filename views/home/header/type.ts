type NavLink = {
  name: string;
  href: string;
};

interface MenuProps {
  menuOpen: boolean;
  links: NavLink[];
  action: () => void;
  isTop: boolean;
}

export type { NavLink, MenuProps };

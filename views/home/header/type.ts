type NavLink = {
  name: string;
  href: string;
};

interface MenuProps {
  menuOpen: boolean;
  links: NavLink[];
  action: () => void;
}

export type { NavLink, MenuProps };

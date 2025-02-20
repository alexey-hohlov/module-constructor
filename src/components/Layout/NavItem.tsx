import { NavLink } from 'react-router';

interface Props {
  path: string;
  title: string;
}

const NavItem: React.FC<Props> = ({ path, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-medium p-2 rounded-lg ${isActive ? 'bg-teal-600/15 text-teal-600' : 'text-gray-500'}`
      }
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;

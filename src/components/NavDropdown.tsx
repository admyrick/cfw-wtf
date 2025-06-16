import React from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  icon?: React.ReactNode;
  label: string;
  href?: string;
}

interface NavDropdownProps {
  items: NavItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  return (
    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href || '#'}
            className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
            role="menuitem"
          >
            {item.icon && <span className="mr-3">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
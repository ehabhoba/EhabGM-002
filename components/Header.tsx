import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, CONTACT_LINK } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              EhabGM<span className="text-gray-700">.</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} to={link.path} className={navLinkClasses}>
                  {link.name}
                </NavLink>
              ))}
              <Link
                to={CONTACT_LINK.path}
                className="ml-4 py-2 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                {CONTACT_LINK.name}
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to={CONTACT_LINK.path}
              className="block w-full text-left mt-2 py-2 px-4 bg-indigo-600 text-white rounded-md text-base font-medium hover:bg-indigo-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {CONTACT_LINK.name}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

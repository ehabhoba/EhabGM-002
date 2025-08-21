
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_CONFIG, CONTACT_LINK } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';
import { NavItem } from '../types';

const NavLinks: React.FC<{ isMobile?: boolean; closeMenu?: () => void }> = ({ isMobile = false, closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleLinkClick = (item: NavItem) => {
    if (closeMenu) {
      closeMenu();
    }
  };

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav className={isMobile ? 'space-y-1' : 'flex items-baseline space-x-1'}>
      {NAV_CONFIG.map((item) => (
        <div key={item.name} className={isMobile ? 'relative' : 'relative group'}>
          {item.children ? (
            <>
              <button
                onClick={() => isMobile && toggleDropdown(item.name)}
                onMouseEnter={() => !isMobile && setOpenDropdown(item.name)}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
                className={isMobile 
                  ? "w-full flex justify-between items-center py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
                  : "py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors flex items-center"
                }
              >
                {item.name}
                <svg className={`h-5 w-5 ml-1 transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Desktop Dropdown */}
              {!isMobile && (
                <div 
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={`absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20 transition-all duration-200 ease-out origin-top-right ${openDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="py-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.name}
                        to={child.path!}
                        onClick={() => handleLinkClick(child)}
                        className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
              {/* Mobile Dropdown */}
              {isMobile && openDropdown === item.name && (
                <div className="pl-4 mt-1 space-y-1">
                   {item.children.map((child) => (
                    <NavLink
                      key={child.name}
                      to={child.path!}
                      onClick={() => handleLinkClick(child)}
                      className={({ isActive }) => `block py-2 px-3 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                    >
                      - {child.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavLink
              to={item.path!}
              onClick={() => handleLinkClick(item)}
              className={({ isActive }) => isMobile
                ? `block py-2 px-3 rounded-md text-base font-medium ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`
                : `py-2 px-3 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`
              }
            >
              {item.name}
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              EhabGM<span className="text-gray-700">.</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <NavLinks />
             <Link
                to={CONTACT_LINK.path}
                className="mr-4 py-2 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                {CONTACT_LINK.name}
              </Link>
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
            <NavLinks isMobile={true} closeMenu={() => setIsOpen(false)} />
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

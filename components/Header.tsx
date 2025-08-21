
import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_CONFIG, CONTACT_LINK, LOGO_URL, PAGES_DATA, BLOG_POSTS } from '../constants';
import { MenuIcon, XIcon, SearchIcon, SunIcon, MoonIcon } from './IconComponents';
import type { NavItem, SearchResult } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  
  const allContent = useMemo(() => [
      ...Object.entries(PAGES_DATA).map(([slug, data]) => ({
          title: data.title,
          excerpt: data.description,
          link: `/page/${slug}`,
          type: 'خدمة' as 'خدمة'
      })),
      ...BLOG_POSTS.map(post => ({
          title: post.title,
          excerpt: post.excerpt,
          link: `/blog/${post.slug}`,
          type: 'مقال' as 'مقال'
      }))
  ], []);

  const results: SearchResult[] = useMemo(() => {
    if (query.trim().length < 2) return [];
    const lowerCaseQuery = query.toLowerCase();
    return allContent.filter(item =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.excerpt.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query, allContent]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-20" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl mx-4" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b dark:border-gray-700">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="اكتب هنا للبحث في الموقع..."
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            autoFocus
          />
        </div>
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map(result => (
              <Link to={result.link} key={result.link} onClick={onClose} className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-700">
                <div className="flex justify-between items-center">
                   <h3 className="font-semibold text-gray-800 dark:text-gray-100">{result.title}</h3>
                   <span className="text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full">{result.type}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{result.excerpt}</p>
              </Link>
            ))
          ) : (
            query.length > 1 && <p className="p-4 text-center text-gray-500 dark:text-gray-400">لا توجد نتائج بحث.</p>
          )}
        </div>
      </div>
    </div>
  );
};


const NavLinks: React.FC<{ isMobile?: boolean; closeMenu?: () => void }> = ({ isMobile = false, closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleLinkClick = () => {
    if (closeMenu) closeMenu();
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
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
                  ? "w-full flex justify-between items-center py-2 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "py-2 px-3 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                }
              >
                {item.name}
                <svg className={`h-5 w-5 ml-1 transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {!isMobile && (
                <div 
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={`absolute top-full right-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20 transition-all duration-200 ease-out origin-top-right ${openDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="py-1">
                    {item.children.map((child) => (
                      <NavLink key={child.name} to={child.path!} onClick={handleLinkClick}
                        className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}>
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
              {isMobile && openDropdown === item.name && (
                <div className="pl-4 mt-1 space-y-1">
                   {item.children.map((child) => (
                    <NavLink key={child.name} to={child.path!} onClick={handleLinkClick}
                      className={({ isActive }) => `block py-2 px-3 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                      - {child.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavLink to={item.path!} onClick={handleLinkClick}
              className={({ isActive }) => isMobile
                ? `block py-2 px-3 rounded-md text-base font-medium ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                : `py-2 px-3 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
              }>
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={LOGO_URL} alt="EhabGM Online Services Logo" className="h-14 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex md:items-center">
              <NavLinks />
              <div className="flex items-center mr-4 space-x-2 space-x-reverse">
                 <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <SearchIcon className="h-5 w-5"/>
                 </button>
                 <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {theme === 'light' ? <MoonIcon className="h-5 w-5"/> : <SunIcon className="h-5 w-5"/>}
                 </button>
                 <Link
                    to={CONTACT_LINK.path}
                    className="py-2 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    {CONTACT_LINK.name}
                  </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <SearchIcon className="h-5 w-5"/>
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  {theme === 'light' ? <MoonIcon className="h-5 w-5"/> : <SunIcon className="h-5 w-5"/>}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
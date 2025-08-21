import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              EhabGM<span className="text-gray-700">.</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              شريكك الرقمي المتكامل للنجاح. نقدم حلولاً إبداعية لعلامتك التجارية.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">روابط سريعة</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">تواصل معنا</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="tel:+201022679250" className="text-gray-500 hover:text-indigo-600 transition-colors">01022679250</a></li>
              <li><a href="mailto:contact@ehabgm.online" className="text-gray-500 hover:text-indigo-600 transition-colors">contact@ehabgm.online</a></li>
              <li><p className="text-gray-500">حلوان، القاهرة، مصر</p></li>
            </ul>
          </div>
           <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">تابعنا</h3>
            <div className="flex mt-4 space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ EhabGM Online Services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

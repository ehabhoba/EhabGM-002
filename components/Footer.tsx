import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, WEBSITE_LINKS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="md:col-span-1">
            <Link to="/">
              <img src={LOGO_URL} alt="EhabGM Online Services Logo" className="h-14 w-auto" />
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              وكالة تسويق رقمي متكاملة. نساعد الشركات على النمو والنجاح عبر الإنترنت بحلول تسويقية مبتكرة ومدروسة.
            </p>
             <div className="flex mt-6 space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">روابط سريعة</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600 text-sm">من نحن</Link></li>
              <li><Link to="/portfolio" className="text-gray-500 hover:text-indigo-600 text-sm">أعمالنا</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-indigo-600 text-sm">الأسعار</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-indigo-600 text-sm">المدونة</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600 text-sm">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Important Links */}
           <div>
            <h3 className="text-lg font-semibold text-gray-800">روابط هامة</h3>
            <ul className="mt-4 space-y-2">
                {WEBSITE_LINKS.map((link) => (
                    <li key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-indigo-600 text-sm">
                           {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5 ml-2"})}
                           {link.name}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">تواصل معنا</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="tel:+201022679250" className="text-gray-500 hover:text-indigo-600">01022679250</a></li>
              <li><a href="https://wa.me/201022679250" className="text-gray-500 hover:text-indigo-600">واتساب مباشر</a></li>
              <li><a href="mailto:info@ehabgm.online" className="text-gray-500 hover:text-indigo-600">info@ehabgm.online</a></li>
              <li><p className="text-gray-500">حلوان، القاهرة، مصر</p></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ EhabGM Online Services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
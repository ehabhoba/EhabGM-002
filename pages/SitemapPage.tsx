
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, NAV_CONFIG } from '../constants';
import PageMetadata from '../components/PageMetadata';

const SitemapPage: React.FC = () => {
    
  const mainPages = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'معرض الأعمال', path: '/portfolio' },
    { name: 'الأسعار', path: '/pricing' },
    { name: 'المدونة', path: '/blog' },
    { name: 'أدوات AI', path: '/ai-tools' },
    { name: 'الأسئلة الشائعة', path: '/faq' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const programmingPages = NAV_CONFIG.find(item => item.name === 'البرمجة والتطوير')?.children || [];
  const marketingPages = NAV_CONFIG.find(item => item.name === 'التسويق الإلكتروني')?.children || [];
  const designPages = NAV_CONFIG.find(item => item.name === 'تصميم الجرافيك')?.children || [];

  return (
    <>
      <PageMetadata 
        title="خريطة الموقع | EhabGM Online Services" 
        description="تصفح جميع صفحات وخدمات ومقالات موقع EhabGM Online Services من خلال خريطة الموقع المنظمة."
        keywords="خريطة الموقع, روابط الموقع, جميع الصفحات, خدمات, مقالات"
      />
      <div className="animate-fade-in bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">خريطة الموقع</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              دليلك الكامل للتنقل في جميع أقسام موقعنا بسهولة.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Main Pages Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-r-4 border-indigo-600 pr-4 text-gray-900 dark:text-white">الصفحات الرئيسية</h2>
              <ul className="space-y-3">
                {mainPages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Section */}
            <div className="space-y-4">
               <h2 className="text-2xl font-bold border-r-4 border-indigo-600 pr-4 text-gray-900 dark:text-white">خدماتنا</h2>
               <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">البرمجة والتطوير</h3>
                    <ul className="mt-2 space-y-2">
                        {programmingPages.map(page => (
                            <li key={page.path}><Link to={page.path!} className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{page.name}</Link></li>
                        ))}
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">التسويق الإلكتروني</h3>
                    <ul className="mt-2 space-y-2">
                        {marketingPages.map(page => (
                            <li key={page.path}><Link to={page.path!} className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{page.name}</Link></li>
                        ))}
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">تصميم الجرافيك</h3>
                    <ul className="mt-2 space-y-2">
                        {designPages.map(page => (
                            <li key={page.path}><Link to={page.path!} className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{page.name}</Link></li>
                        ))}
                    </ul>
                  </div>
               </div>
            </div>

            {/* Blog Posts Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-r-4 border-indigo-600 pr-4 text-gray-900 dark:text-white">أحدث المقالات</h2>
              <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {BLOG_POSTS.map(post => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
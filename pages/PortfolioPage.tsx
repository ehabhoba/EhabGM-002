import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PORTFOLIO_PAGE_META } from '../constants';
import { XIcon } from '../components/IconComponents';
import { PortfolioItem } from '../types';
import PageMetadata from '../components/PageMetadata';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'الكل') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
    <PageMetadata 
      title={PORTFOLIO_PAGE_META.title}
      description={PORTFOLIO_PAGE_META.description}
      keywords={PORTFOLIO_PAGE_META.keywords}
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">أعمالنا المميزة</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            مشاريع نفخر بإنجازها. اكتشف كيف ساعدنا عملاءنا في تحقيق نتائج استثنائية وزيادة أرباحهم.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.image_url} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-xs font-semibold bg-indigo-600 px-2 py-1 rounded">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-auto shadow-2xl transform transition-all animate-zoom-in max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selectedItem.image_url} alt={selectedItem.title} className="w-full h-auto max-h-[50vh] object-cover rounded-t-lg" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/50 dark:bg-gray-900/50 p-2 rounded-full text-gray-800 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-900 transition"
              >
                <XIcon />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedItem.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedItem.tags?.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{selectedItem.description}</p>
              {selectedItem.stats && selectedItem.stats.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t border-gray-200 dark:border-gray-700 pt-4">
                  {selectedItem.stats.map(stat => (
                      <div key={stat.label}>
                          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      </div>
                  ))}
                </div>
              )}
               {selectedItem.serviceSlug && (
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <Link 
                    to={`/page/${selectedItem.serviceSlug}`} 
                    onClick={() => setSelectedItem(null)}
                    className="inline-block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900/80"
                  >
                    اكتشف الخدمة المقدمة
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PortfolioPage;
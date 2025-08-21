
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_PAGE_META } from '../constants';
import PageMetadata from '../components/PageMetadata';
import { CalendarIcon, UserIcon } from '../components/IconComponents';

const BlogPage: React.FC = () => {
  return (
    <>
      <PageMetadata
        title={BLOG_PAGE_META.title}
        description={BLOG_PAGE_META.description}
        keywords={BLOG_PAGE_META.keywords}
      />
      <div className="animate-fade-in">
        {/* Page Header */}
        <section className="bg-white dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">المدونة</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              نصائح وأفكار من خبرائنا لمساعدتك على النجاح في العالم الرقمي.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div key={post.slug} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-1 transition-transform duration-300">
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                    <img src={post.heroImage} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 flex-grow">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
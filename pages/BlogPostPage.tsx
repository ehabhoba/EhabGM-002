import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import PageMetadata from '../components/PageMetadata';
import { CalendarIcon, UserIcon } from '../components/IconComponents';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    React.useEffect(() => {
        navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <>
      <PageMetadata
        title={post.meta.title}
        description={post.meta.description}
        keywords={post.meta.keywords}
      />
      <div className="animate-fade-in">
        <article className="bg-white">
          <header className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">{post.title}</h1>
              <div className="mt-6 flex items-center justify-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <img src={post.heroImage} alt={post.title} className="w-full h-auto max-h-[60vh] object-cover rounded-lg shadow-lg my-8" />
          </div>

          <div 
            className="prose prose-lg lg:prose-xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
        
        {/* CTA Section */}
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">هل أعجبك المقال؟</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  تواصل معنا لنرى كيف يمكننا تطبيق هذه الأفكار لنجاح مشروعك.
                </p>
                <div className="mt-8">
                <Link 
                    to="/contact" 
                    className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
                >
                    اطلب استشارة مجانية
                </Link>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage;
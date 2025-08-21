import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS, LOGO_URL, PAGES_DATA } from '../constants';
import PageMetadata from '../components/PageMetadata';
import { CalendarIcon, UserIcon, MegaphoneIcon } from '../components/IconComponents';

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

  const relatedServices = (post.relatedServicesSlugs || [])
    .map(slug => ({ slug, ...PAGES_DATA[slug] }))
    .filter(s => s.title);

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ehabonlineservice.online/#/blog/${slug}`
    },
    "headline": post.title,
    "image": post.heroImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "EhabGM Online Services",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "datePublished": post.created_at,
    "dateModified": post.created_at,
    "description": post.excerpt
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://ehabonlineservice.online/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": "https://ehabonlineservice.online/#/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
      }
    ]
  };

  return (
    <>
      <PageMetadata
        title={post.meta.title}
        description={post.meta.description}
        keywords={post.meta.keywords}
        schema={[postSchema, breadcrumbSchema]}
      />
      <div className="animate-fade-in">
        <article className="bg-white dark:bg-gray-900">
          <header className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{post.title}</h1>
              <div className="mt-6 flex items-center justify-center space-x-6 text-gray-500 dark:text-gray-400">
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
            className="prose prose-lg lg:prose-xl dark:prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/<h3/g, '<h3 class="dark:text-gray-200"') }}
          />

        </article>
        
        {/* Related Services */}
        {relatedServices.length > 0 && (
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">خدمات ذات صلة بالمقال</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedServices.map(service => (
                            <div key={service.slug} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                                <Link to={`/page/${service.slug}`} className="mt-4 inline-block font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                    اعرف المزيد &larr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* CTA Section */}
        <section className="bg-indigo-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-3xl font-extrabold text-white">هل ألهمك هذا المقال؟</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
                  دعنا نرى كيف يمكننا تطبيق هذه الأفكار والاستراتيجيات لنجاح مشروعك. تواصل معنا الآن.
                </p>
                <div className="mt-8">
                <Link 
                    to="/contact" 
                    className="inline-block px-10 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
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
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PAGES_DATA, PORTFOLIO_ITEMS, BLOG_POSTS } from '../constants';
import { CheckCircleIcon, PlusIcon, MinusIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';
import type { PortfolioItem, BlogPost } from '../types';

const AccordionItem: React.FC<{ item: { question: string; answer: string; }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-right font-semibold text-lg text-gray-800 dark:text-gray-100"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {isOpen ? <MinusIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /> : <PlusIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
          <div className="overflow-hidden">
            <p className="pb-4 pr-2 text-gray-600 dark:text-gray-300">
            {item.answer}
            </p>
          </div>
      </div>
    </div>
  );
};

const ContentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageContent = slug ? PAGES_DATA[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaqIndex(0); // Reset FAQ state on page change
  }, [slug]);

  if (!pageContent) {
    useEffect(() => {
        navigate('/');
    }, [navigate]);
    return null;
  }

  const { title, description, heroImage, features, cta, meta, whyChooseUs, process, faq, relatedPortfolioSlug, relatedServicesSlugs, relatedPostsSlugs } = pageContent;

  const relatedPortfolioItem = PORTFOLIO_ITEMS.find(item => item.id === relatedPortfolioSlug);
  const relatedServices = (relatedServicesSlugs || []).map(slug => ({ slug, ...PAGES_DATA[slug] })).filter(s => s.title);
  const relatedPosts = (relatedPostsSlugs || []).map(slug => BLOG_POSTS.find(p => p.slug === slug)).filter((p): p is BlogPost => !!p);


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": title,
    "provider": {
      "@type": "Organization",
      "name": "EhabGM Online Services",
      "url": "https://ehabonlineservice.online/"
    },
    "name": meta.title,
    "description": meta.description,
    "areaServed": {
        "@type": "Country",
        "name": "Egypt"
    },
    ...(faq && {
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": faq.items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    })
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
        "name": title,
        "item": `https://ehabonlineservice.online/#/page/${slug}`
      }
    ]
  };

  return (
    <>
      <PageMetadata 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        schema={[serviceSchema, breadcrumbSchema]}
      />
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20 md:py-32">
          <div className="absolute inset-0">
            <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">{description}</p>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">{features.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.list.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon />
                    </div>
                    <div className="mr-4">
                      <p className="text-lg text-gray-700 dark:text-gray-300">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {whyChooseUs && (
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{whyChooseUs.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {whyChooseUs.points.map(point => (
                        <div key={point.title} className="p-6">
                            <div className="flex justify-center mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{point.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{point.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        )}
        
        {/* Process Section */}
        {process && (
             <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{process.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {process.steps.map(item => (
                        <div key={item.step} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                            <div className="flex-shrink-0 mr-4">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white font-bold text-xl">{item.step}</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        )}

        {/* Related Portfolio & FAQ Section */}
        {(relatedPortfolioItem || faq) && (
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                       {/* Related Portfolio */}
                        {relatedPortfolioItem && (
                             <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">دراسة حالة: مشروع ذو صلة</h2>
                                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden group">
                                    <img src={relatedPortfolioItem.image_url} alt={relatedPortfolioItem.title} className="w-full h-64 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{relatedPortfolioItem.title}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{relatedPortfolioItem.description}</p>
                                        <Link to="/portfolio" className="mt-4 inline-block font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                           شاهد كل أعمالنا &larr;
                                        </Link>
                                    </div>
                                </div>
                             </div>
                        )}
                        {/* FAQ */}
                        {faq && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{faq.title}</h2>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl">
                                    {faq.items.map((item, index) => (
                                        <AccordionItem 
                                            key={index} 
                                            item={item} 
                                            isOpen={openFaqIndex === index} 
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )}

        {/* Related Services & Posts */}
        {(relatedServices.length > 0 || relatedPosts.length > 0) && (
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">اكتشف المزيد</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {relatedServices.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">خدمات أخرى قد تهمك</h3>
                                <ul className="space-y-3">
                                    {relatedServices.map(service => (
                                        <li key={service.slug} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            <Link to={`/page/${service.slug}`} className="font-semibold text-indigo-700 dark:text-indigo-300">{service.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                         {relatedPosts.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">مقالات ذات صلة</h3>
                                <ul className="space-y-3">
                                    {relatedPosts.map(post => (
                                        <li key={post.slug} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            <Link to={`/blog/${post.slug}`} className="font-semibold text-indigo-700 dark:text-indigo-300">{post.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )}


        {/* CTA Section */}
        <section className="bg-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-white">{cta.title}</h2>
            <div className="mt-8">
              <a 
                  href={cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
              >
                {cta.buttonText}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentPage;
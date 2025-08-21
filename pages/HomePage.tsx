import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO_ITEMS, TRUST_POINTS, TESTIMONIALS, STATISTICS, BLOG_POSTS, HOME_PAGE_META, LOGO_URL, SOCIAL_LINKS } from '../constants';
import { CheckCircleIcon, CalendarIcon, UserIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';

const HomePage: React.FC = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);
  const whatsappLink = `https://wa.me/201022679250?text=${encodeURIComponent('أهلاً EhabGM، أرغب في الحصول على استشارة تسويقية مجانية.')}`;


  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EhabGM Online Services",
    "url": "https://ehabonlineservice.online/",
    "logo": LOGO_URL,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201022679250",
      "contactType": "customer service"
    },
    "sameAs": SOCIAL_LINKS.map(link => link.url)
  };

  return (
    <>
    <PageMetadata 
      title={HOME_PAGE_META.title}
      description={HOME_PAGE_META.description}
      keywords={HOME_PAGE_META.keywords}
      schema={homeSchema}
    />
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            نضاعف مبيعاتك خلال 90 يوم <br/> أو <span className="text-indigo-600 dark:text-indigo-400">تسترد أموالك!</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            وكالة ehabgm للتسويق الرقمي – شركاؤك في النجاح من قلب حلوان إلى أي مكان في العالم. نقدم حلول تسويق رقمي متكاملة تساعدك على جذب العملاء وزيادة المبيعات.
          </p>
          <div className="mt-8 flex justify-center space-x-4 space-x-reverse">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
              احصل على استشارة مجانية
            </a>
            <Link to="/portfolio" className="px-8 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105">
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {STATISTICS.map(stat => (
                    <div key={stat.label}>
                        <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">خدماتنا المتميزة</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">حلول تسويق رقمي شاملة لمساعدة مشروعك على النمو والوصول لأهدافه.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.title} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl dark:hover:shadow-indigo-500/10 transition-shadow transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
                <Link to={service.link} className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300">
                  اعرف المزيد &larr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">أعمالنا المميزة</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">اكتشف كيف ساعدنا عملاءنا في تحقيق نتائج استثنائية وزيادة أرباحهم.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map(item => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={item.image_url} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-bold text-xl text-white">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags?.map(tag => (
                          <span key={tag} className="text-xs font-semibold bg-indigo-600 text-white px-2 py-1 rounded">{tag}</span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
              تصفح كل الأعمال
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">لماذا يثق بنا العملاء؟</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">نحن نبني الثقة من خلال النتائج المحققة والشفافية الكاملة في التعامل.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_POINTS.map(feature => (
              <div key={feature.title} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon />
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">ماذا يقول عملاؤنا عنا؟</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">نفتخر بثقة عملائنا ونسعى دائماً لتحقيق توقعاتهم وتجاوزها.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map(testimonial => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="mr-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company} - {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">أحدث المقالات</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">نصائح وأفكار من خبرائنا لمساعدتك على النجاح في العالم الرقمي.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                    <div key={post.slug} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                        <Link to={`/blog/${post.slug}`}>
                            <img src={post.heroImage} alt={post.title} className="w-full h-56 object-cover hover:opacity-90 transition-opacity" />
                        </Link>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">{post.excerpt}</p>
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                    <UserIcon className="h-4 w-4 mr-1.5" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center">
                                    <CalendarIcon className="h-4 w-4 mr-1.5" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/blog" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
                    اقرأ كل المقالات
                </Link>
            </div>
        </div>
    </section>

      {/* Final CTA */}
       <section className="bg-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">جاهز تبدأ مشروعك؟</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
            احجز استشارة مجانية دلوقتي وخلينا نساعدك تحقق أهدافك التسويقية.
          </p>
          <div className="mt-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
              احجز استشارتك المجانية الآن
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
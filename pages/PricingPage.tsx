
import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PACKAGES } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';

const PricingPage: React.FC = () => {
  return (
    <>
    <PageMetadata 
      title="أسعار وباقات التسويق الرقمي | باقات السوشيال ميديا"
      description="اكتشف أفضل أسعار وباقات إدارة السوشيال ميديا والإعلانات الممولة في مصر. اختر الباقة التي تناسب ميزانيتك وأهدافك لتحقيق أفضل النتائج."
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">باقات أسعار واضحة ومرنة</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            اختر الباقة اللي تناسب حجم البيزنس بتاعك وأهدافك التسويقية. كل باقاتنا مصممة عشان تحققلك أفضل النتايج.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-2 ${pkg.isPopular ? 'border-2 border-indigo-600' : 'border'}`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    الأكثر شيوعًا
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 text-center">{pkg.title}</h3>
                <p className="mt-2 text-gray-500 text-center h-12">{pkg.description}</p>
                <div className="mt-6 text-center">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-base font-medium text-gray-500"> جنيه/{pkg.priceDetails}</span>
                </div>
                <ul className="mt-8 space-y-4 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon />
                      </div>
                      <span className="mr-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${pkg.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
                  >
                    {pkg.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Custom Plan CTA */}
       <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">محتاج خطة على مقاسك؟</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            لو عندك متطلبات خاصة، كلمنا وممكن نصمم باقة مخصصة تناسب مشروعك الفريد وميزانيتك.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105">
              تحدث مع خبير
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PricingPage;

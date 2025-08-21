import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PACKAGES, GRAPHIC_DESIGN_PRICES, PRICING_PAGE_META } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';
import { PricingPackage } from '../types';

const PricingCard: React.FC<{pkg: PricingPackage}> = ({ pkg }) => (
  <div 
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
      {pkg.priceDetails && <span className="text-base font-medium text-gray-500"> جنيه/{pkg.priceDetails}</span>}
      {!pkg.priceDetails && <span className="text-base font-medium text-gray-500"> جنيه</span>}
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
);

const PricingPage: React.FC = () => {
  const monthlyPackages = PRICING_PACKAGES.filter(p => p.category === 'monthly');
  const singlePackages = PRICING_PACKAGES.filter(p => p.category === 'single');
  const campaignPackages = PRICING_PACKAGES.filter(p => p.category === 'campaign');

  return (
    <>
    <PageMetadata 
      title={PRICING_PAGE_META.title}
      description={PRICING_PAGE_META.description}
      keywords={PRICING_PAGE_META.keywords}
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">أسعار شفافة تناسب الجميع</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            باقات متنوعة مصممة لتلبية احتياجات رواد الأعمال والمشاريع الصغيرة والمتوسطة. اختر ما يناسبك.
          </p>
        </div>
      </section>

      {/* Graphic Design Pricing Table */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">قائمة أسعار خدمات التصميم الجرافيكي</h2>
                <p className="mt-2 text-gray-600">أسعار تنافسية لتصميمات إبداعية واحترافية.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">الخدمة / الصنف</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">السعر</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">تفاصيل الخدمة</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {GRAPHIC_DESIGN_PRICES.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.service}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-600 font-semibold">{item.price}</td>
                                    <td className="px-6 py-4 text-gray-500">{item.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             <p className="text-center mt-4 text-sm text-gray-500">💡 الأسعار تقريبية وقد تختلف بحسب تفاصيل المشروع. خصومات خاصة متاحة للباقات.</p>
        </div>
      </section>


      {/* Marketing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">باقات إدارة الصفحات والحملات الإعلانية</h2>
            <p className="mt-2 text-gray-600">لإدارة متكاملة لحساباتك على السوشيال ميديا وتحقيق أفضل النتائج.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {monthlyPackages.map((pkg, index) => <PricingCard key={index} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* Single Ad & Campaign Pricing */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">سعر الإعلان الممول الواحد</h2>
                         <p className="mt-2 text-gray-600">للوصول السريع والمباشر لجمهورك.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 items-stretch">
                         {singlePackages.map((pkg, index) => <PricingCard key={index} pkg={pkg} />)}
                    </div>
                </div>
                 <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">أسعار الحملات الإعلانية</h2>
                         <p className="mt-2 text-gray-600">لتحقيق أهداف تسويقية محددة بحملات متكاملة.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 items-stretch">
                         {campaignPackages.map((pkg, index) => <PricingCard key={index} pkg={pkg} />)}
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Custom Plan CTA */}
       <section className="bg-gray-50">
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
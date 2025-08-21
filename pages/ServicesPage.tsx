
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">خدماتنا المتميزة</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            حلول تسويق رقمي شاملة من حلوان، القاهرة لمساعدة مشروعك على النمو والوصول لأهدافه.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon />
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <img src={`https://picsum.photos/seed/service${index}/600/400`} alt={service.title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* Final CTA */}
       <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">لديك مشروع في ذهنك؟</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            نحن هنا لنساعدك على تحويل أفكارك إلى حقيقة. تواصل معنا اليوم لمناقشة مشروعك.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
              اطلب عرض سعر الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

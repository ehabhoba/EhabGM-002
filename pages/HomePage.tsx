import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO_ITEMS, WHY_CHOOSE_US, TESTIMONIALS } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            شريكك الرقمي المتكامل <span className="text-indigo-600">للنجاح</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            نقدم خدمات التصميم الجرافيكي، التسويق الرقمي، وتطوير المواقع لمساعدتك على النمو والانتشار في السوق المصري والخليجي.
          </p>
          <div className="mt-8 flex justify-center space-x-4 space-x-reverse">
            <Link to="/services" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
              اكتشف خدماتنا
            </Link>
            <Link to="/portfolio" className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105">
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">خدماتنا المتكاملة</h2>
            <p className="mt-4 text-lg text-gray-600">كل ما تحتاجه علامتك التجارية في مكان واحد.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <Link to={service.link} className="mt-6 inline-block text-indigo-600 font-semibold hover:text-indigo-800">
                  اعرف المزيد &larr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">شاهد إبداعاتنا</h2>
            <p className="mt-4 text-lg text-gray-600">نماذج من أعمالنا التي نفخر بها.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.slice(0, 4).map(item => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">لماذا تختار EhabGM؟</h2>
            <p className="mt-4 text-lg text-gray-600">نحن نجمع بين الإبداع، الخبرة، والالتزام.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map(feature => (
              <div key={feature.title} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">آراء عملائنا</h2>
            <p className="mt-4 text-lg text-gray-600">شهادات نعتز بها من شركاء نجاحنا.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
       <section className="bg-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">هل أنت جاهز لتبدأ مشروعك؟</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
            دعنا نساعدك في تحقيق أهدافك الرقمية. تواصل معنا الآن للحصول على استشارة.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
              تواصل معنا الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

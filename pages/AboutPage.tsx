import React from 'react';
import { VALUES, PROCESS_STEPS, PAGES_DATA } from '../constants';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const AboutPage: React.FC = () => {
  const pageContent = PAGES_DATA['our-story'];

  return (
    <>
    <PageMetadata 
      title={pageContent.meta.title}
      description={pageContent.meta.description}
      keywords={pageContent.meta.keywords}
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{pageContent.title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            حلول متكاملة في المجالات الرقمية. الخيار الأمثل للأفراد والشركات الباحثين عن خدمات إبداعية احترافية بأسعار تنافسية ودعم متواصل.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src={pageContent.heroImage}
                alt="إيهاب محمد - مؤسس وكالة EhabGM" 
                className="rounded-lg shadow-2xl w-full max-w-sm mx-auto h-auto object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-6">إيهاب محمد</h3>
              <p className="text-indigo-600 font-semibold">مؤسس | مصمم جرافيك ومتخصص تسويق رقمي</p>
              <p className="text-gray-500 text-sm mt-1">القاهرة، مصر</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">من فكرة إلى وكالة رائدة</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                <span className="font-bold text-indigo-600">EhabGM</span> هي منصة شاملة تقدم حلولاً متكاملة في المجالات الرقمية. بدأت EhabGM بشغف لمساعدة الشركات الصغيرة على النجاح في العالم الرقمي، ونحن نؤمن بأن النجاح يتطلب شريكًا يفهم السوق ويقدم حلولاً إبداعية تليق بطموحك.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                نحن هنا لنكون شريك نجاحك ودليل تحقيق أهدافك، من خلال خدمات متكاملة تضمن ظهور علامتك التجارية بأفضل صورة وأقل تكلفة.
              </p>
               <div className="mt-8">
                <Link to="/page/vision-mission" className="font-semibold text-indigo-600 hover:text-indigo-800">
                  اكتشف رؤيتنا ورسالتنا &larr;
                </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">قيمنا الأساسية</h2>
            <p className="mt-4 text-lg text-gray-600">المبادئ التي توجه عملنا وتضمن رضا عملائنا.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {VALUES.map(value => (
              <div key={value.title} className="p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">كيف نعمل معك خطوة بخطوة؟</h2>
            <p className="mt-4 text-lg text-gray-600">عملية واضحة ومنظمة لضمان تحقيق أفضل النتائج لعملك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map(item => (
                 <div key={item.step} className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-shrink-0 mr-4">
                        <span className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
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

export default AboutPage;
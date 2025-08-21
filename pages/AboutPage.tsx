
import React from 'react';
import { VALUES, PROCESS_STEPS } from '../constants';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const AboutPage: React.FC = () => {

  return (
    <>
    <PageMetadata 
      title="من نحن | قصة وكالة EhabGM للتسويق الرقمي"
      description="اكتشف قصة EhabGM، وكالة التسويق الرقمي الرائدة في حلوان. تعرف على رؤيتنا، رسالتنا، وقيمنا التي تدفعنا لمساعدة الشركات على تحقيق النجاح."
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">قصتنا</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            ehabgm – شغفنا هو نجاحك. بدأت رحلتنا من حلوان لمساعدة الشركات على تحقيق نمو حقيقي وملموس عبر الإنترنت.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/about/600/700" 
                alt="فريق عمل ehabgm" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">من فكرة إلى وكالة رائدة</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                <span className="font-bold text-indigo-600">ehabgm</span> هي وكالة تسويق رقمي متكاملة أسسها إيهاب محمد، بخبرة تمتد لأكثر من 8 سنوات. بدأت EhabGM بشغف لمساعدة الشركات الصغيرة على النجاح في العالم الرقمي. اليوم، نحن وكالة متكاملة تفخر بخدمة أكثر من 100 عميل في مصر والوطن العربي، مع التزام ثابت بالجودة والابتكار.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                نحن نؤمن بأن النجاح في العصر الرقمي يتطلب شريكًا يفهم السوق ويقدم حلولاً إبداعية تليق بطموحك. نحن هنا لنكون هذا الشريك، حيث نستطيع تحويل فكرتك إلى مشروع ناجح بخطط تسويق ذكية تعتمد على البيانات والإبداع.
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
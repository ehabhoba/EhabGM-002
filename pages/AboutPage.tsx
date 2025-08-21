import React from 'react';
import { VALUES, PROCESS_STEPS, PAGES_DATA } from '../constants';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const AboutPage: React.FC = () => {
  const pageContent = PAGES_DATA['vision-mission']; // Using vision-mission for meta for now, can be changed.

  return (
    <>
    <PageMetadata 
      title="من نحن | قصة وكالة EhabGM للتسويق الرقمي"
      description="تعرف على قصة EhabGM، الوكالة التي بدأت بشغف لمساعدة الشركات على النجاح في العالم الرقمي. نحن شركاء نجاحك لتحقيق أهدافك."
      keywords="من نحن, قصة ehabgm, شركة تسويق, وكالة تسويق رقمي, تسويق في حلوان, إيهاب محمد, مصمم جرافيك, متخصص تسويق رقمي"
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">نحن شركاؤك في النجاح الرقمي</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            أكثر من مجرد وكالة تسويق، نحن فريق من المبدعين والخبراء الذين يؤمنون بقوة الأفكار الذكية والتنفيذ المتقن لتحويل طموحات عملك إلى واقع ملموس.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <img 
                src="https://i.postimg.cc/zGbGm8zB/logo.png"
                alt="شعار وكالة EhabGM" 
                className="rounded-lg w-full max-w-xs mx-auto h-auto object-contain"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">إيهاب محمد</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">المؤسس | متخصص تسويق رقمي ومصمم جرافيك</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">من شغف فردي إلى وكالة متكاملة</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                بدأت قصة <span className="font-bold text-indigo-600 dark:text-indigo-400">EhabGM</span> بشغف حقيقي لمساعدة الشركات الصغيرة على المنافسة والنجاح في العالم الرقمي. أدركنا أن النجاح لا يتطلب ميزانيات ضخمة، بل شريكًا يفهم السوق، يمتلك الأدوات الصحيحة، ويقدم حلولاً إبداعية تحقق نتائج حقيقية.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                اليوم، نفخر بكوننا الشريك الموثوق للعديد من العلامات التجارية الطموحة. نحن هنا لنكون دليلكم لتحقيق أهدافكم، من خلال باقة <Link to="/pricing" className="text-indigo-500 hover:underline">خدمات متكاملة</Link> تضمن ظهور علامتكم التجارية بأفضل صورة ممكنة، بدءًا من <Link to="/page/brand-identity" className="text-indigo-500 hover:underline">بناء الهوية البصرية</Link>، مرورًا <Link to="/page/website-design" className="text-indigo-500 hover:underline">بتصميم موقع إلكتروني احترافي</Link>، وانتهاءً <Link to="/page/social-media-campaigns" className="text-indigo-500 hover:underline">بإدارة حملاتكم التسويقية</Link> بذكاء وفعالية.
              </p>
               <div className="mt-8">
                <Link to="/page/vision-mission" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  اكتشف رؤيتنا ورسالتنا &larr;
                </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Our Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">قيمنا الأساسية</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">المبادئ التي توجه عملنا وتضمن رضا عملائنا.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {VALUES.map(value => (
              <div key={value.title} className="p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">كيف نعمل معك خطوة بخطوة؟</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">عملية واضحة ومنظمة لضمان تحقيق أفضل النتائج لعملك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map(item => (
                 <div key={item.step} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex">
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
    </div>
    </>
  );
};

export default AboutPage;
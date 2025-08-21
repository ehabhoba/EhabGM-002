import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { TargetIcon, EyeIcon, DiamondIcon } from '../components/IconComponents';

const AboutPage: React.FC = () => {
  const values = [
    { icon: <DiamondIcon />, title: "الجودة والاحترافية", description: "تحقيق أعلى معايير التصميم والتسويق باستخدام أحدث الأساليب." },
    { icon: <TargetIcon />, title: "الاستجابة الفورية", description: "دعم على مدار 24 ساعة لتلبية كافة استفسارات واحتياجات العملاء." },
    { icon: <EyeIcon />, title: "الإبداع والتفرد", description: "تصميم حلول فريدة تناسب كل عميل وتبرز علامته التجارية." },
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">عن EhabGM</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            نحن أكثر من مجرد مقدمي خدمات، نحن شركاء نجاحك في العالم الرقمي. تعرف على قصتنا ورؤيتنا.
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
                alt="Ehab Mohamed" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">من نحن؟</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                <span className="font-bold text-indigo-600">EhabGM | Online Services</span> هي منصة شاملة أسسها إيهاب محمد، مصمم جرافيك ومتخصص تسويق رقمي، بهدف تقديم حلول رقمية متكاملة ومبتكرة للأفراد والشركات في مصر والوطن العربي.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                نؤمن بأن النجاح في العصر الرقمي يتطلب شريكًا يفهم السوق ويقدم حلولاً إبداعية تليق بطموحك. نحن هنا لنكون هذا الشريك، حيث نجمع بين الخبرة الفنية والشغف بالإبداع لنضمن ظهور علامتك التجارية بأفضل صورة ممكنة.
              </p>
               <h3 className="text-2xl font-bold text-gray-900 mt-8">رؤيتنا</h3>
               <p className="mt-2 text-gray-600 leading-relaxed">
                توفير حلول إبداعية مبتكرة تُلبّي احتياجات السوق المصري والخليجي وتساعد على بناء علامات تجارية متكاملة تعكس جودة واحترافية الخدمات المقدمة.
              </p>
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
            {values.map(value => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">منهجية عملنا</h2>
            <p className="mt-4 text-lg text-gray-600">عملية شفافة ومنظمة لضمان تحقيق أفضل النتائج.</p>
          </div>
          <div className="relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-200" aria-hidden="true"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full font-bold text-2xl mb-4 relative z-10">1</div>
                  <h3 className="font-semibold text-lg">الاستماع والفهم</h3>
                  <p className="text-sm text-gray-500 mt-1">نفهم متطلباتك وأهدافك بدقة.</p>
                </div>
                 <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full font-bold text-2xl mb-4 relative z-10">2</div>
                  <h3 className="font-semibold text-lg">التنفيذ والبروفة</h3>
                  <p className="text-sm text-gray-500 mt-1">نبدأ في التنفيذ ونقدم لك بروفة أولية.</p>
                </div>
                 <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full font-bold text-2xl mb-4 relative z-10">3</div>
                  <h3 className="font-semibold text-lg">المراجعة والتعديل</h3>
                  <p className="text-sm text-gray-500 mt-1">نستقبل ملاحظاتك ونجري التعديلات اللازمة.</p>
                </div>
                 <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full font-bold text-2xl mb-4 relative z-10">4</div>
                  <h3 className="font-semibold text-lg">التسليم النهائي</h3>
                  <p className="text-sm text-gray-500 mt-1">نسلمك المشروع بأعلى جودة وفي الموعد المحدد.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

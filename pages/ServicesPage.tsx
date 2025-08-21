import React from 'react';
import { PRICE_LIST } from '../constants';
import { PaletteIcon, MegaphoneIcon, CodeIcon, CheckCircleIcon } from '../components/IconComponents';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const serviceSections = [
    {
      icon: <PaletteIcon />,
      title: 'التصميم الجرافيكي',
      description: 'نقدم حلول تصميم إبداعية تعزز من هوية علامتك التجارية وتجذب انتباه جمهورك.',
      features: [
        'تصميم شعارات وهوية بصرية متكاملة',
        'تصميمات السوشيال ميديا (بوستات، ستوريهات)',
        'المطبوعات التجارية (كروت، بروشورات)',
        'تصميم موشن جرافيك احترافي',
      ],
    },
    {
      icon: <MegaphoneIcon />,
      title: 'التسويق الرقمي والإعلانات',
      description: 'نساعدك على الوصول لجمهورك المستهدف وزيادة مبيعاتك من خلال حملات إعلانية مدروسة.',
      features: [
        'إدارة الحملات الإعلانية (فيسبوك, انستقرام, جوجل)',
        'تحسين محركات البحث (SEO)',
        'التسويق عبر البريد الإلكتروني والرسائل القصيرة',
        'تحليل الأداء وتقديم تقارير دورية',
      ],
    },
    {
      icon: <CodeIcon />,
      title: 'تطوير المواقع والمتاجر',
      description: 'نبني لك واجهة رقمية احترافية، سريعة، ومتجاوبة مع جميع الأجهزة.',
      features: [
        'تصميم مواقع تعريفية للشركات والأفراد',
        'إنشاء متاجر إلكترونية متكاملة',
        'أنظمة دفع إلكتروني آمنة',
        'دعم فني وصيانة مستمرة',
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">خدماتنا</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            حلول رقمية متكاملة ومبتكرة مصممة خصيصًا لتلبية احتياجات عملك ومساعدتك على تحقيق النجاح.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceSections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-4">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-4 text-gray-600">{section.description}</p>
                  <ul className="mt-6 space-y-3">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon />
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  {/* Placeholder for an image or illustration */}
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <img src={`https://picsum.photos/seed/service${index}/600/400`} alt={section.title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">قائمة أسعار التصميم الجرافيكي</h2>
            <p className="mt-4 text-lg text-gray-600">أسعار تنافسية لجودة احترافية. (الأسعار قابلة للتغيير حسب متطلبات المشروع)</p>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الخدمة / الصنف</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">السعر</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تفاصيل الخدمة</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {PRICE_LIST.map((item) => (
                  <tr key={item.service}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
       {/* Final CTA */}
       <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">لديك مشروع في ذهنك؟</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            نحن هنا لنساعدك على تحويل أفكارك إلى حقيقة. تواصل معنا اليوم لمناقشة مشروعك.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
              اطلب خدمتك الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

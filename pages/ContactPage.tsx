import React from 'react';
import { CONTACT_PAGE_META, LOGO_URL } from '../constants';
import PageMetadata from '../components/PageMetadata';
import { WhatsAppIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {
    const whatsappLink = `https://wa.me/201022679250?text=${encodeURIComponent('أهلاً EhabGM، أرغب في الحصول على استشارة مجانية لمشروعي.')}`;

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "EhabGM Online Services",
        "image": LOGO_URL,
        "url": "https://ehabonlineservice.online/#/contact",
        "telephone": "+201022679250",
        "email": "info@ehabgm.online",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Helwan",
          "addressLocality": "Cairo",
          "addressCountry": "EG"
        },
        "description": CONTACT_PAGE_META.description,
        "openingHours": "Mo-Su 09:00-22:00"
    };

  return (
    <>
    <PageMetadata 
      title={CONTACT_PAGE_META.title}
      description={CONTACT_PAGE_META.description}
      keywords={CONTACT_PAGE_META.keywords}
      schema={contactSchema}
    />
    <div className="animate-fade-in">
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 dark:bg-green-900/50 rounded-full mb-6">
              <WhatsAppIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">التواصل أسهل وأسرع عبر واتساب</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            اضغط على الزر أدناه لبدء محادثة مباشرة معنا. فريقنا جاهز للرد على جميع استفساراتك وتقديم عرض سعر فوري لمشروعك.
          </p>
          <div className="mt-10">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <WhatsAppIcon className="h-6 w-6 ml-3" />
              تحدث معنا مباشرة على واتساب
            </a>
          </div>
           <div className="mt-12 text-gray-500 dark:text-gray-400">
              <p>ساعات العمل: يوميًا من 9 صباحًا حتى 10 مساءً</p>
              <p className="mt-2">مقرنا: حلوان، القاهرة، مصر</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactPage;
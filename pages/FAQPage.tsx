import React, { useState } from 'react';
import { FAQ_ITEMS, FAQ_PAGE_META } from '../constants';
import { PlusIcon, MinusIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';

const AccordionItem: React.FC<{ item: { question: string; answer: string; }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-right font-semibold text-lg text-gray-800"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {isOpen ? <MinusIcon className="h-6 w-6 text-indigo-600" /> : <PlusIcon className="h-6 w-6 text-gray-500" />}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
          <div className="overflow-hidden">
            <p className="pb-5 pr-4 text-gray-600">
            {item.answer}
            </p>
          </div>
      </div>
    </div>
  );
};


const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <PageMetadata 
      title={FAQ_PAGE_META.title}
      description={FAQ_PAGE_META.description}
      keywords={FAQ_PAGE_META.keywords}
    />
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">الأسئلة الشائعة</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            أجوبة لأكثر الأسئلة التي تصلنا. إذا لم تجد سؤالك، لا تتردد في التواصل معنا مباشرة.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FAQPage;
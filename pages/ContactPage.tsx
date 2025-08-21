import React, { useState } from 'react';
import { CONTACT_DETAILS } from '../constants';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'تصميم جرافيكي',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        // Here you would typically handle form submission, e.g., send to an API endpoint
        console.log('Form data submitted:', formData);
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', service: 'تصميم جرافيكي', message: ''});
        }, 1500);
    };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا لبدء مشروعك القادم!
          </p>
        </div>
      </section>
      
      {/* Contact Form and Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                {CONTACT_DETAILS.map(detail => (
                   <a href={detail.href} key={detail.text} className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors group">
                    <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition">
                      {React.cloneElement(detail.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6 text-indigo-600"})}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium">{detail.text}</p>
                    </div>
                  </a>
                ))}
              </div>
               <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">موقعنا</h3>
                    <p className="mt-2 text-gray-600">
                        حلوان، القاهرة، مصر <br />
                        <span className="text-sm">(نقدم خدماتنا عن بعد لجميع المحافظات والدول)</span>
                    </p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">الخدمة المطلوبة</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>تصميم جرافيكي</option>
                    <option>تسويق رقمي وإعلانات</option>
                    <option>تطوير موقع أو متجر</option>
                    <option>استفسار عام</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
                    {status === 'sending' ? 'جار الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </div>
                {status === 'success' && <p className="text-green-600 text-center">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import type { Service, PortfolioItem, PriceItem, SocialLink } from './types';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, CodeIcon, MegaphoneIcon, PaletteIcon, BotMessageSquareIcon, MailIcon, PhoneIcon, TikTokIcon, ThreadsIcon } from './components/IconComponents';
import React from 'react';

export const NAV_LINKS = [
  { name: 'الرئيسية', path: '/' },
  { name: 'خدماتنا', path: '/services' },
  { name: 'معرض الأعمال', path: '/portfolio' },
  { name: 'عن EhabGM', path: '/about' },
  { name: 'الأسئلة الشائعة', path: '/faq' },
];

export const CONTACT_LINK = { name: 'تواصل معنا', path: '/contact' };

export const SERVICES: Service[] = [
  {
    icon: React.createElement(PaletteIcon),
    title: 'التصميم الجرافيكي',
    description: 'نحول أفكارك إلى تصاميم بصرية مبتكرة تعكس هوية علامتك التجارية.',
    link: '/services'
  },
  {
    icon: React.createElement(MegaphoneIcon),
    title: 'التسويق الرقمي',
    description: 'نصل بعلامتك التجارية إلى الجمهور المناسب عبر استراتيجيات تسويق فعالة.',
    link: '/services'
  },
  {
    icon: React.createElement(CodeIcon),
    title: 'تطوير المواقع',
    description: 'نبني لك واجهة رقمية احترافية ومتكاملة، من المواقع التعريفية إلى المتاجر الإلكترونية.',
    link: '/services'
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'هوية بصرية لشركة ناشئة', category: 'شعارات', imageUrl: 'https://picsum.photos/seed/project1/600/400', description: 'تصميم هوية بصرية متكاملة لشركة تقنية ناشئة.' },
  { id: 2, title: 'حملة إعلانية على سوشيال ميديا', category: 'سوشيال ميديا', imageUrl: 'https://picsum.photos/seed/project2/600/400', description: 'مجموعة من التصاميم لحملة إعلانية على فيسبوك وانستغرام.' },
  { id: 3, title: 'تصميم واجهة متجر إلكتروني', category: 'مواقع ويب', imageUrl: 'https://picsum.photos/seed/project3/600/400', description: 'تصميم عصري وجذاب لواجهة متجر إلكتروني للملابس.' },
  { id: 4, title: 'فيديو موشن جرافيك ترويجي', category: 'موشن جرافيك', imageUrl: 'https://picsum.photos/seed/project4/600/400', description: 'فيديو قصير لمنتج جديد باستخدام تقنيات الموشن جرافيك.' },
  { id: 5, title: 'شعار لتطبيق جوال', category: 'شعارات', imageUrl: 'https://picsum.photos/seed/project5/600/400', description: 'تصميم شعار مبتكر لتطبيق في مجال التوصيل.' },
  { id: 6, title: 'تصاميم بوستات لصفحة مطعم', category: 'سوشيال ميديا', imageUrl: 'https://picsum.photos/seed/project6/600/400', description: 'تصاميم جذابة لعرض الأطباق والعروض الخاصة بمطعم.' },
  { id: 7, title: 'تصميم موقع تعريفي', category: 'مواقع ويب', imageUrl: 'https://picsum.photos/seed/project7/600/400', description: 'موقع تعريفي لشركة استشارات هندسية.' },
  { id: 8, title: 'بروشور إعلاني ثلاثي الطي', category: 'مطبوعات', imageUrl: 'https://picsum.photos/seed/project8/600/400', description: 'تصميم بروشور إعلاني لفعالية قادمة.' },
];

export const PORTFOLIO_CATEGORIES = ['الكل', 'شعارات', 'سوشيال ميديا', 'مواقع ويب', 'موشن جرافيك', 'مطبوعات'];


export const PRICE_LIST: PriceItem[] = [
  { service: 'تصميم لوجو بسيط (Basic Logo)', price: '150 - 300 جنيه', details: 'لوجو نصي أو رمزي بسيط يشمل نموذج واحد مع تعديلات بسيطة' },
  { service: 'تصميم لوجو احترافي (Pro Logo)', price: '400 - 700 جنيه', details: 'تصميم مميز يتضمن دراسة لهوية العلامة، عرض 2-3 نماذج، وتعديلات غير محدودة' },
  { service: 'تصميم كارت شخصي (Business Card)', price: '150 - 300 جنيه', details: 'تصميم لوجه واحد أو وجهين، التسليم بصيغة PDF للطباعة ونسخة رقمية' },
  { service: 'تصميم بانر لوسائل التواصل الاجتماعي', price: '100 - 250 جنيه', details: 'تصميم بانر لمنشور أو إعلان بمقاسات مناسبة للمنصة، يشمل إمكانية التعديل' },
  { service: 'تصميم بوستر/إعلان مطبوع', price: '250 - 500 جنيه', details: 'تصميم بدقة عالية يشمل كتابة المحتوى، تنسيق الصور والإخراج الجاهز للطباعة' },
  { service: 'باقة تصميم وسائل التواصل الاجتماعي (10 تصاميم)', price: '800 - 1200 جنيه', details: 'باقة متكاملة تضم 10 منشورات احترافية تعتمد على الهوية البصرية' },
  { service: 'تصميم منيو أو كتالوج', price: 'يبدأ من 500 جنيه', details: 'السعر يعتمد على عدد الصفحات – تصميم احترافي قابل للطباعة أو لاستخدام الرقمي' },
  { service: 'تصميم ستوري احترافي (Instagram/Facebook)', price: '100 - 200 جنيه', details: 'تصميم مقاس ستوري بمحتوى جذاب – التسليم بصيغة PNG أو MP4' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Facebook', icon: React.createElement(FacebookIcon), url: 'https://facebook.com/graphicdesiner1' },
    { name: 'Instagram', icon: React.createElement(InstagramIcon), url: 'https://instagram.com/ehab.gm1' },
    { name: 'Twitter', icon: React.createElement(TwitterIcon), url: 'https://twitter.com/ehabgm' },
    { name: 'LinkedIn', icon: React.createElement(LinkedinIcon), url: 'https://www.linkedin.com/in/ehabgm-online-services/' },
    { name: 'TikTok', icon: React.createElement(TikTokIcon), url: 'https://tiktok.com/@ehab.gm1' },
    { name: 'Threads', icon: React.createElement(ThreadsIcon), url: 'https://www.threads.net/@ehab.gm1' },
];

export const CONTACT_DETAILS = [
  { icon: React.createElement(PhoneIcon), text: '+201022679250 – 01140057253', href: 'tel:+201022679250' },
  { icon: React.createElement(MailIcon), text: 'contact@ehabgm.online', href: 'mailto:contact@ehabgm.online' },
  { icon: React.createElement(BotMessageSquareIcon), text: 'واتساب مباشر', href: 'https://wa.me/201022679250' },
];

export const WHY_CHOOSE_US = [
    { title: 'الجودة والاحترافية', description: 'نستخدم أحدث الأدوات والأساليب لضمان أعلى جودة.'},
    { title: 'منصة متكاملة', description: 'كل ما تحتاجه علامتك التجارية في مكان واحد.'},
    { title: 'استجابة فورية', description: 'دعم فني واستشارات على مدار 24 ساعة.'},
    { title: 'إبداع وتفرد', description: 'حلول مخصصة تعكس هوية كل عميل.'},
];

export const TESTIMONIALS = [
    { name: 'أحمد محمود', company: 'شركة تك برو', quote: 'عمل احترافي وسرعة في التسليم. التصاميم كانت مبتكرة وفاقت توقعاتنا. أنصح بالتعامل معهم بشدة.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { name: 'فاطمة علي', company: 'متجر زهور', quote: 'ساعدونا في إطلاق حملة تسويقية ناجحة زادت من مبيعاتنا بشكل ملحوظ. فريق متعاون ومبدع.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    { name: 'خالد سعيد', company: 'مطعم النيل', quote: 'تصاميم السوشيال ميديا جذابة جدًا وساهمت في زيادة التفاعل على صفحاتنا. شكراً EhabGM.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
];

export const FAQ_ITEMS = [
    {
        question: 'ما هي طرق الدفع المتاحة؟',
        answer: 'نقبل الدفع عبر فودافون كاش، إنستا باي، والتحويلات البنكية. يتم الاتفاق على التفاصيل عند تأكيد الطلب.'
    },
    {
        question: 'كم يستغرق تنفيذ تصميم الشعار؟',
        answer: 'عادةً ما يستغرق تصميم الشعار من 3 إلى 5 أيام عمل، ويتضمن ذلك مرحلة عرض النماذج الأولية ومرحلة التعديلات للوصول إلى التصميم النهائي الذي يرضيك.'
    },
    {
        question: 'هل يمكنني طلب تعديلات على التصميم؟',
        answer: 'بالتأكيد. عدد التعديلات يعتمد على الباقة التي تختارها. باقة اللوجو الاحترافي، على سبيل المثال، تشمل تعديلات غير محدودة لضمان رضاك الكامل.'
    },
    {
        question: 'كيف أستلم ملفاتي النهائية؟',
        answer: 'بعد الموافقة النهائية والدفع، يتم إرسال جميع الملفات النهائية إليك عبر البريد الإلكتروني أو رابط تحميل مباشر. تشمل الملفات صيغ عالية الجودة للطباعة (PDF, AI) وصيغ للاستخدام الرقمي (PNG, JPG).'
    },
    {
        question: 'هل تقدمون خدمات خارج القاهرة؟',
        answer: 'نعم، نحن نقدم خدماتنا لجميع العملاء في مصر والوطن العربي والعالم. يتم كل العمل والتواصل عن بعد لضمان راحتك وسرعة التنفيذ.'
    }
];


import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PAGES_DATA } from '../constants';
import { CheckCircleIcon } from '../components/IconComponents';
import PageMetadata from '../components/PageMetadata';

const ContentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pageContent = slug ? PAGES_DATA[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageContent) {
    useEffect(() => {
        navigate('/');
    }, [navigate]);
    return null;
  }

  const { title, description, heroImage, features, cta, meta, secondarySection } = pageContent;

  return (
    <>
      <PageMetadata 
        title={meta.title}
        description={meta.description}
      />
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20 md:py-32">
          <div className="absolute inset-0">
            <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">{description}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{features.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.list.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon />
                    </div>
                    <div className="mr-4">
                      <p className="text-lg text-gray-700">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Section */}
        {secondarySection && (
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{secondarySection.title}</h2>
                        <div className="space-y-8">
                            {secondarySection.content.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">{item.subtitle}</h3>
                                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                                        {item.points.map((point, pIndex) => (
                                            <li key={pIndex} className="leading-relaxed">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )}

        {/* CTA Section */}
        <section className="bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{cta.title}</h2>
            <div className="mt-8">
              <Link 
                  to={cta.link} 
                  className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
              >
                {cta.buttonText}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentPage;
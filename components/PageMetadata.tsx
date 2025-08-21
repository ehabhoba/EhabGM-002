import React, { useEffect } from 'react';

interface PageMetadataProps {
  title: string;
  description: string;
}

const PageMetadata: React.FC<PageMetadataProps> = ({ title, description }) => {
  useEffect(() => {
    // Set document title
    const fullTitle = `${title}`;
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
        let element = document.querySelector(`meta[${attr}="${value}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attr, value);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };
    
    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    
    // Open Graph (Facebook, etc.)
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    // You can add a default image for sharing
    // setMetaTag('property', 'og:image', 'https://ehabgm.online/default-share-image.jpg');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    // You can add a default image for Twitter sharing
    // setMetaTag('name', 'twitter:image', 'https://ehabgm.online/default-share-image.jpg');


  }, [title, description]);

  return null; // This component does not render anything
};

export default PageMetadata;

import React, { useEffect } from 'react';

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object | object[]; // Allow single object or array
}

const PageMetadata: React.FC<PageMetadataProps> = ({ title, description, keywords, schema }) => {
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
    if (keywords) {
        setMetaTag('name', 'keywords', keywords);
    }
    
    // Open Graph (Facebook, etc.)
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    // You can add a default image for sharing
    // setMetaTag('property', 'og:image', 'https://ehabonlineservice.online/default-share-image.jpg');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    // You can add a default image for Twitter sharing
    // setMetaTag('name', 'twitter:image', 'https://ehabonlineservice.online/default-share-image.jpg');

    // Handle JSON-LD Schema
    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema, null, 2);
    } else if (schemaScript) {
      // Clean up if no schema is provided on a subsequent render
      schemaScript.remove();
    }

  }, [title, description, keywords, schema]);

  return null; // This component does not render anything
};

export default PageMetadata;
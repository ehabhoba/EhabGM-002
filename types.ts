
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  stats: { value: string; label: string }[];
  tags: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

export interface ChatMessage {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

export interface Testimonial {
    name: string;
    company: string;
    quote: string;
    avatar: string;
    location: string;
}

export interface Value {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    duration?: string;
}

export interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
}

export interface PageContent {
  title: string;
  description: string;
  heroImage: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  features: {
    title: string;
    list: string[];
  };
  cta: {
    title: string;
    buttonText: string;
    link: string;
  };
  secondarySection?: {
    title: string;
    content: {
      subtitle: string;
      points: string[];
    }[];
  };
}


export interface PricingPackage {
  title: string;
  price: string;
  priceDetails: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
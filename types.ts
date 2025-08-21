import type { User as SupabaseUser } from '@supabase/supabase-js';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  features: string[];
}

export interface PortfolioItem {
  id: string; // uuid from Supabase
  title: string;
  description:string;
  image_url: string;
  created_at: string;
  category?: string;
  stats?: { value: string; label: string }[];
  tags?: string[];
  serviceSlug?: string; // Links portfolio item to a service page
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

export interface WebsiteLink {
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
  whyChooseUs?: {
      title: string;
      points: {
          icon: React.ReactNode;
          title: string;
          description: string;
      }[];
  };
  process?: {
      title: string;
      steps: ProcessStep[];
  };
  faq?: {
      title: string;
      items: {
          question: string;
          answer: string;
      }[];
  };
  relatedPortfolioSlug?: string;
  relatedServicesSlugs?: string[];
  relatedPostsSlugs?: string[];
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
  priceDetails?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  category: 'monthly' | 'campaign' | 'single';
  whatsappLink?: string;
}

export interface GraphicPriceItem {
  service: string;
  price: string;
  details: string;
}

export interface BlogPost {
  id: string; // uuid from Supabase
  title: string;
  content: string;
  author_id: string | null;
  created_at: string;
  is_published: boolean;
  slug?: string; 
  excerpt?: string;
  heroImage?: string;
  author?: string;
  date?: string;
  meta?: {
    title: string;
    description: string;
    keywords: string;
  };
  relatedServicesSlugs?: string[]; // Links blog post to service pages
}

export interface SearchResult {
  title: string;
  excerpt: string;
  link: string;
  type: 'خدمة' | 'مقال';
}

// Auth Types
export interface UserProfile {
    id: string;
    name: string;
    role: 'admin' | 'client';
}

export interface AuthContextType {
    user: SupabaseUser | null;
    profile: UserProfile | null;
    loading: boolean;
    signOut: () => Promise<void>;
}

export interface Ticket {
    id: string; // uuid
    user_id: string | null;
    subject: string;
    description: string;
    status: string;
    created_at: string;
}
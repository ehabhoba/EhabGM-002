
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface PriceItem {
  service: string;
  price: string;
  details: string;
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

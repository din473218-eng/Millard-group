export type BrandID = 'millard' | 'amber' | 'obika';

export interface ProductOrService {
  id: string;
  name: string;
  description: string;
  price?: string;
  category?: string;
  image: string;
  features?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
}

export interface BrandInfo {
  id: BrandID;
  name: string;
  tagline: string;
  shortDescription: string;
  narrative: string;
  storyTitle: string;
  storyImage: string;
  heroImage: string;
  themeColor: {
    accent: string;
    bg: string;
    border: string;
    text: string;
  };
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];
  products: ProductOrService[];
  gallery: {
    id: string;
    url: string;
    caption: string;
  }[];
  reviews: Review[];
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string[];
    whatsapp: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  brand?: BrandID;
}

export interface LocationItem {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  brand: string;
  mapEmbedUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

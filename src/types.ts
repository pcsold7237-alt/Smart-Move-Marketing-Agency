export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon key name
  metric: string;
  accentColor: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  year: string;
  metrics: { label: string; value: string }[];
  image: string; // reference name for our abstract generative canvas or images
  tags: string[];
  challenge: string;
  solution: string;
  reelsUrl?: string; // If it's a reels case study
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarSeed: string; // for high-end SVG avatar generation
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarSeed: string;
  specialty: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  imagePath?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export interface IndustryNiche {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  painPoint: string;
  smartMove: string;
  roiEstimate: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

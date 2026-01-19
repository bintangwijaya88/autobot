import { Document } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

// Base Contentful Types
export interface ContentfulImage {
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

// Author
export interface Author extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: {
    name: string;
    role: string;
    bio?: string;
    avatar?: Asset;
    email?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
}

// Category
export interface Category extends EntrySkeletonType {
  contentTypeId: 'category';
  fields: {
    name: string;
    slug: string;
    description?: string;
  };
}

// Blog Post (Original - for future migration)
export interface BlogPost extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    featuredImage?: Asset;
    author: Entry<Author, 'WITHOUT_UNRESOLVABLE_LINKS'>;
    category: Entry<Category, 'WITHOUT_UNRESOLVABLE_LINKS'>;
    tags?: string[];
    publishDate: string;
    readTime?: number;
  };
}

// Blogs (New Schema from Contentful)
export interface Blog extends EntrySkeletonType {
  contentTypeId: 'blogs';
  fields: {
    titleBlogs: string;
    imagesBlogs?: Asset;
    autobotBlogs?: Document;
    revBlogs?: Entry<Blog, 'WITHOUT_UNRESOLVABLE_LINKS'>[];
  };
}

// Service
export interface Service extends EntrySkeletonType {
  contentTypeId: 'service';
  fields: {
    title: string;
    slug: string;
    shortDescription: string;
    description: Document;
    icon?: string;
    features: string[];
    technologies?: string[];
    pricing?: {
      startingPrice: number;
      currency: string;
      billingPeriod?: string;
    };
    images?: Asset[];
    order?: number;
  };
}

// Project/Portfolio
export interface Project extends EntrySkeletonType {
  contentTypeId: 'project';
  fields: {
    title: string;
    slug: string;
    client: string;
    industry: string;
    description: Document;
    shortDescription: string;
    featuredImage: Asset;
    gallery?: Asset[];
    technologies: string[];
    features: string[];
    results?: {
      metric: string;
      value: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
    liveUrl?: string;
    caseStudyUrl?: string;
    category: string;
    completionDate: string;
  };
}

// Solution Package
export interface SolutionPackage extends EntrySkeletonType {
  contentTypeId: 'solutionPackage';
  fields: {
    name: string;
    slug: string;
    category: 'corporate' | 'education' | 'healthcare' | 'retail';
    subtitle: string;
    description: Document;
    shortDescription: string;
    price: {
      setupFee: number;
      monthlyFee?: number;
      yearlyFee?: number;
      currency: string;
    };
    features: string[];
    modules: string[];
    recommended?: boolean;
    icon?: string;
    order?: number;
  };
}

// Team Member
export interface TeamMember extends EntrySkeletonType {
  contentTypeId: 'teamMember';
  fields: {
    name: string;
    role: string;
    department: string;
    bio?: Document;
    photo?: Asset;
    certifications?: string[];
    expertise?: string[];
    social?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
    };
    order?: number;
  };
}

// Job Opening
export interface JobOpening extends EntrySkeletonType {
  contentTypeId: 'jobOpening';
  fields: {
    title: string;
    slug: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    experienceLevel: 'junior' | 'mid' | 'senior';
    description: Document;
    responsibilities: string[];
    requirements: string[];
    niceToHave?: string[];
    benefits?: string[];
    salary?: {
      min: number;
      max: number;
      currency: string;
      period: string;
    };
    applicationUrl?: string;
    active: boolean;
  };
}

// Testimonial
export interface Testimonial extends EntrySkeletonType {
  contentTypeId: 'testimonial';
  fields: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: Asset;
    rating?: number;
    project?: Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS'>;
    order?: number;
  };
}

// FAQ
export interface FAQ extends EntrySkeletonType {
  contentTypeId: 'faq';
  fields: {
    question: string;
    answer: Document;
    category: string;
    order?: number;
  };
}

// Page Content (for dynamic pages)
export interface PageContent extends EntrySkeletonType {
  contentTypeId: 'pageContent';
  fields: {
    title: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
    content: Document;
    sections?: any[];
  };
}

// Pricing Add-on
export interface PricingAddon extends EntrySkeletonType {
  contentTypeId: 'pricingAddon';
  fields: {
    name: string;
    description: string;
    price: {
      amount: number;
      currency: string;
      period?: string;
    };
    category: string;
  };
}

// Success Story
export interface SuccessStory extends EntrySkeletonType {
  contentTypeId: 'successStory';
  fields: {
    title: string;
    client: string;
    industry: string;
    challenge: Document;
    solution: Document;
    results: {
      metric: string;
      value: string;
      description?: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
    image?: Asset;
    order?: number;
  };
}

// Site Settings (global configuration)
export interface SiteSettings extends EntrySkeletonType {
  contentTypeId: 'siteSettings';
  fields: {
    siteName: string;
    tagline: string;
    description: string;
    logo?: Asset;
    contactEmail: string;
    contactPhone: string;
    address: string;
    social: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      github?: string;
    };
    businessHours?: string;
  };
}

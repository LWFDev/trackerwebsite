import { getCurrentOrigin } from './domain';

export interface HreflangAlternate { hrefLang: string; href: string; }
export interface PaginationLinks { prev?: string; next?: string; }

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
  robots?: string;
  ogType?: string;
  alternates?: HreflangAlternate[];
  pagination?: PaginationLinks;
}

export const defaultSEO: SEOData = {
  title: "Tracker: Cloud-Based Garment Decoration Software for Embroidery, DTG, DTF & Team Gear",
  description: "Streamline garment decoration with Tracker. Manage logos, proofs, production scheduling & machine integrations for embroidery, DTG, DTF, screen printing & team gear.",
  keywords: "garment decoration software, DTG printing management, DTF transfer tracking, embroidery logo software, screen printing workflow, heat seal production, licensed team gear ordering, cloud logo management, production scheduling for embroidery, digital proof approvals, PLM garment integrations",
  ogImage: `${getCurrentOrigin()}/assets/og-image.png`,
  canonical: `${getCurrentOrigin()}/`,
  robots: "index,follow",
  ogType: "website"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareApplication"],
  "name": "Tracker",
  "alternateName": "Tracker Garment Decoration Software",
  "description": "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management with logo management, digital proof approvals, and machine integrations",
  "url": getCurrentOrigin(),
  "logo": `${getCurrentOrigin()}/assets/logo.png`,
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Garment Decoration Software",
  "keywords": "garment decoration software, embroidery logo software, DTG printing management, DTF transfer tracking, screen printing workflow, heat seal production, licensed team gear, cloud logo management, production scheduling, digital proof approvals, PLM integrations, barcode machine integrations",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-TRACKER",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["en"],
    "email": "info@trackmybusiness.us"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://twitter.com/trackmybusiness",
    "https://linkedin.com/company/trackmybusiness",
    "https://facebook.com/trackmybusiness"
  ],
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Garment Decoration Production Management",
  "operatingSystem": "Web Browser"
};

export const businessHours = {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday"
  ],
  "opens": "09:00",
  "closes": "17:00",
  "validFrom": "2024-01-01",
  "validThrough": "2024-12-31"
};

export const generatePageSEO = (pageSEO: Partial<SEOData>): SEOData => {
  return {
    ...defaultSEO,
    ...pageSEO,
    title: pageSEO.title ? `${pageSEO.title} | Tracker` : defaultSEO.title,
    robots: pageSEO.robots ?? defaultSEO.robots,
    ogType: pageSEO.ogType ?? defaultSEO.ogType
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  offers?: object;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Tracker"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Tracker"
    },
    "offers": product.offers || {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image?: string;
  url: string;
  tags?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "datePublished": article.datePublished,
  "mainEntityOfPage": article.url,
  "keywords": article.tags?.join(', ')
});

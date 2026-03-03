import { getCurrentOrigin } from './domain';

export interface HreflangAlternate { hrefLang: string; href: string; }
export interface PaginationLinks { prev?: string; next?: string; }

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
  schema?: object | object[];
  robots?: string;
  ogType?: string;
  alternates?: HreflangAlternate[];
  pagination?: PaginationLinks;
}

export const defaultSEO: SEOData = {
  title: "Tracker: Cloud-Based Garment Decoration Software for Embroidery, DTG, DTF & Team Gear",
  description: "Streamline garment decoration with Tracker. Manage logos, proofs, production scheduling & machine integrations for embroidery, DTG, DTF, screen printing & team gear.",
  keywords: "garment decoration software, DTG printing management, DTF transfer tracking, embroidery logo software, screen printing workflow, heat seal production, licensed team gear ordering, cloud logo management, production scheduling for embroidery, digital proof approvals, PLM garment integrations",
  ogImage: `${getCurrentOrigin()}/lovable-uploads/c56cb027-984f-4170-9f87-1c1f0fc3760f.png`,
  canonical: `${getCurrentOrigin()}/`,
  robots: "index,follow",
  ogType: "website"
};

// === SoftwareApplication Schema ===
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tracker",
  "alternateName": "Tracker Garment Decoration Software",
  "description": "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management with logo management, digital proof approvals, and machine integrations",
  "url": getCurrentOrigin(),
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Production Management Software",
  "operatingSystem": "Web Browser (Chrome, Firefox, Safari, Edge)",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "99",
    "highPrice": "499",
    "offerCount": "3"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "92",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "Cloud-based logo management",
    "Digital proof approvals",
    "Production scheduling",
    "Embroidery machine integrations (Barudan, Tajima)",
    "DTG/DTF print management",
    "Screen printing workflow",
    "Inventory & warehouse management",
    "Sales order management",
    "Customer portal",
    "Purchase order management",
    "Supplier management",
    "Product designer"
  ],
  "screenshot": `${getCurrentOrigin()}/lovable-uploads/c56cb027-984f-4170-9f87-1c1f0fc3760f.png`,
  "softwareVersion": "2025",
  "releaseNotes": "Cloud-based SaaS platform with continuous updates"
};

// === Organization Schema ===
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tracker",
  "alternateName": "Tracker Garment Decoration Software",
  "description": "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management",
  "url": getCurrentOrigin(),
  "logo": `${getCurrentOrigin()}/lovable-uploads/c56cb027-984f-4170-9f87-1c1f0fc3760f.png`,
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
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
  ]
};

export const businessHours = {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "opens": "09:00",
  "closes": "17:00"
};

// === HowTo Schema Generator ===
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  ...(howTo.totalTime && { "totalTime": howTo.totalTime }),
  "step": howTo.steps.map((step, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": step.name,
    "text": step.text,
    ...(step.image && { "image": step.image })
  }))
});

// === Dataset Schema Generator ===
export const generateDatasetSchema = (dataset: {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": dataset.name,
  "description": dataset.description,
  "url": dataset.url,
  ...(dataset.keywords && { "keywords": dataset.keywords }),
  "creator": {
    "@type": "Organization",
    "name": "Tracker"
  },
  "license": "https://www.trackmybusiness.us/terms"
});

// === Module-specific SoftwareApplication Schema ===
export const generateModuleSchema = (module: {
  name: string;
  description: string;
  features?: string[];
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": `Tracker ${module.name}`,
  "description": module.description,
  "url": module.url,
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Garment Decoration Production Management",
  "operatingSystem": "Web Browser",
  "isPartOf": {
    "@type": "SoftwareApplication",
    "name": "Tracker",
    "url": getCurrentOrigin()
  },
  ...(module.features && { "featureList": module.features }),
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  }
});

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
    "brand": { "@type": "Brand", "name": "Tracker" },
    "manufacturer": { "@type": "Organization", "name": "Tracker" },
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
  "author": { "@type": "Person", "name": article.author },
  "datePublished": article.datePublished,
  "mainEntityOfPage": article.url,
  "keywords": article.tags?.join(', ')
});

// === Video Schema Generator ===
export const generateVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  ...(video.duration && { "duration": video.duration }),
  "embedUrl": video.embedUrl,
  "publisher": {
    "@type": "Organization",
    "name": "Tracker",
    "url": getCurrentOrigin()
  }
});

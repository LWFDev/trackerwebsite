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
  title: "TrackMyBusiness - Enterprise Production Management Software | Garment Decoration Platform",
  description: "The leading end-to-end production management software for garment decoration, apparel manufacturing, and custom embroidery businesses. Automate order handling, manage inventory, and optimize production workflow instantly.",
  keywords: "production management software, garment decoration software, apparel manufacturing system, embroidery business software, screen printing management, custom apparel production, automated production scheduling, enterprise software",
  ogImage: `${getCurrentOrigin()}/assets/og-image.png`,
  canonical: `${getCurrentOrigin()}/`,
  robots: "index,follow",
  ogType: "website"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareApplication"],
  "name": "TrackMyBusiness",
  "alternateName": "TrackMyBusiness Production Management",
  "description": "Enterprise production management software for garment decoration, apparel manufacturing, and custom embroidery businesses",
  "url": getCurrentOrigin(),
  "logo": `${getCurrentOrigin()}/assets/logo.png`,
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Software Development",
  "keywords": "production management, garment decoration, apparel manufacturing, embroidery software, screen printing",
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
    title: pageSEO.title ? `${pageSEO.title} | TrackMyBusiness` : defaultSEO.title,
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
      "name": "TrackMyBusiness"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "TrackMyBusiness"
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
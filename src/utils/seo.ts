export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
}

export const defaultSEO: SEOData = {
  title: "Tracker - Production Management Software | Garment Decoration Platform",
  description: "The leading end-to-end production management software for garment decoration, apparel manufacturing, and custom embroidery businesses. Automate order handling, manage inventory, and optimize production workflow instantly.",
  keywords: "production management software, garment decoration software, apparel manufacturing system, embroidery business software, screen printing management, custom apparel production, automated production scheduling",
  ogImage: "https://tracker-systems.com/assets/og-image.png",
  canonical: "https://tracker-systems.com/"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tracker Systems",
  "description": "Leading production management software for garment decoration and apparel manufacturing",
  "url": "https://tracker-systems.com",
  "logo": "https://tracker-systems.com/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-TRACKER",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://twitter.com/tracker_systems",
    "https://linkedin.com/company/tracker-systems",
    "https://facebook.com/tracker-systems"
  ]
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
    title: pageSEO.title ? `${pageSEO.title} | Tracker Systems` : defaultSEO.title
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
      "name": "Tracker Systems"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Tracker Systems"
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
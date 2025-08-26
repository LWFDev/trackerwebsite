import { SEOData, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema } from '@/utils/seo';

// Home page SEO
export const homeSEO: SEOData = {
  title: "Production Management Software | Tracker Systems",
  description: "The leading end-to-end production management software for garment decoration, apparel manufacturing, and custom embroidery businesses. Automate order handling, manage inventory, and optimize production workflow instantly.",
  keywords: "production management software, garment decoration software, apparel manufacturing system, embroidery business software, screen printing management, custom apparel production, automated production scheduling",
  canonical: "https://tracker-systems.com/",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tracker Systems",
    "description": "Production management software for garment decoration and apparel manufacturing",
    "url": "https://tracker-systems.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tracker-systems.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};

// Pricing page SEO
export const pricingSEO: SEOData = {
  title: "Pricing Plans - Affordable Production Management Software",
  description: "Choose the perfect Tracker Systems plan for your garment decoration business. Flexible pricing for small shops to enterprise manufacturers. Get started today.",
  keywords: "production management software pricing, garment decoration software cost, apparel manufacturing software plans, embroidery business software pricing",
  canonical: "https://tracker-systems.com/pricing",
  schema: generateProductSchema({
    name: "Tracker Production Management Software",
    description: "Complete production management solution for garment decoration businesses",
    offers: {
      "@type": "AggregateOffer",
      "lowPrice": "99",
      "highPrice": "499",
      "priceCurrency": "USD",
      "offerCount": "3"
    }
  })
};

// About page SEO
export const aboutSEO: SEOData = {
  title: "About Us - Leading Production Management Software Company",
  description: "Learn about Tracker Systems, the innovative company behind the leading production management software for garment decoration and apparel manufacturing industries.",
  keywords: "tracker systems company, production management software company, garment decoration software developers, apparel manufacturing technology",
  canonical: "https://tracker-systems.com/about"
};

// Contact page SEO
export const contactSEO: SEOData = {
  title: "Contact Us - Get Support for Production Management Software",
  description: "Get in touch with Tracker Systems for sales, support, or questions about our production management software. Expert support for your garment decoration business.",
  keywords: "tracker systems contact, production management software support, garment decoration software help, customer service",
  canonical: "https://tracker-systems.com/contact"
};

// Industries SEO data
export const industriesSEO: SEOData = {
  title: "Industries We Serve - Production Management Software Solutions",
  description: "Discover how Tracker Systems serves various industries including apparel manufacturing, embroidery, screen printing, promotional products, and custom decoration businesses.",
  keywords: "apparel manufacturing software, embroidery business software, screen printing management, promotional products software, custom decoration software",
  canonical: "https://tracker-systems.com/industries"
};

// Modules SEO data
export const modulesSEO: SEOData = {
  title: "Software Modules - Complete Production Management Features",
  description: "Explore all modules of Tracker Systems including inventory management, order processing, production scheduling, customer management, and more.",
  keywords: "production management modules, inventory management software, order processing system, production scheduling software, customer management system",
  canonical: "https://tracker-systems.com/modules"
};

// Blog SEO data
export const blogSEO: SEOData = {
  title: "Production Management Blog - Industry Insights & Best Practices",
  description: "Stay updated with the latest trends, tips, and best practices in production management, garment decoration, and apparel manufacturing industry.",
  keywords: "production management blog, garment decoration tips, apparel manufacturing insights, embroidery business advice",
  canonical: "https://tracker-systems.com/blog"
};

// Documentation SEO data
export const docsSEO: SEOData = {
  title: "Documentation - Tracker Systems User Guide & API Reference",
  description: "Complete documentation for Tracker Systems production management software including user guides, API reference, and integration tutorials.",
  keywords: "tracker systems documentation, production management software guide, API documentation, user manual",
  canonical: "https://tracker-systems.com/documentation"
};

// Support SEO data
export const supportSEO: SEOData = {
  title: "Support Center - Help & Resources for Production Management Software",
  description: "Get help with Tracker Systems production management software. Access FAQs, tutorials, and contact our support team for assistance.",
  keywords: "tracker systems support, production management software help, customer support, technical assistance",
  canonical: "https://tracker-systems.com/support"
};

// FAQ Schema for support page
export const supportFAQSchema = generateFAQSchema([
  {
    question: "How do I get started with Tracker Systems?",
    answer: "You can start with our evaluation period by signing up on our website. Our onboarding team will help you set up your account and import your existing data."
  },
  {
    question: "What types of businesses can use Tracker Systems?",
    answer: "Tracker Systems is designed for garment decoration businesses including embroidery shops, screen printers, promotional product companies, apparel manufacturers, and custom decoration services."
  },
  {
    question: "Do you offer integrations with other software?",
    answer: "Yes, we integrate with popular e-commerce platforms like Shopify and WooCommerce, accounting software like QuickBooks, and shipping providers like ShipStation."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, Tracker Systems offers mobile apps for both iOS and Android, allowing you to manage your business on the go."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including phone support, live chat, email support, video tutorials, and detailed documentation. Enterprise customers get dedicated account managers."
  }
]);

// Industry-specific SEO data
export const industryPagesSEO = {
  'apparel-manufacturing': {
    title: "Apparel Manufacturing Software - Production Management Solutions",
    description: "Streamline your apparel manufacturing operations with Tracker Systems. Manage orders, inventory, production schedules, and quality control in one platform.",
    keywords: "apparel manufacturing software, clothing production management, garment manufacturing system, textile production software",
    canonical: "https://tracker-systems.com/industries/apparel-manufacturing"
  },
  'embroidery': {
    title: "Embroidery Business Software - Complete Shop Management System",
    description: "Manage your embroidery business efficiently with Tracker Systems. Handle orders, designs, production scheduling, and customer management seamlessly.",
    keywords: "embroidery business software, embroidery shop management, custom embroidery software, digitizing business software",
    canonical: "https://tracker-systems.com/industries/embroidery"
  },
  'screen-printing': {
    title: "Screen Printing Software - Shop Management & Production Control",
    description: "Optimize your screen printing operations with Tracker Systems. Manage orders, ink inventory, production schedules, and customer communications efficiently.",
    keywords: "screen printing software, screen print shop management, custom printing software, silk screen business software",
    canonical: "https://tracker-systems.com/industries/screen-printing"
  }
};

// Module-specific SEO data templates
export const generateModuleSEO = (moduleName: string, description: string, keywords: string): SEOData => ({
  title: `${moduleName} Module - Production Management Software Feature`,
  description: `${description} Part of Tracker Systems comprehensive production management platform for garment decoration businesses.`,
  keywords: `${keywords}, production management software, garment decoration software`,
  canonical: `https://tracker-systems.com/modules/${moduleName.toLowerCase().replace(/\s+/g, '-')}`
});

// Breadcrumb schemas for different page types
export const homeBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" }
]);

export const pricingBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Pricing", url: "https://tracker-systems.com/pricing" }
]);

export const aboutBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "About", url: "https://tracker-systems.com/about" }
]);

export const contactBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Contact", url: "https://tracker-systems.com/contact" }
]);

export const blogBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Blog", url: "https://tracker-systems.com/blog" }
]);

export const docsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Documentation", url: "https://tracker-systems.com/documentation" }
]);

export const supportBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Support", url: "https://tracker-systems.com/support" }
]);

export const industriesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Industries", url: "https://tracker-systems.com/industries" }
]);

export const modulesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Modules", url: "https://tracker-systems.com/modules" }
]);

export const caseStudiesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Case Studies", url: "https://tracker-systems.com/case-studies" }
]);

export const faqBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "FAQ", url: "https://tracker-systems.com/faq" }
]);

export const getStartedBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Get Started", url: "https://tracker-systems.com/get-started" }
]);

export const termsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Terms of Service", url: "https://tracker-systems.com/terms" }
]);

export const privacyBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://tracker-systems.com/" },
  { name: "Privacy Policy", url: "https://tracker-systems.com/privacy" }
]);

// Additional page SEO
export const caseStudiesSEO: SEOData = {
  title: "Case Studies - Real Results with Tracker Systems",
  description: "See how businesses transformed operations with Tracker's production management platform across embroidery, screen printing, and apparel manufacturing.",
  keywords: "tracker case studies, production management results, embroidery software success, screen printing ROI",
  canonical: "https://tracker-systems.com/case-studies"
};

export const faqSEO: SEOData = {
  title: "FAQ - Answers About Tracker Systems",
  description: "Find answers to common questions about Tracker pricing, implementation, integrations, and support.",
  keywords: "tracker faq, production management faq, garment decoration software questions",
  canonical: "https://tracker-systems.com/faq"
};

export const getStartedSEO: SEOData = {
  title: "Get Started - Onboarding with Tracker Systems",
  description: "Kick off your Tracker onboarding. Answer a few questions and our team will tailor your implementation.",
  keywords: "tracker onboarding, get started, implementation questionnaire",
  canonical: "https://tracker-systems.com/get-started"
};

export const termsSEO: SEOData = {
  title: "Terms of Service - Tracker Systems",
  description: "Read the legal terms governing the use of Tracker production management software and services.",
  keywords: "tracker terms of service, software terms, legal terms",
  canonical: "https://tracker-systems.com/terms"
};

export const privacySEO: SEOData = {
  title: "Privacy Policy - Tracker Systems",
  description: "Learn how Tracker collects, uses, and protects your data in compliance with privacy regulations.",
  keywords: "tracker privacy policy, data protection, GDPR",
  canonical: "https://tracker-systems.com/privacy"
};
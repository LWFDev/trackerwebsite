import { SEOData, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema } from '@/utils/seo';
import { getCurrentOrigin } from '@/utils/domain';

// Home page SEO
export const homeSEO: SEOData = {
  title: "Production Management Software | TrackMyBusiness - Enterprise Garment Decoration Platform",
  description: "The leading end-to-end production management software for garment decoration, apparel manufacturing, and custom embroidery businesses. Automate order handling, manage inventory, and optimize production workflow instantly with enterprise-grade features.",
  keywords: "production management software, garment decoration software, apparel manufacturing system, embroidery business software, screen printing management, custom apparel production, automated production scheduling, enterprise software",
  canonical: `${getCurrentOrigin()}/`,
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TrackMyBusiness",
    "alternateName": "TrackMyBusiness Production Management Software",
    "description": "Enterprise production management software for garment decoration, apparel manufacturing, and custom embroidery businesses",
    "url": getCurrentOrigin(),
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${getCurrentOrigin()}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
};

// Pricing page SEO
export const pricingSEO: SEOData = {
  title: "Pricing Plans - Affordable Production Management Software for Garment Decoration",
  description: "Choose the perfect TrackMyBusiness plan for your garment decoration business. Enterprise-grade features with flexible pricing for small shops to large manufacturers. Get started today with our comprehensive production management platform.",
  keywords: "production management software pricing, garment decoration software cost, apparel manufacturing software plans, embroidery business software pricing, enterprise production software, screen printing management pricing",
  canonical: `${getCurrentOrigin()}/pricing`,
  schema: generateProductSchema({
    name: "TrackMyBusiness Production Management Software",
    description: "Complete enterprise production management solution for garment decoration businesses with integrated modules for sales, production, inventory, and customer management",
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
  description: "Learn about TrackMyBusiness, the innovative company behind the leading production management software for garment decoration and apparel manufacturing industries.",
  keywords: "trackmybusiness company, production management software company, garment decoration software developers, apparel manufacturing technology, enterprise software provider",
  canonical: `${getCurrentOrigin()}/about`
};

// Contact page SEO
export const contactSEO: SEOData = {
  title: "Contact Us - Get Support for Production Management Software",
  description: "Get in touch with TrackMyBusiness for sales, support, or questions about our production management software. Expert support for your garment decoration business.",
  keywords: "trackmybusiness contact, production management software support, garment decoration software help, customer service, enterprise support",
  canonical: `${getCurrentOrigin()}/contact`
};

// Industries SEO data
export const industriesSEO: SEOData = {
  title: "Industries We Serve - Production Management Software Solutions",
  description: "Discover how TrackMyBusiness serves various industries including apparel manufacturing, embroidery, screen printing, promotional products, and custom decoration businesses.",
  keywords: "apparel manufacturing software, embroidery business software, screen printing management, promotional products software, custom decoration software, enterprise solutions",
  canonical: `${getCurrentOrigin()}/industries`
};

// Modules SEO data
export const modulesSEO: SEOData = {
  title: "Software Modules - Complete Production Management Features",
  description: "Explore all modules of TrackMyBusiness including inventory management, order processing, production scheduling, customer management, and more.",
  keywords: "production management modules, inventory management software, order processing system, production scheduling software, customer management system, enterprise modules",
  canonical: `${getCurrentOrigin()}/modules`
};

// Blog SEO data
export const blogSEO: SEOData = {
  title: "Production Management Blog - Industry Insights & Best Practices",
  description: "Stay updated with the latest trends, tips, and best practices in production management, garment decoration, and apparel manufacturing industry.",
  keywords: "production management blog, garment decoration tips, apparel manufacturing insights, embroidery business advice, industry trends",
  canonical: `${getCurrentOrigin()}/blog`
};

// Documentation SEO data
export const docsSEO: SEOData = {
  title: "Documentation - TrackMyBusiness User Guide & API Reference",
  description: "Complete documentation for TrackMyBusiness production management software including user guides, API reference, and integration tutorials.",
  keywords: "trackmybusiness documentation, production management software guide, API documentation, user manual, enterprise documentation",
  canonical: `${getCurrentOrigin()}/documentation`
};

// Support SEO data
export const supportSEO: SEOData = {
  title: "Support Center - Help & Resources for Production Management Software",
  description: "Get help with TrackMyBusiness production management software. Access FAQs, tutorials, and contact our support team for assistance.",
  keywords: "trackmybusiness support, production management software help, customer support, technical assistance, enterprise support",
  canonical: `${getCurrentOrigin()}/support`
};

// FAQ Schema for support page
export const supportFAQSchema = generateFAQSchema([
  {
    question: "How do I get started with TrackMyBusiness?",
    answer: "You can start with our evaluation period by signing up on our website. Our onboarding team will help you set up your account and import your existing data."
  },
  {
    question: "What types of businesses can use TrackMyBusiness?",
    answer: "TrackMyBusiness is designed for garment decoration businesses including embroidery shops, screen printers, promotional product companies, apparel manufacturers, and custom decoration services."
  },
  {
    question: "Do you offer integrations with other software?",
    answer: "Yes, we integrate with popular e-commerce platforms like Shopify and WooCommerce, accounting software like QuickBooks, and shipping providers like ShipStation."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, TrackMyBusiness offers mobile apps for both iOS and Android, allowing you to manage your business on the go."
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
    description: "Streamline your apparel manufacturing operations with TrackMyBusiness. Manage orders, inventory, production schedules, and quality control in one platform.",
    keywords: "apparel manufacturing software, clothing production management, garment manufacturing system, textile production software",
    canonical: `${getCurrentOrigin()}/industries/apparel-manufacturing`
  },
  'embroidery': {
    title: "Embroidery Business Software - Complete Shop Management System",
    description: "Manage your embroidery business efficiently with TrackMyBusiness. Handle orders, designs, production scheduling, and customer management seamlessly.",
    keywords: "embroidery business software, embroidery shop management, custom embroidery software, digitizing business software",
    canonical: `${getCurrentOrigin()}/industries/embroidery`
  },
  'screen-printing': {
    title: "Screen Printing Software - Shop Management & Production Control",
    description: "Optimize your screen printing operations with TrackMyBusiness. Manage orders, ink inventory, production schedules, and customer communications efficiently.",
    keywords: "screen printing software, screen print shop management, custom printing software, silk screen business software",
    canonical: `${getCurrentOrigin()}/industries/screen-printing`
  }
};

// Module-specific SEO data templates
export const generateModuleSEO = (moduleName: string, description: string, keywords: string): SEOData => ({
  title: `${moduleName} Module - Production Management Software Feature`,
  description: `${description} Part of TrackMyBusiness comprehensive production management platform for garment decoration businesses.`,
  keywords: `${keywords}, production management software, garment decoration software`,
  canonical: `${getCurrentOrigin()}/modules/${moduleName.toLowerCase().replace(/\s+/g, '-')}`
});

// Breadcrumb schemas for different page types
export const homeBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` }
]);

export const pricingBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Pricing", url: `${getCurrentOrigin()}/pricing` }
]);

export const aboutBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "About", url: `${getCurrentOrigin()}/about` }
]);

export const contactBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Contact", url: `${getCurrentOrigin()}/contact` }
]);

export const blogBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Blog", url: `${getCurrentOrigin()}/blog` }
]);

export const docsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Documentation", url: `${getCurrentOrigin()}/documentation` }
]);

export const supportBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Support", url: `${getCurrentOrigin()}/support` }
]);

export const industriesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Industries", url: `${getCurrentOrigin()}/industries` }
]);

export const modulesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Modules", url: `${getCurrentOrigin()}/modules` }
]);

export const caseStudiesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Case Studies", url: `${getCurrentOrigin()}/case-studies` }
]);

export const faqBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "FAQ", url: `${getCurrentOrigin()}/faq` }
]);

export const getStartedBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Get Started", url: `${getCurrentOrigin()}/get-started` }
]);

export const termsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Terms of Service", url: `${getCurrentOrigin()}/terms` }
]);

export const privacyBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Privacy Policy", url: `${getCurrentOrigin()}/privacy` }
]);

// Additional page SEO
export const caseStudiesSEO: SEOData = {
  title: "Case Studies - Real Results with TrackMyBusiness Production Management",
  description: "See how businesses transformed operations with TrackMyBusiness production management platform across embroidery, screen printing, and apparel manufacturing industries.",
  keywords: "trackmybusiness case studies, production management results, embroidery software success, screen printing ROI, enterprise software results",
  canonical: `${getCurrentOrigin()}/case-studies`
};

export const faqSEO: SEOData = {
  title: "FAQ - Answers About TrackMyBusiness Production Management Software",
  description: "Find answers to common questions about TrackMyBusiness pricing, implementation, integrations, and enterprise support services.",
  keywords: "trackmybusiness faq, production management faq, garment decoration software questions, enterprise software support",
  canonical: `${getCurrentOrigin()}/faq`
};

export const getStartedSEO: SEOData = {
  title: "Get Started - Onboarding with TrackMyBusiness Production Management",
  description: "Kick off your TrackMyBusiness onboarding process. Answer a few questions and our team will tailor your implementation for maximum efficiency.",
  keywords: "trackmybusiness onboarding, get started, implementation questionnaire, production management setup",
  canonical: `${getCurrentOrigin()}/get-started`
};

export const termsSEO: SEOData = {
  title: "Terms of Service - TrackMyBusiness Legal Terms",
  description: "Read the legal terms governing the use of TrackMyBusiness production management software and enterprise services.",
  keywords: "trackmybusiness terms of service, software terms, legal terms, enterprise agreement",
  canonical: `${getCurrentOrigin()}/terms`
};

export const privacySEO: SEOData = {
  title: "Privacy Policy - TrackMyBusiness Data Protection",
  description: "Learn how TrackMyBusiness collects, uses, and protects your business data in compliance with privacy regulations and enterprise security standards.",
  keywords: "trackmybusiness privacy policy, data protection, GDPR, enterprise security, business data privacy",
  canonical: `${getCurrentOrigin()}/privacy`
};
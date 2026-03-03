import { SEOData, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema } from '@/utils/seo';
import { getCurrentOrigin } from '@/utils/domain';

const GARMENT_KEYWORDS = "garment decoration software, DTG printing management, DTF transfer tracking, embroidery logo software, screen printing workflow, heat seal production, licensed team gear ordering, team gear customization, cloud logo management, production scheduling for embroidery, digital proof approvals, PLM garment integrations";

// Home page SEO
export const homeSEO: SEOData = {
  title: "Tracker: Cloud-Based Garment Decoration Software for Embroidery, DTG, DTF & Team Gear",
  description: "Streamline garment decoration with Tracker. Manage logos, proofs, production scheduling & machine integrations for embroidery, DTG, DTF, screen printing & team gear.",
  keywords: GARMENT_KEYWORDS + ", production management software, apparel manufacturing system, automated production scheduling, enterprise software, barcode integrations, thread color optimization",
  canonical: `${getCurrentOrigin()}/`,
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tracker",
    "alternateName": "Tracker Garment Decoration Software",
    "description": "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management",
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
  title: "Pricing - Cloud Garment Decoration Software for Embroidery, DTG & DTF",
  description: "Flexible pricing for Tracker's cloud garment decoration platform. Plans for embroidery shops, DTG/DTF printers, screen printers & licensed team gear operations.",
  keywords: GARMENT_KEYWORDS + ", production management software pricing, garment decoration software cost, embroidery business software pricing",
  canonical: `${getCurrentOrigin()}/pricing`,
  schema: generateProductSchema({
    name: "Tracker Garment Decoration Software",
    description: "Cloud-based production management for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear businesses",
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
  title: "About Tracker - Cloud Logo Management & Production Scheduling Software",
  description: "Learn how Tracker helps garment decorators manage embroidery logos, DTG/DTF production, digital proofs & PLM integrations from a single cloud platform.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness company, garment decoration software developers, apparel manufacturing technology",
  canonical: `${getCurrentOrigin()}/about`
};

// Contact page SEO
export const contactSEO: SEOData = {
  title: "Contact Us - Garment Decoration Software Support & Sales",
  description: "Get in touch for demos, support, or questions about Tracker's embroidery logo software, DTG printing management, production scheduling & ERP integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness contact, production management software support, customer service",
  canonical: `${getCurrentOrigin()}/contact`
};

// Industries SEO data
export const industriesSEO: SEOData = {
  title: "Industries - Garment Decoration Software for Embroidery, Screen Printing & DTG",
  description: "See how Tracker serves embroidery shops, screen printers, DTG/DTF operations, licensed team gear companies & apparel manufacturers with cloud production tools.",
  keywords: GARMENT_KEYWORDS + ", apparel manufacturing software, promotional products software, custom decoration software, enterprise solutions",
  canonical: `${getCurrentOrigin()}/industries`
};

// Modules SEO data
export const modulesSEO: SEOData = {
  title: "Software Modules - Logo Management, Production Scheduling & Proof Approvals",
  description: "Explore Tracker modules: embroidery logo management, DTG/DTF tracking, digital proof approvals, production scheduling, PLM garment integrations & more.",
  keywords: GARMENT_KEYWORDS + ", inventory management software, order processing system, production scheduling software, customer management system",
  canonical: `${getCurrentOrigin()}/modules`
};

// Blog SEO data
export const blogSEO: SEOData = {
  title: "Blog - Garment Decoration Tips, DTG/DTF Insights & Embroidery Best Practices",
  description: "Industry insights on garment decoration software, embroidery production, DTG printing, DTF transfers, screen printing workflows & team gear customization.",
  keywords: GARMENT_KEYWORDS + ", production management blog, apparel manufacturing insights, industry trends",
  canonical: `${getCurrentOrigin()}/blog`
};

// Documentation SEO data
export const docsSEO: SEOData = {
  title: "Documentation - Tracker User Guide & API Reference",
  description: "Complete documentation for Tracker garment decoration software including user guides, API reference, and integration tutorials for embroidery, DTG & DTF workflows.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness documentation, API documentation, user manual",
  canonical: `${getCurrentOrigin()}/documentation`
};

// Support SEO data
export const supportSEO: SEOData = {
  title: "Support - Help for Garment Decoration & Embroidery Software",
  description: "Get help with Tracker's garment decoration platform. FAQs, tutorials & support for logo management, production scheduling, proof approvals & integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness support, customer support, technical assistance",
  canonical: `${getCurrentOrigin()}/support`
};

// FAQ Schema for support page
export const supportFAQSchema = generateFAQSchema([
  {
    question: "How do I get started with Tracker?",
    answer: "You can start with our evaluation period by signing up on our website. Our onboarding team will help you set up your account, configure your embroidery, DTG, DTF, screen printing, or heat seal workflows, and import your existing logo and order data."
  },
  {
    question: "What types of businesses can use Tracker?",
    answer: "Tracker is designed for garment decoration businesses including embroidery shops, DTG and DTF printers, screen printers, heat seal operations, licensed team gear companies, promotional product firms, apparel manufacturers, and contract decorators."
  },
  {
    question: "Does Tracker integrate with embroidery and printing machines?",
    answer: "Yes, Tracker provides barcode integrations to embroidery machines (Barudan, Tajima via bNET/Pulse), DTG printers, DTF transfer systems, and heat seal equipment. Logos and production files are delivered directly to machines."
  },
  {
    question: "How does Tracker handle logo management and digital proofs?",
    answer: "Tracker provides cloud-based logo management with embroidery and print separation files (EMB, DST), quick proof creation, digital proof approvals with customer comments, and version tracking for all artwork assets."
  },
  {
    question: "What integrations does Tracker support?",
    answer: "Tracker integrates with blank garment distributors (SanMar, alphabroder), PLM systems for costs, pricing, and supply chain, e-commerce platforms (Shopify, WooCommerce), ERP systems, shipping providers (ShipStation), and accounting software."
  }
]);

// Industry-specific SEO data
export const industryPagesSEO = {
  'apparel-manufacturing': {
    title: "Apparel Manufacturing Software - Garment Decoration & Production Management",
    description: "Streamline apparel manufacturing with Tracker. Manage embroidery, DTG, DTF, screen printing & heat seal production with PLM integrations and supply chain tools.",
    keywords: GARMENT_KEYWORDS + ", apparel manufacturing software, clothing production management, textile production software",
    canonical: `${getCurrentOrigin()}/industries/apparel-manufacturing`
  },
  'embroidery': {
    title: "Embroidery Business Software - Logo Management & Machine Integration",
    description: "Manage your embroidery business with Tracker. Cloud logo management, thread color optimization, production scheduling, and barcode integrations to Barudan & Tajima machines.",
    keywords: GARMENT_KEYWORDS + ", embroidery business software, embroidery shop management, digitizing business software, Barudan, Tajima",
    canonical: `${getCurrentOrigin()}/industries/embroidery`
  },
  'screen-printing': {
    title: "Screen Printing Software - Workflow Management & Production Scheduling",
    description: "Optimize screen printing operations with Tracker. Manage print separation files, screen burning workflows, production scheduling, ink inventory & order tracking.",
    keywords: GARMENT_KEYWORDS + ", screen printing software, screen print shop management, print separation files",
    canonical: `${getCurrentOrigin()}/industries/screen-printing`
  }
};

// Module-specific SEO data templates
export const generateModuleSEO = (moduleName: string, description: string, keywords: string): SEOData => ({
  title: `${moduleName} - Garment Decoration Software Module`,
  description: `${description} Part of Tracker's cloud-based garment decoration platform for embroidery, DTG, DTF, screen printing & team gear businesses.`,
  keywords: `${keywords}, ${GARMENT_KEYWORDS}`,
  canonical: `${getCurrentOrigin()}/modules/${moduleName.toLowerCase().replace(/\s+/g, '-')}`
});

// Breadcrumb schemas
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
  title: "Case Studies - Real Results with Tracker Garment Decoration Software",
  description: "See how garment decorators transformed operations with Tracker. Results from embroidery, screen printing, DTG/DTF & licensed team gear businesses.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness case studies, production management results, embroidery software success",
  canonical: `${getCurrentOrigin()}/case-studies`
};

export const faqSEO: SEOData = {
  title: "FAQ - Garment Decoration Software Questions & Answers",
  description: "Find answers about Tracker's garment decoration software: embroidery logo management, DTG/DTF production, digital proofs, PLM integrations & pricing.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness faq, garment decoration software questions",
  canonical: `${getCurrentOrigin()}/faq`
};

export const getStartedSEO: SEOData = {
  title: "Get Started - Onboarding with Tracker Garment Decoration Software",
  description: "Start your Tracker onboarding. Configure embroidery, DTG, DTF, screen printing & heat seal workflows. Import logos, set up production scheduling & integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness onboarding, get started, implementation",
  canonical: `${getCurrentOrigin()}/get-started`
};

export const termsSEO: SEOData = {
  title: "Terms of Service - Tracker Legal Terms",
  description: "Read the legal terms governing the use of Tracker garment decoration software and enterprise services.",
  keywords: "trackmybusiness terms of service, software terms, legal terms",
  canonical: `${getCurrentOrigin()}/terms`
};

export const privacySEO: SEOData = {
  title: "Privacy Policy - Tracker Data Protection",
  description: "Learn how Tracker collects, uses, and protects your business data in compliance with privacy regulations and enterprise security standards.",
  keywords: "trackmybusiness privacy policy, data protection, GDPR, enterprise security",
  canonical: `${getCurrentOrigin()}/privacy`
};

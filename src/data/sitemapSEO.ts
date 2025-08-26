import { SEOData, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seo';

// Enterprise-grade SEO for the sitemap page
export const sitemapSEO: SEOData = {
  title: "Complete Website Sitemap | TrackMyBusiness - Production Management Software Navigation",
  description: "Navigate TrackMyBusiness comprehensive sitemap featuring 60+ pages of enterprise production management software solutions for garment decoration, embroidery, screen printing, and apparel manufacturing businesses. Find all features, modules, case studies, and resources.",
  keywords: "website sitemap, production management sitemap, garment decoration pages, embroidery software navigation, screen printing resources, apparel manufacturing modules, business software directory, enterprise software sitemap, trackmy business pages",
  canonical: "https://www.trackmybusiness.us/sitemap",
  robots: "index,follow",
  ogType: "website",
  ogImage: "https://www.trackmybusiness.us/assets/sitemap-og.png",
  schema: [
    // WebSite Schema with Site Search
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TrackMyBusiness",
      "alternateName": "TrackMyBusiness Production Management Software",
      "url": "https://www.trackmybusiness.us",
      "description": "Enterprise production management software for garment decoration, apparel manufacturing, and custom embroidery businesses",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.trackmybusiness.us/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "TrackMyBusiness Complete Sitemap",
      "description": "Comprehensive directory of all TrackMyBusiness production management software pages, modules, features, and resources",
      "url": "https://www.trackmybusiness.us/sitemap",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": "60",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "name": "Production Management Modules",
            "url": "https://www.trackmybusiness.us/modules",
            "description": "Complete suite of production management modules for garment decoration businesses"
          },
          {
            "@type": "SiteNavigationElement", 
            "name": "Industry Solutions",
            "url": "https://www.trackmybusiness.us/industries",
            "description": "Specialized solutions for embroidery, screen printing, apparel manufacturing, and more"
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Case Studies & Results",
            "url": "https://www.trackmybusiness.us/case-studies", 
            "description": "Real customer success stories and ROI results from production management implementations"
          }
        ]
      }
    }
  ]
};

// Sitemap breadcrumb schema
export const sitemapBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.trackmybusiness.us/" },
  { name: "Sitemap", url: "https://www.trackmybusiness.us/sitemap" }
]);

// Sitemap FAQ Schema for enterprise SEO
export const sitemapFAQSchema = generateFAQSchema([
  {
    question: "How do I navigate the TrackMyBusiness website?",
    answer: "Use our comprehensive sitemap to find all production management software features, modules, industry solutions, case studies, and resources. Each section is organized by business function and industry type."
  },
  {
    question: "What production management modules are available?",
    answer: "TrackMyBusiness offers 15+ integrated modules including Sales Orders, Production Scheduling, Inventory Management, Customer Database, Artwork Management, and Financial Reporting for complete business automation."
  },
  {
    question: "Which industries does TrackMyBusiness serve?",
    answer: "We specialize in garment decoration industries including embroidery shops, screen printing companies, promotional products businesses, apparel manufacturers, contract decorators, and custom uniform providers."
  },
  {
    question: "How can I download the XML sitemap for SEO?",
    answer: "Click the 'Download XML Sitemap' button on this page to get the complete XML sitemap file that you can submit to Google Search Console and other search engines for optimal crawling and indexing."
  }
]);
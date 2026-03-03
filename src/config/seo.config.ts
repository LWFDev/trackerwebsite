import { getDomainUrl } from '@/utils/domain';

export const SEO_CONFIG = {
  // Domain and Site Info
  siteUrl: getDomainUrl(), // Dynamic domain based on current site
  siteName: "Tracker",
  
  // Analytics
  ga4MeasurementId: "G-XXXXXXXXXX", // Replace with your actual GA4 ID
  
  // Search engine verification tokens
  googleSiteVerification: "your-google-verification-token", // Replace with actual token
  bingSiteVerification: "your-bing-verification-token",     // Replace with actual token
  yandexSiteVerification: "",
  pinterestSiteVerification: "",
  
  // Business Information
  businessName: "Tracker",
  businessDescription: "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management",
  businessPhone: "+1-800-TRACKER",
  businessEmail: "info@trackmybusiness.us",
  
  // Social Media
  socialProfiles: {
    twitter: "https://twitter.com/trackmybusiness",
    linkedin: "https://linkedin.com/company/trackmybusiness",
    facebook: "https://facebook.com/trackmybusiness"
  }
};

export type SEOConfig = typeof SEO_CONFIG;

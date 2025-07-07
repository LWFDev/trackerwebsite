import { useEffect } from 'react';
import { SEOData } from '@/utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
}

export const SEOHead = ({ seoData }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update canonical URL
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoData.canonical);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    }

    if (seoData.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', seoData.ogImage);
      }
    }

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seoData.title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', seoData.description);
    }

    if (seoData.ogImage) {
      const twitterImage = document.querySelector('meta[property="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', seoData.ogImage);
      }
    }

    // Add structured data if provided
    if (seoData.schema) {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-page-schema]');
      if (existingSchema) {
        existingSchema.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(seoData.schema);
      document.head.appendChild(script);
    }

    // Cleanup function to remove page-specific schema when component unmounts
    return () => {
      const pageSchema = document.querySelector('script[type="application/ld+json"][data-page-schema]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [seoData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
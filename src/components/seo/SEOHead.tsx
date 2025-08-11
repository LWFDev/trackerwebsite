import { useEffect } from 'react';
import { SEOData } from '@/utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
}

export const SEOHead = ({ seoData }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Helpers to ensure meta/link tags exist
    const ensureMeta = (attr: 'name' | 'property', id: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${id}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, id);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const ensureLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Meta description and keywords
    ensureMeta('name', 'description', seoData.description);
    ensureMeta('name', 'keywords', seoData.keywords);

    // Canonical URL
    if (seoData.canonical) {
      ensureLink('canonical', seoData.canonical);
    }

    // Open Graph meta tags
    ensureMeta('property', 'og:title', seoData.title);
    ensureMeta('property', 'og:description', seoData.description);
    if (seoData.ogImage) {
      ensureMeta('property', 'og:image', seoData.ogImage);
    }
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:url', seoData.canonical || window.location.href);
    ensureMeta('property', 'og:site_name', 'Tracker Systems');

    // Twitter meta tags
    ensureMeta('name', 'twitter:card', seoData.ogImage ? 'summary_large_image' : 'summary');
    ensureMeta('name', 'twitter:title', seoData.title);
    ensureMeta('name', 'twitter:description', seoData.description);
    if (seoData.ogImage) {
      ensureMeta('name', 'twitter:image', seoData.ogImage);
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
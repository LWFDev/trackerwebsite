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
    ensureMeta('name', 'robots', seoData.robots || 'index,follow');
    // Canonical URL
    if (seoData.canonical) {
      ensureLink('canonical', seoData.canonical);
    }

    // Hreflang alternates
    document.querySelectorAll('link[rel="alternate"][data-page-hreflang]').forEach((n) => n.parentNode?.removeChild(n));
    if (seoData.alternates && seoData.alternates.length) {
      seoData.alternates.forEach((alt) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', alt.hrefLang);
        link.setAttribute('href', alt.href);
        link.setAttribute('data-page-hreflang', 'true');
        document.head.appendChild(link);
      });
    }

    // Pagination links
    document.querySelectorAll('link[data-page-pagination]').forEach((n) => n.parentNode?.removeChild(n));
    if (seoData.pagination) {
      if (seoData.pagination.prev) {
        const prev = document.createElement('link');
        prev.setAttribute('rel', 'prev');
        prev.setAttribute('href', seoData.pagination.prev);
        prev.setAttribute('data-page-pagination', 'true');
        document.head.appendChild(prev);
      }
      if (seoData.pagination.next) {
        const next = document.createElement('link');
        next.setAttribute('rel', 'next');
        next.setAttribute('href', seoData.pagination.next);
        next.setAttribute('data-page-pagination', 'true');
        document.head.appendChild(next);
      }
    }

    // Open Graph meta tags
    ensureMeta('property', 'og:title', seoData.title);
    ensureMeta('property', 'og:description', seoData.description);
    if (seoData.ogImage) {
      ensureMeta('property', 'og:image', seoData.ogImage);
    }
    ensureMeta('property', 'og:type', seoData.ogType || 'website');
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

    // Cleanup function to remove page-specific schema and link tags when component unmounts
    return () => {
      const pageSchema = document.querySelector('script[type="application/ld+json"][data-page-schema]');
      if (pageSchema) {
        pageSchema.remove();
      }
      document.querySelectorAll('link[rel="alternate"][data-page-hreflang]').forEach((n) => n.remove());
      document.querySelectorAll('link[data-page-pagination]').forEach((n) => n.remove());
    };
  }, [seoData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
import { useEffect } from 'react';

interface MetaHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
  ogType?: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title = "Tracker - Production Management Software | Garment Decoration Platform",
  description = "The leading end-to-end production management software for garment decoration, apparel manufacturing, and custom embroidery businesses. Automate order handling, manage inventory, and optimize production workflow instantly.",
  keywords = "production management software, garment decoration software, apparel manufacturing system, embroidery business software, screen printing management, custom apparel production, automated production scheduling",
  ogImage = `${window.location.origin}/assets/og-image.png`,
  canonical,
  robots = "index,follow",
  ogType = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', robots);

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:url', canonical || window.location.href, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:site_name', 'Tracker Systems', true);

    // Twitter tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      updateLink('canonical', canonical);
    }

    // Viewport (should already exist but ensure it's correct)
    updateMeta('viewport', 'width=device-width, initial-scale=1');

    // Theme color
    updateMeta('theme-color', '#1a1a1a');

    return () => {
      // Cleanup function could remove dynamic meta tags if needed
      // For now, we'll leave them as they don't cause issues
    };
  }, [title, description, keywords, ogImage, canonical, robots, ogType]);

  return null;
};

export default MetaHead;
import { useEffect } from 'react';
import { SEO_CONFIG } from '@/config/seo.config';

/**
 * Injects site verification meta tags for Google, Bing, Yandex, Pinterest, etc.
 * Values are configured in src/config/seo.config.ts
 */
const SiteVerification = () => {
  useEffect(() => {
    const added: HTMLMetaElement[] = [];

    const ensureVerification = (name: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
        added.push(el);
      }
      el.setAttribute('content', content);
    };

    // Google Search Console
    ensureVerification('google-site-verification', SEO_CONFIG.googleSiteVerification);
    // Bing (Microsoft Clarity/Webmaster Tools)
    ensureVerification('msvalidate.01', SEO_CONFIG.bingSiteVerification);
    // Yandex
    ensureVerification('yandex-verification', SEO_CONFIG.yandexSiteVerification);
    // Pinterest
    ensureVerification('p:domain_verify', SEO_CONFIG.pinterestSiteVerification);

    return () => {
      added.forEach((el) => el.remove());
    };
  }, []);

  return null;
};

export default SiteVerification;

import { useEffect } from 'react';
import { SEO_CONFIG } from '@/config/seo.config';

/**
 * Lightweight GA4 loader. Injects gtag.js only when a measurement ID is provided
 * in src/config/seo.config.ts. Cleans up on unmount.
 */
const Analytics = () => {
  useEffect(() => {
    const id = SEO_CONFIG.ga4MeasurementId?.trim();
    if (!id) return;

    // Avoid duplicate injection
    if (document.querySelector(`script[data-ga4="${id}"]`)) return;

    const gtagSrc = document.createElement('script');
    gtagSrc.async = true;
    gtagSrc.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    gtagSrc.setAttribute('data-ga4', id);

    const gtagInit = document.createElement('script');
    gtagInit.setAttribute('data-ga4', id);
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}', { send_page_view: true });
    `;

    document.head.appendChild(gtagSrc);
    document.head.appendChild(gtagInit);

    return () => {
      document.querySelectorAll(`script[data-ga4="${id}"]`).forEach((n) => n.remove());
    };
  }, []);

  return null;
};

export default Analytics;

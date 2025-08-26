export const generateSitemap = (): string => {
  const baseUrl = window.location.origin;
  const currentDate = new Date().toISOString();
  
  const urls = [
    // Main pages
    { loc: '', priority: '1.0', changefreq: 'weekly' },
    { loc: '/pricing', priority: '0.9', changefreq: 'monthly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
    { loc: '/industries', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
    { loc: '/support', priority: '0.7', changefreq: 'monthly' },
    { loc: '/documentation', priority: '0.7', changefreq: 'monthly' },
    { loc: '/case-studies', priority: '0.6', changefreq: 'monthly' },
    { loc: '/faq', priority: '0.6', changefreq: 'monthly' },
    { loc: '/get-started', priority: '0.9', changefreq: 'monthly' },
    
    // Industry pages
    { loc: '/industries/high-volume-embroidery', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/screen-printing', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/apparel-manufacturing', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/corporate-apparel', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/promotional-products', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/sports-and-uniforms', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/workwear-uniforms', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/fashion-brands', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/print-on-demand', priority: '0.7', changefreq: 'monthly' },
    { loc: '/industries/contract-decoration', priority: '0.7', changefreq: 'monthly' },
    
    // Module pages
    { loc: '/modules/sales-orders', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/warehouse', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/customer-database', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/base-garments', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/logos', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/product-designer', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/inventory', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/production', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/suppliers', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/purchase-orders', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/artworkers', priority: '0.8', changefreq: 'monthly' },
    { loc: '/modules/customer-portal', priority: '0.8', changefreq: 'monthly' },
    
    // Case studies
    { loc: '/case-studies/pure-optical', priority: '0.5', changefreq: 'monthly' },
    { loc: '/case-studies/woolcool', priority: '0.5', changefreq: 'monthly' },
    { loc: '/case-studies/agame', priority: '0.5', changefreq: 'monthly' },
    
    // Blog posts (example - in real implementation, fetch from CMS)
    { loc: '/blog/streamline-garment-decoration-workflow', priority: '0.5', changefreq: 'monthly' },
    { loc: '/blog/screen-printing-vs-dtg', priority: '0.5', changefreq: 'monthly' },
    { loc: '/blog/new-integration-platform-features', priority: '0.5', changefreq: 'monthly' },
  ];

  const urlsXml = urls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
};

export const generateRobotsTxt = (): string => {
  const baseUrl = window.location.origin;
  
  return `# Tracker Systems - Production Management Software
# ${baseUrl}

User-agent: *
Allow: /

# Crawl priority directives
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# Disallow admin and internal paths
Disallow: /admin/
Disallow: /api/
Disallow: /temp/
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*ref=*
Disallow: /search?*
# Utility pages (noindex)
Disallow: /login
Disallow: /payment-success
Disallow: /404

# Allow important pages
Allow: /pricing
Allow: /about
Allow: /contact
Allow: /industries/
Allow: /modules/
Allow: /blog/
Allow: /support
Allow: /documentation

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Preferred domain
Host: ${baseUrl.replace(/^https?:\/\//, '')}
`;
};
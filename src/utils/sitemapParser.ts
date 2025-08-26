export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  title: string;
  description: string;
}

export interface SitemapSection {
  title: string;
  description: string;
  urls: SitemapUrl[];
  icon: string;
}

const urlTitles: { [key: string]: { title: string; description: string } } = {
  '/': { title: 'Home', description: 'Welcome to TrackMyBusiness - Garment decoration business management software' },
  '/pricing': { title: 'Pricing', description: 'Choose the right plan for your garment decoration business' },
  '/about': { title: 'About Us', description: 'Learn about TrackMyBusiness and our mission' },
  '/contact': { title: 'Contact', description: 'Get in touch with our team' },
  '/industries': { title: 'Industries', description: 'Discover solutions for your specific industry' },
  '/modules': { title: 'Modules', description: 'Explore all available business modules' },
  '/blog': { title: 'Blog', description: 'Latest insights and industry updates' },
  '/support': { title: 'Support', description: 'Get help and technical support' },
  '/documentation': { title: 'Documentation', description: 'Technical documentation and guides' },
  '/get-started': { title: 'Get Started', description: 'Begin your journey with TrackMyBusiness' },
  '/case-studies': { title: 'Case Studies', description: 'Success stories from our customers' },
  '/faq': { title: 'FAQ', description: 'Frequently asked questions' },
  '/terms': { title: 'Terms of Service', description: 'Legal terms and conditions' },
  '/privacy': { title: 'Privacy Policy', description: 'How we protect your privacy' },
  
  // Industries
  '/industries/high-volume-embroidery': { title: 'High Volume Embroidery', description: 'Solutions for high-volume embroidery operations' },
  '/industries/screen-printing': { title: 'Screen Printing', description: 'Streamline your screen printing business' },
  '/industries/apparel-manufacturing': { title: 'Apparel Manufacturing', description: 'Manufacturing solutions for apparel companies' },
  '/industries/corporate-apparel': { title: 'Corporate Apparel', description: 'Manage corporate apparel programs efficiently' },
  '/industries/promotional-products': { title: 'Promotional Products', description: 'Solutions for promotional product companies' },
  '/industries/sports-and-uniforms': { title: 'Sports & Uniforms', description: 'Sports team and uniform management' },
  '/industries/workwear-uniforms': { title: 'Workwear & Uniforms', description: 'Workwear and safety uniform solutions' },
  '/industries/fashion-brands': { title: 'Fashion Brands', description: 'Fashion brand management and production' },
  '/industries/print-on-demand': { title: 'Print on Demand', description: 'Print-on-demand business solutions' },
  '/industries/contract-decoration': { title: 'Contract Decoration', description: 'Contract decoration service management' },
  
  // Modules
  '/modules/sales-orders': { title: 'Sales Orders', description: 'Comprehensive sales order management system' },
  '/modules/warehouse': { title: 'Warehouse', description: 'Advanced warehouse management tools' },
  '/modules/customer-database': { title: 'Customer Database', description: 'Centralized customer relationship management' },
  '/modules/base-garments': { title: 'Base Garments', description: 'Inventory management for base garments' },
  '/modules/logos': { title: 'Logos', description: 'Logo and artwork management system' },
  '/modules/product-designer': { title: 'Product Designer', description: 'Visual product design and customization' },
  '/modules/inventory': { title: 'Inventory', description: 'Complete inventory tracking and management' },
  '/modules/production': { title: 'Production', description: 'Production planning and workflow management' },
  '/modules/suppliers': { title: 'Suppliers', description: 'Supplier relationship and procurement management' },
  '/modules/purchase-orders': { title: 'Purchase Orders', description: 'Purchase order creation and tracking' },
  '/modules/artworkers': { title: 'Artworkers', description: 'Artwork team collaboration and management' },
  '/modules/customer-portal': { title: 'Customer Portal', description: 'Self-service customer portal system' },
  
  // Case Studies
  '/case-studies/pure-optical': { title: 'Pure Optical Case Study', description: 'How Pure Optical streamlined their operations' },
  '/case-studies/woolcool': { title: 'WoolCool Case Study', description: 'WoolCool\'s success with TrackMyBusiness' },
  '/case-studies/agame': { title: 'AGAME Case Study', description: 'AGAME\'s digital transformation journey' },
  
  // Blog Posts
  '/blog/streamline-garment-decoration-workflow': { title: '5 Ways to Streamline Your Garment Decoration Workflow', description: 'Practical tips to optimize your decoration workflow' },
  '/blog/screen-printing-vs-dtg': { title: 'Understanding Screen Printing vs. DTG', description: 'Compare screen printing and direct-to-garment methods' },
  '/blog/new-integration-platform-features': { title: 'New Integration Platform Features', description: 'Latest updates to our integration platform' },
};

export const parseSitemapData = (): SitemapSection[] => {
  const sitemapData = [
    // Main Pages
    {
      title: 'Main Pages',
      description: 'Core pages and primary navigation',
      icon: '🏠',
      urls: [
        { loc: 'https://www.trackmybusiness.us/', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'weekly', priority: '1.0' },
        { loc: 'https://www.trackmybusiness.us/pricing', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.9' },
        { loc: 'https://www.trackmybusiness.us/about', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/contact', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/get-started', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.9' },
      ]
    },
    
    // Industries
    {
      title: 'Industries',
      description: 'Industry-specific solutions and use cases',
      icon: '🏭',
      urls: [
        { loc: 'https://www.trackmybusiness.us/industries', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/industries/high-volume-embroidery', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/screen-printing', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/apparel-manufacturing', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/corporate-apparel', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/promotional-products', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/sports-and-uniforms', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/workwear-uniforms', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/fashion-brands', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/print-on-demand', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/industries/contract-decoration', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
      ]
    },
    
    // Modules
    {
      title: 'Modules',
      description: 'Business management modules and features',
      icon: '⚙️',
      urls: [
        { loc: 'https://www.trackmybusiness.us/modules', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/sales-orders', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/warehouse', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/customer-database', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/base-garments', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/logos', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/product-designer', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/inventory', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/production', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/suppliers', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/purchase-orders', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/artworkers', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
        { loc: 'https://www.trackmybusiness.us/modules/customer-portal', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.8' },
      ]
    },
    
    // Resources
    {
      title: 'Resources',
      description: 'Documentation, blog, and support resources',
      icon: '📚',
      urls: [
        { loc: 'https://www.trackmybusiness.us/blog', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'weekly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/documentation', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/support', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.7' },
        { loc: 'https://www.trackmybusiness.us/faq', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.6' },
      ]
    },
    
    // Case Studies
    {
      title: 'Case Studies',
      description: 'Real customer success stories and implementations',
      icon: '📊',
      urls: [
        { loc: 'https://www.trackmybusiness.us/case-studies', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.6' },
        { loc: 'https://www.trackmybusiness.us/case-studies/pure-optical', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
        { loc: 'https://www.trackmybusiness.us/case-studies/woolcool', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
        { loc: 'https://www.trackmybusiness.us/case-studies/agame', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
      ]
    },
    
    // Blog Posts
    {
      title: 'Blog Posts',
      description: 'Latest articles and industry insights',
      icon: '📝',
      urls: [
        { loc: 'https://www.trackmybusiness.us/blog/streamline-garment-decoration-workflow', lastmod: '2023-06-15T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
        { loc: 'https://www.trackmybusiness.us/blog/screen-printing-vs-dtg', lastmod: '2023-05-28T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
        { loc: 'https://www.trackmybusiness.us/blog/new-integration-platform-features', lastmod: '2023-04-10T00:00:00+00:00', changefreq: 'monthly', priority: '0.5' },
      ]
    },
    
    // Legal
    {
      title: 'Legal',
      description: 'Terms, privacy policy, and legal information',
      icon: '⚖️',
      urls: [
        { loc: 'https://www.trackmybusiness.us/terms', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'yearly', priority: '0.3' },
        { loc: 'https://www.trackmybusiness.us/privacy', lastmod: '2025-08-26T00:00:00+00:00', changefreq: 'yearly', priority: '0.3' },
      ]
    }
  ];

  // Add titles and descriptions to each URL
  return sitemapData.map(section => ({
    ...section,
    urls: section.urls.map(url => {
      const path = url.loc.replace('https://www.trackmybusiness.us', '') || '/';
      const meta = urlTitles[path] || { title: path, description: '' };
      return {
        ...url,
        title: meta.title,
        description: meta.description
      };
    })
  }));
};

export const getSitemapStats = () => {
  const sections = parseSitemapData();
  const totalPages = sections.reduce((sum, section) => sum + section.urls.length, 0);
  const lastUpdated = new Date().toLocaleDateString();
  
  return {
    totalPages,
    totalSections: sections.length,
    lastUpdated
  };
};
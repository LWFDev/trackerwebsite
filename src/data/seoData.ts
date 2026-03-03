import { SEOData, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema, generateHowToSchema, generateDatasetSchema, generateModuleSchema, softwareApplicationSchema, generateVideoSchema } from '@/utils/seo';
import { getCurrentOrigin } from '@/utils/domain';

const GARMENT_KEYWORDS = "garment decoration software, DTG printing management, DTF transfer tracking, embroidery logo software, screen printing workflow, heat seal production, licensed team gear ordering, team gear customization, cloud logo management, production scheduling for embroidery, digital proof approvals, PLM garment integrations";

// Home page SEO
export const homeSEO: SEOData = {
  title: "Tracker: Cloud-Based Garment Decoration Software for Embroidery, DTG, DTF & Team Gear",
  description: "Streamline garment decoration with Tracker. Manage logos, proofs, production scheduling & machine integrations for embroidery, DTG, DTF, screen printing & team gear.",
  keywords: GARMENT_KEYWORDS + ", production management software, apparel manufacturing system, automated production scheduling, enterprise software, barcode integrations, thread color optimization",
  canonical: `${getCurrentOrigin()}/`,
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tracker",
    "alternateName": "Tracker Garment Decoration Software",
    "description": "Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management",
    "url": getCurrentOrigin(),
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${getCurrentOrigin()}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
};

// Pricing page SEO
export const pricingSEO: SEOData = {
  title: "Pricing - Cloud Garment Decoration Software for Embroidery, DTG & DTF",
  description: "Flexible pricing for Tracker's cloud garment decoration platform. Plans for embroidery shops, DTG/DTF printers, screen printers & licensed team gear operations.",
  keywords: GARMENT_KEYWORDS + ", production management software pricing, garment decoration software cost, embroidery business software pricing",
  canonical: `${getCurrentOrigin()}/pricing`,
  schema: generateProductSchema({
    name: "Tracker Garment Decoration Software",
    description: "Cloud-based production management for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear businesses",
    offers: {
      "@type": "AggregateOffer",
      "lowPrice": "99",
      "highPrice": "499",
      "priceCurrency": "USD",
      "offerCount": "3"
    }
  })
};

// About page SEO
export const aboutSEO: SEOData = {
  title: "About Tracker - Cloud Logo Management & Production Scheduling Software",
  description: "Learn how Tracker helps garment decorators manage embroidery logos, DTG/DTF production, digital proofs & PLM integrations from a single cloud platform.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness company, garment decoration software developers, apparel manufacturing technology",
  canonical: `${getCurrentOrigin()}/about`
};

// Contact page SEO
export const contactSEO: SEOData = {
  title: "Contact Us - Garment Decoration Software Support & Sales",
  description: "Get in touch for demos, support, or questions about Tracker's embroidery logo software, DTG printing management, production scheduling & ERP integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness contact, production management software support, customer service",
  canonical: `${getCurrentOrigin()}/contact`
};

// Industries SEO data
export const industriesSEO: SEOData = {
  title: "Industries - Garment Decoration Software for Embroidery, Screen Printing & DTG",
  description: "See how Tracker serves embroidery shops, screen printers, DTG/DTF operations, licensed team gear companies & apparel manufacturers with cloud production tools.",
  keywords: GARMENT_KEYWORDS + ", apparel manufacturing software, promotional products software, custom decoration software, enterprise solutions",
  canonical: `${getCurrentOrigin()}/industries`
};

// Modules SEO data
export const modulesSEO: SEOData = {
  title: "Software Modules - Logo Management, Production Scheduling & Proof Approvals",
  description: "Explore Tracker modules: embroidery logo management, DTG/DTF tracking, digital proof approvals, production scheduling, PLM garment integrations & more.",
  keywords: GARMENT_KEYWORDS + ", inventory management software, order processing system, production scheduling software, customer management system",
  canonical: `${getCurrentOrigin()}/modules`
};

// Blog SEO data
export const blogSEO: SEOData = {
  title: "Blog - Garment Decoration Tips, DTG/DTF Insights & Embroidery Best Practices",
  description: "Industry insights on garment decoration software, embroidery production, DTG printing, DTF transfers, screen printing workflows & team gear customization.",
  keywords: GARMENT_KEYWORDS + ", production management blog, apparel manufacturing insights, industry trends",
  canonical: `${getCurrentOrigin()}/blog`
};

// Documentation SEO data
export const docsSEO: SEOData = {
  title: "Documentation - Tracker User Guide & API Reference",
  description: "Complete documentation for Tracker garment decoration software including user guides, API reference, and integration tutorials for embroidery, DTG & DTF workflows.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness documentation, API documentation, user manual",
  canonical: `${getCurrentOrigin()}/documentation`
};

// Support SEO data
export const supportSEO: SEOData = {
  title: "Support - Help for Garment Decoration & Embroidery Software",
  description: "Get help with Tracker's garment decoration platform. FAQs, tutorials & support for logo management, production scheduling, proof approvals & integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness support, customer support, technical assistance",
  canonical: `${getCurrentOrigin()}/support`
};

// FAQ Schema for support page
export const supportFAQSchema = generateFAQSchema([
  {
    question: "How do I get started with Tracker?",
    answer: "You can start with our evaluation period by signing up on our website. Our onboarding team will help you set up your account, configure your embroidery, DTG, DTF, screen printing, or heat seal workflows, and import your existing logo and order data."
  },
  {
    question: "What types of businesses can use Tracker?",
    answer: "Tracker is designed for garment decoration businesses including embroidery shops, DTG and DTF printers, screen printers, heat seal operations, licensed team gear companies, promotional product firms, apparel manufacturers, and contract decorators."
  },
  {
    question: "Does Tracker integrate with embroidery and printing machines?",
    answer: "Yes, Tracker provides barcode integrations to embroidery machines (Barudan, Tajima via bNET/Pulse), DTG printers, DTF transfer systems, and heat seal equipment. Logos and production files are delivered directly to machines."
  },
  {
    question: "How does Tracker handle logo management and digital proofs?",
    answer: "Tracker provides cloud-based logo management with embroidery and print separation files (EMB, DST), quick proof creation, digital proof approvals with customer comments, and version tracking for all artwork assets."
  },
  {
    question: "What integrations does Tracker support?",
    answer: "Tracker integrates with blank garment distributors (SanMar, alphabroder), PLM systems for costs, pricing, and supply chain, e-commerce platforms (Shopify, WooCommerce), ERP systems, shipping providers (ShipStation), and accounting software."
  }
]);

// === FAQ Page Schema (comprehensive — 100-200 word answers for rich snippet eligibility) ===
export const faqPageSchema = generateFAQSchema([
  { question: "How do I know if Tracker is right for us?", answer: "Tracker is designed for garment decoration businesses of all sizes — from a single-head embroidery shop to a multi-location enterprise running embroidery, DTG, DTF, screen printing, heat seal, and licensed team gear simultaneously. If you manage customer logos, send proofs for approval, schedule production across machines, track operator time, or source blank garments from distributors like SanMar and alphabroder, Tracker replaces the spreadsheets, shared drives, and disconnected tools you currently juggle. We offer personalised demos tailored to your specific decoration methods, volume, and integration needs so you can evaluate fit before committing. Most customers see ROI within the first 90 days through reduced reprints, faster proof cycles, and better machine utilisation." },
  { question: "What decoration methods does Tracker support?", answer: "Tracker supports every major garment decoration method used in commercial production: multi-head and single-head embroidery, direct-to-garment (DTG) printing, DTF (direct-to-film) transfers, screen printing (manual and automatic presses), heat-seal and heat-transfer vinyl (HTV), sublimation, and hybrid workflows that combine multiple methods on a single order. The platform manages logo files in the appropriate format for each method — EMB and DST for embroidery, high-resolution print files for DTG and DTF, and colour-separated films for screen printing. Production scheduling is method-aware, so thread-colour optimisation applies to embroidery jobs while ink-channel management applies to DTG queues." },
  { question: "How does Tracker handle embroidery logo files (EMB, DST)?", answer: "Tracker provides cloud-based logo management with full support for industry-standard embroidery formats including EMB, DST, PES, EXP, JEF, and XXX. When you upload an embroidery file, Tracker auto-detects the format, reads stitch count and colour-stop data, and indexes the file by customer, logo name, thread palette, and hoop size. Every logo is automatically versioned with a complete audit trail showing who uploaded, edited, or approved each revision. When production begins, operators scan a job barcode and Tracker pushes the correct file version directly to the embroidery machine controller — Barudan via bNET or Tajima via Pulse/DG16 — with pre-configured needle assignments and thread sequences. This eliminates USB transfers, wrong-version errors, and the 3–5% reprint rate that plagues shops using shared drives." },
  { question: "How do digital proof approvals work?", answer: "Tracker's digital proof approval system generates professional proofs from your cloud logo library. You select a logo, choose a garment mockup (polo, hoodie, cap, bag), position the decoration, and add thread-chart or ink specifications. The proof is sent to your customer via email with a unique approval link, or through the customer portal. Customers review on any device — desktop, tablet, or mobile — zoom into stitch detail, and leave threaded comments directly on the proof image. When satisfied, they click 'Approve' and the job automatically releases to production scheduling with the approved file version locked. For licensed team gear, proofs can be routed through multiple stakeholders (coach, compliance officer, purchasing manager) before reaching production. The complete audit trail satisfies league licensing requirements." },
  { question: "What embroidery and printing machines does Tracker integrate with?", answer: "Tracker's barcode-to-machine integration supports the industry's most widely used production equipment. For embroidery: Barudan machines via the bNET protocol and Tajima machines via Pulse/DG16 controllers — the design file, thread chart, speed settings, and needle assignments are pushed directly to the machine controller. For DTG printing: Brother GTX series, Epson SureColor F-series, and Kornit digital printers with platen assignment and pre-treatment workflow management. For DTF: Epson-based DTF systems with film-print, powder-cure, and press-application stage scheduling. For screen printing: M&R and ROQ automatic presses with screen-burn sequence scheduling. For heat seal: temperature, pressure, and dwell-time parameters are pre-loaded per job. All integrations are triggered by barcode scanning." },
  { question: "How does thread colour optimisation improve production?", answer: "Tracker's production scheduler analyses all queued embroidery jobs and groups them by thread palette similarity. Orders that share the same thread colours are batched together into sequential runs, eliminating redundant needle re-threading. The algorithm considers needle positions (which colours are loaded on which needles), colour proximity (grouping similar palettes even if not identical), due dates (ensuring urgent orders aren't delayed by batching), and hoop compatibility (matching similar garment sizes). Combined with order stacking — where multiple small orders are placed on the same hoop run — Tracker customers report 20–25% more stitches per machine-hour and up to 40% fewer thread changeovers. For a typical 12-head Barudan machine, this translates to 1.5–2 additional productive hours per shift." },
  { question: "Does Tracker track operator time and machine efficiency?", answer: "Yes. Operators clock on and off each job by scanning a barcode at their workstation. Tracker captures the actual run time for every job, compares it to the estimated time from your quoting system, and calculates labour cost per piece and per decoration method. Real-time dashboards display head utilisation percentages, downtime reasons (thread break, maintenance, setup), stitch counts per hour, and job completion rates across all machines and shifts. Supervisors can view performance by operator, machine, or decoration method to identify training opportunities and equipment issues. The time-tracking data feeds back into Tracker's quoting engine so future quotes reflect actual production costs rather than guesswork — improving margin accuracy by 15–20% on average." },
  { question: "What PLM and distributor integrations does Tracker support?", answer: "Tracker connects to blank-garment distributors including SanMar (50,000+ styles with live inventory, volume-tier pricing, and size/colour matrix), alphabroder (real-time stock and pricing API), and S&S Activewear. These integrations pull product catalogues, live pricing, and warehouse inventory directly into Tracker so your sales team quotes with accurate blank-garment costs. For PLM and ERP, Tracker integrates with SAP Business One, Oracle NetSuite, Sage 50/Intacct, QuickBooks Online and Desktop, Xero, and Microsoft Dynamics 365 — providing bi-directional data flow for invoices, payments, cost of goods, and general-ledger postings. E-commerce integrations with Shopify and WooCommerce sync orders, inventory, and fulfilment status. Shipping is handled via ShipStation, UPS, FedEx, and USPS." },
  { question: "Can Tracker connect to my Shopify or WooCommerce store?", answer: "Yes. Tracker's e-commerce integrations provide two-way sync with Shopify (including Shopify Plus) and WooCommerce stores. Orders placed on your webstore flow into Tracker's production pipeline automatically — including decoration specifications like logo selection, placement, thread colours, and garment sizes if you use a product configurator. Inventory levels sync across channels to prevent overselling. When orders are fulfilled, Tracker pushes tracking numbers and shipping status back to the store so customers receive automated fulfilment notifications. Product data (descriptions, images, pricing) can also be synchronised from Tracker to the storefront for consistent catalogue management. The integration handles multi-location inventory, variant-level stock tracking, and partial-fulfilment scenarios." },
  { question: "How much is Tracker?", answer: "Tracker offers three pricing tiers — Starter, Professional, and Enterprise — based on the modules you need, user count, and decoration volume. All plans include cloud hosting, customer support, software updates, and data backups. The Starter plan suits small shops with core needs (order management, logo storage, basic scheduling). Professional adds advanced features like barcode-to-machine integration, distributor feeds, and digital proof approvals. Enterprise includes multi-location support, custom integrations, dedicated account management, and SLA guarantees. Pricing is subscription-based with no per-transaction fees. Contact our sales team for a custom quote tailored to your specific configuration — we'll scope your requirements during a 30-minute discovery call." },
  { question: "Are there hidden costs once I have Tracker?", answer: "No. All costs are documented in your project scope and licensing agreement before implementation begins. Your subscription includes cloud hosting, support, software updates, and security patches. If you need additional modules, integrations, or user seats in the future, these are discussed, scoped, and agreed upon before any work begins — with clear pricing. There are no per-transaction fees, no storage overage charges, and no surprise maintenance costs. Implementation services (data migration, integration configuration, training) are quoted separately at the start of the project so you know the total investment before signing. Ongoing support is included in your subscription." },
  { question: "How long does it take to implement Tracker?", answer: "Implementation timelines depend on your business complexity, data migration requirements, and number of integrations. A small embroidery shop with basic order management and logo storage can go live in as few as 6 weeks. Mid-size operations with distributor integrations (SanMar, alphabroder), machine connections (Barudan, Tajima), and e-commerce sync (Shopify) typically take 3–4 months. Large multi-location enterprises with ERP connectors (SAP, NetSuite), custom workflows, and data migration from legacy systems may require 6–12 months. Every implementation includes a dedicated project manager, data migration support, integration configuration, user training (online or on-site), and a parallel-run period to validate accuracy before full go-live." },
  { question: "Is Tracker available globally?", answer: "Yes. Tracker is a cloud-based SaaS platform accessible from any internet connection worldwide. We have active customers in the United Kingdom, across Europe, and throughout the United States. The platform infrastructure is hosted on enterprise-grade cloud servers with data centres in multiple regions for low-latency access. The interface is currently available in English, with multi-language support on the roadmap. Currency handling supports GBP, EUR, USD, and other currencies for international operations. Support is provided during UK and US business hours with emergency coverage available for Enterprise customers." },
  { question: "Do I need technical knowledge to use Tracker?", answer: "No. Tracker is designed for garment decoration professionals — production managers, sales coordinators, shop-floor operators, and business owners — not IT specialists. Day-to-day operations like entering orders, managing logos, sending proofs, and scanning barcodes are intuitive and require minimal training. We provide comprehensive onboarding including role-based training sessions (online or on-site), detailed documentation with step-by-step guides, video walkthroughs for every major workflow, and ongoing support via phone, email, and live chat. Most operators are proficient within 1–2 weeks. Administrative functions like integration configuration and report customisation are handled during implementation by our team." },
  { question: "Can I have a demo to see Tracker in action?", answer: "Absolutely. We provide personalised demos tailored to your specific business needs, decoration methods, and operational challenges. During a typical 45-minute demo, we walk through the modules most relevant to you — whether that's cloud logo management with EMB/DST file handling, digital proof approvals with customer commenting, production scheduling with thread-colour optimisation and barcode-to-machine integration, or distributor feeds from SanMar and alphabroder. We can also demonstrate e-commerce integration with Shopify, ERP connectivity, and shipping automation. Demos are conducted live by a product specialist who understands garment decoration workflows. Contact our sales team to schedule a session at a time that works for your team." }
]);

// === HowTo Schema for Get Started ===
export const getStartedHowToSchema = generateHowToSchema({
  name: "How to Get Started with Tracker Garment Decoration Software",
  description: "Step-by-step guide to onboarding with Tracker and setting up your garment decoration workflows.",
  totalTime: "PT30M",
  steps: [
    { name: "Request a Demo", text: "Contact our sales team to schedule a personalized demo of Tracker tailored to your garment decoration business needs." },
    { name: "Configure Your Workflows", text: "Work with our onboarding team to set up your embroidery, DTG, DTF, screen printing, or heat seal production workflows." },
    { name: "Import Your Data", text: "Import your existing customer records, logo files, product catalogs, and order history into Tracker." },
    { name: "Connect Integrations", text: "Connect Tracker to your existing tools: e-commerce platforms, ERP systems, embroidery machines, and shipping providers." },
    { name: "Train Your Team", text: "Complete training sessions (online or in-person) to ensure your team is proficient with the platform." },
    { name: "Go Live", text: "Launch Tracker for your production environment and start managing orders, logos, and production scheduling." }
  ]
});

// === Dataset Schemas for benchmark assets ===
export const benchmarkDatasetSchema = generateDatasetSchema({
  name: "Tracker Garment Decoration Industry Benchmarks",
  description: "Industry benchmark data for garment decoration businesses including production efficiency metrics, order processing times, and inventory accuracy rates.",
  url: `${getCurrentOrigin()}/case-studies`,
  keywords: ["garment decoration benchmarks", "embroidery production metrics", "DTG efficiency data", "screen printing performance"]
});

// === Video Schemas ===
export const videoGuidesSchema = [
  generateVideoSchema({ name: "Creating a New Customer Record in Tracker", description: "Learn how to create and manage customer records in Tracker's garment decoration software.", thumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/787d441efae24527b4f3727d96dc1161-full.jpg", uploadDate: "2025-01-15", duration: "PT3M", embedUrl: "https://www.loom.com/embed/787d441efae24527b4f3727d96dc1161" }),
  generateVideoSchema({ name: "Keying a Sales Order in Tracker", description: "Step-by-step walkthrough of entering a sales order in Tracker for garment decoration production.", thumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/d2a5af2615e6447e944f285f6c3ff623-full.jpg", uploadDate: "2025-01-15", duration: "PT6M", embedUrl: "https://www.loom.com/embed/d2a5af2615e6447e944f285f6c3ff623" }),
  generateVideoSchema({ name: "Printing, Starting and Finishing a Production Pick", description: "How to manage production picks from start to finish in Tracker's production management system.", thumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/2cfc27bacef24dcb9ec97dc12d68186e-full.jpg", uploadDate: "2025-01-15", duration: "PT5M", embedUrl: "https://www.loom.com/embed/2cfc27bacef24dcb9ec97dc12d68186e" })
];

// === Module JSON-LD Schemas ===
export const moduleSchemas: Record<string, object> = {
  'sales-orders': generateModuleSchema({ name: "Sales & Order Management", description: "Manage garment decoration sales orders from quote to delivery with automated workflows, digital proofs, and customer approvals.", url: `${getCurrentOrigin()}/modules/sales-orders`, features: ["Quote generation", "Order entry", "Digital proof approvals", "Order tracking", "Invoice management"] }),
  'warehouse': generateModuleSchema({ name: "Warehouse Management", description: "Track inventory movement, manage stock locations, and streamline receiving and shipping for garment decoration operations.", url: `${getCurrentOrigin()}/modules/warehouse`, features: ["Stock location tracking", "Receiving management", "Shipping integration", "Barcode scanning", "Pick & pack workflows"] }),
  'customer-database': generateModuleSchema({ name: "Customer Database", description: "Centralized customer management with order history, logo preferences, pricing tiers, and communication tracking.", url: `${getCurrentOrigin()}/modules/customer-database`, features: ["Customer profiles", "Order history", "Pricing tiers", "Communication log", "Logo preferences"] }),
  'logos': generateModuleSchema({ name: "Logo Management", description: "Cloud-based logo management for embroidery files (EMB, DST), print separations, and digital artwork with version control.", url: `${getCurrentOrigin()}/modules/logos`, features: ["Logo file storage", "Version control", "Embroidery file management", "Print separation files", "Digital proof creation"] }),
  'product-designer': generateModuleSchema({ name: "Product Designer", description: "Design and configure decorated garment products with logo placement, thread colors, and decoration specifications.", url: `${getCurrentOrigin()}/modules/product-designer`, features: ["Logo placement", "Thread color selection", "Decoration specs", "Product configuration", "Mockup generation"] }),
  'inventory': generateModuleSchema({ name: "Inventory Management", description: "Real-time inventory tracking for blank garments, decorated products, and supplies across all warehouse locations.", url: `${getCurrentOrigin()}/modules/inventory`, features: ["Real-time stock levels", "Reorder alerts", "Multi-location tracking", "Batch tracking", "Stock valuation"] }),
  'production': generateModuleSchema({ name: "Production Management", description: "Schedule and track garment decoration production across embroidery, DTG, DTF, screen printing, and heat seal operations.", url: `${getCurrentOrigin()}/modules/production`, features: ["Production scheduling", "Machine integration", "Job tracking", "Quality control", "Capacity planning"] }),
  'suppliers': generateModuleSchema({ name: "Supplier Management", description: "Manage blank garment suppliers, decoration supplies vendors, and track pricing, lead times, and purchase history.", url: `${getCurrentOrigin()}/modules/suppliers`, features: ["Supplier profiles", "Price lists", "Lead time tracking", "Purchase history", "Vendor evaluation"] }),
  'purchase-orders': generateModuleSchema({ name: "Purchase Orders", description: "Create and manage purchase orders for blank garments, supplies, and materials with automated reordering and receiving.", url: `${getCurrentOrigin()}/modules/purchase-orders`, features: ["PO creation", "Auto-reorder", "Receiving workflow", "Cost tracking", "Supplier integration"] }),
  'artworkers': generateModuleSchema({ name: "Artworkers", description: "Manage artwork and digitizing workflows for embroidery, screen printing, and digital printing with task assignment and approvals.", url: `${getCurrentOrigin()}/modules/artworkers`, features: ["Task assignment", "Artwork queue", "Digitizing workflow", "Approval process", "File management"] }),
  'customer-portal': generateModuleSchema({ name: "Customer Portal", description: "Self-service portal for customers to place orders, approve proofs, track shipments, and manage their garment decoration accounts.", url: `${getCurrentOrigin()}/modules/customer-portal`, features: ["Online ordering", "Proof approvals", "Order tracking", "Account management", "Reorder functionality"] }),
  'base-garments': generateModuleSchema({ name: "Base Garments", description: "Catalog and manage blank garment products from distributors like SanMar and alphabroder with real-time pricing and availability.", url: `${getCurrentOrigin()}/modules/base-garments`, features: ["Product catalog", "Distributor integration", "Real-time pricing", "Size/color matrix", "Availability checking"] }),
};

// Industry-specific SEO data
export const industryPagesSEO = {
  'apparel-manufacturing': {
    title: "Apparel Manufacturing Software - Garment Decoration & Production Management",
    description: "Streamline apparel manufacturing with Tracker. Manage embroidery, DTG, DTF, screen printing & heat seal production with PLM integrations and supply chain tools.",
    keywords: GARMENT_KEYWORDS + ", apparel manufacturing software, clothing production management, textile production software",
    canonical: `${getCurrentOrigin()}/industries/apparel-manufacturing`
  },
  'embroidery': {
    title: "Embroidery Business Software - Logo Management & Machine Integration",
    description: "Manage your embroidery business with Tracker. Cloud logo management, thread color optimization, production scheduling, and barcode integrations to Barudan & Tajima machines.",
    keywords: GARMENT_KEYWORDS + ", embroidery business software, embroidery shop management, digitizing business software, Barudan, Tajima",
    canonical: `${getCurrentOrigin()}/industries/embroidery`
  },
  'screen-printing': {
    title: "Screen Printing Software - Workflow Management & Production Scheduling",
    description: "Optimize screen printing operations with Tracker. Manage print separation files, screen burning workflows, production scheduling, ink inventory & order tracking.",
    keywords: GARMENT_KEYWORDS + ", screen printing software, screen print shop management, print separation files",
    canonical: `${getCurrentOrigin()}/industries/screen-printing`
  }
};

// Module-specific SEO data templates
export const generateModuleSEO = (moduleName: string, description: string, keywords: string): SEOData => ({
  title: `${moduleName} - Garment Decoration Software Module`,
  description: `${description} Part of Tracker's cloud-based garment decoration platform for embroidery, DTG, DTF, screen printing & team gear businesses.`,
  keywords: `${keywords}, ${GARMENT_KEYWORDS}`,
  canonical: `${getCurrentOrigin()}/modules/${moduleName.toLowerCase().replace(/\s+/g, '-')}`
});

// Breadcrumb schemas
export const homeBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` }
]);

export const pricingBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Pricing", url: `${getCurrentOrigin()}/pricing` }
]);

export const aboutBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "About", url: `${getCurrentOrigin()}/about` }
]);

export const contactBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Contact", url: `${getCurrentOrigin()}/contact` }
]);

export const blogBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Blog", url: `${getCurrentOrigin()}/blog` }
]);

export const docsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Documentation", url: `${getCurrentOrigin()}/documentation` }
]);

export const supportBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Support", url: `${getCurrentOrigin()}/support` }
]);

export const industriesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Industries", url: `${getCurrentOrigin()}/industries` }
]);

export const modulesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Modules", url: `${getCurrentOrigin()}/modules` }
]);

export const caseStudiesBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Case Studies", url: `${getCurrentOrigin()}/case-studies` }
]);

export const faqBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "FAQ", url: `${getCurrentOrigin()}/faq` }
]);

export const getStartedBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Get Started", url: `${getCurrentOrigin()}/get-started` }
]);

export const termsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Terms of Service", url: `${getCurrentOrigin()}/terms` }
]);

export const privacyBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Privacy Policy", url: `${getCurrentOrigin()}/privacy` }
]);

export const videosBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Video Guides", url: `${getCurrentOrigin()}/videos` }
]);

export const logoManagementBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Logo Management", url: `${getCurrentOrigin()}/logo-management` }
]);

export const productionSchedulingBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Production Scheduling", url: `${getCurrentOrigin()}/production-scheduling` }
]);

export const proofApprovalsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Proof Approvals", url: `${getCurrentOrigin()}/proof-approvals` }
]);

export const integrationsBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Integrations", url: `${getCurrentOrigin()}/integrations` }
]);

// Additional page SEO
export const caseStudiesSEO: SEOData = {
  title: "Case Studies - Real Results with Tracker Garment Decoration Software",
  description: "See how garment decorators transformed operations with Tracker. Results from embroidery, screen printing, DTG/DTF & licensed team gear businesses.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness case studies, production management results, embroidery software success",
  canonical: `${getCurrentOrigin()}/case-studies`
};

export const faqSEO: SEOData = {
  title: "FAQ - Garment Decoration Software Questions & Answers",
  description: "Find answers about Tracker's garment decoration software: embroidery logo management, DTG/DTF production, digital proofs, PLM integrations & pricing.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness faq, garment decoration software questions",
  canonical: `${getCurrentOrigin()}/faq`
};

export const getStartedSEO: SEOData = {
  title: "Get Started - Onboarding with Tracker Garment Decoration Software",
  description: "Start your Tracker onboarding. Configure embroidery, DTG, DTF, screen printing & heat seal workflows. Import logos, set up production scheduling & integrations.",
  keywords: GARMENT_KEYWORDS + ", trackmybusiness onboarding, get started, implementation",
  canonical: `${getCurrentOrigin()}/get-started`
};

export const videosSEO: SEOData = {
  title: "Video Guides - See Tracker Garment Decoration Software in Action",
  description: "Watch video demos of Tracker's garment decoration software. See how to manage customers, sales orders, logos, production, warehouse operations & more.",
  keywords: GARMENT_KEYWORDS + ", garment decoration software demo, Tracker video guides, embroidery software walkthrough",
  canonical: `${getCurrentOrigin()}/videos`
};

export const termsSEO: SEOData = {
  title: "Terms of Service - Tracker Legal Terms",
  description: "Read the legal terms governing the use of Tracker garment decoration software and enterprise services.",
  keywords: "trackmybusiness terms of service, software terms, legal terms",
  canonical: `${getCurrentOrigin()}/terms`
};

export const privacySEO: SEOData = {
  title: "Privacy Policy - Tracker Data Protection",
  description: "Learn how Tracker collects, uses, and protects your business data in compliance with privacy regulations and enterprise security standards.",
  keywords: "trackmybusiness privacy policy, data protection, GDPR, enterprise security",
  canonical: `${getCurrentOrigin()}/privacy`
};

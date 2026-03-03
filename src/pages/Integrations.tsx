import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cpu, ShoppingCart, Truck, Package, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import { getCurrentOrigin } from "@/utils/domain";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Integrations", url: `${getCurrentOrigin()}/integrations` }
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tracker Integration Platform",
  description: "Connect Tracker with PLM systems, blank-garment distributors, embroidery/DTG machines, ERP platforms, shipping providers, and e-commerce stores.",
  url: `${getCurrentOrigin()}/integrations`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  featureList: [
    "PLM garment integrations",
    "SanMar & alphabroder distributor feeds",
    "Barudan bNET machine integration",
    "Tajima Pulse integration",
    "Shopify & WooCommerce sync",
    "ShipStation shipping automation",
    "ERP connectors (SAP, NetSuite, Sage)",
    "Accounting system integration"
  ]
};

const partnerIntegrations = [
  { id: "shopify", name: "Shopify", description: "Two-way sync of orders, inventory, and products. Decoration specs (logo placement, thread colours, garment sizes) flow into Tracker automatically. Fulfilment status and tracking numbers push back to the Shopify storefront.", image: "/lovable-uploads/shopify-logo.png", bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/30", category: "E-commerce" },
  { id: "woocommerce", name: "WooCommerce", description: "Connect WooCommerce stores for seamless order import with product-configurator support. Inventory sync across channels prevents overselling. Customers see real-time fulfilment updates.", image: "/lovable-uploads/woocommerce-logo.png", bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/30", category: "E-commerce" },
  { id: "shipstation", name: "ShipStation", description: "Automate shipping label creation, carrier rate comparison (UPS, FedEx, USPS, DHL), and tracking-number pushback to customers. Multi-package shipments and international customs documentation handled automatically.", image: "/lovable-uploads/shipstation-logo.png", bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30", category: "Shipping" },
  { id: "alphabroder", name: "Alphabroder", description: "Real-time blank-garment inventory, tiered pricing, and size/colour availability. Auto-create purchase orders when stock hits reorder points. Cost data flows into Tracker's quoting engine for accurate customer pricing.", image: "/lovable-uploads/alphabroder-logo.png", bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/30", category: "Distributors" },
  { id: "sanmar", name: "SanMar", description: "Live product catalogue with 50,000+ styles, size/colour matrix, volume-tier pricing, and real-time stock checks — directly inside Tracker. Purchase orders are generated and submitted electronically.", image: "/lovable-uploads/sanmar-logo.png", bgColor: "bg-gradient-to-br from-amber-500/20 to-amber-600/30", category: "Distributors" }
];

const integrationCategories = [
  {
    icon: <Cpu className="h-8 w-8 text-gold" />,
    title: "Machine & Equipment Integrations",
    desc: "Barcode-driven file delivery to production equipment for zero-touch logo loading. Tracker's machine integrations eliminate manual file transfers and ensure the correct design, thread chart, and run parameters reach the machine controller every time.",
    items: ["Barudan embroidery machines (bNET protocol)", "Tajima embroidery machines (Pulse/DG16)", "Brother DTG printers", "Epson DTG/DTF printers", "Kornit digital printing systems", "M&R and ROQ screen-printing presses", "Heat-seal and transfer presses", "Screen-burn / CTS exposure units"],
    example: "Example: An operator scans a barcode on a production ticket. Tracker identifies the order, retrieves the approved DST file from the cloud logo library, and pushes it to the Barudan bNET controller with pre-configured needle assignments and speed settings. The operator loads the garment and presses start — no USB drive, no file explorer, no version confusion."
  },
  {
    icon: <Package className="h-8 w-8 text-gold" />,
    title: "PLM & Distributor Integrations",
    desc: "Pull blank-garment catalogues, live pricing, and inventory directly into Tracker for accurate quoting and purchasing. Tracker's PLM integrations create a real-time supply-chain view so your sales team quotes with confidence and your purchasing team never over-orders.",
    items: ["SanMar product feed & inventory API", "Alphabroder catalogue & pricing API", "S&S Activewear integration", "Carolina Made / Boxercraft feeds", "Custom PLM system connectors", "EDI document exchange (850, 856, 810)", "Supplier cost-matrix imports", "Size/colour availability checks"],
    example: "Example: A sales rep creates a quote for 500 embroidered polos. Tracker pulls live SanMar pricing ($8.42/unit for Gildan 8800 in Navy, size M), checks stock availability across SanMar warehouses, and calculates landed cost including decoration and shipping. The quote is generated with accurate margins in under 60 seconds."
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-gold" />,
    title: "E-commerce & Storefront Integrations",
    desc: "Sync orders from online stores into Tracker's production pipeline. Push fulfilment status and tracking numbers back to the store. Tracker supports product-configurator integrations so customers can select logos, thread colours, and placement during checkout.",
    items: ["Shopify & Shopify Plus", "WooCommerce / WordPress", "BigCommerce", "Magento / Adobe Commerce", "Custom webstore API connectors", "Product configurator support", "Inventory sync (multi-channel)", "Customer account linking"],
    example: "Example: A customer orders 24 embroidered hoodies from your Shopify store, selecting their logo and left-chest placement. The order flows into Tracker with decoration specs attached. Production scheduling slots the job based on thread palette. When shipped, the tracking number pushes back to Shopify and the customer receives an automated notification."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-gold" />,
    title: "ERP & Accounting Integrations",
    desc: "Bi-directional data flow between Tracker and your financial systems — invoices, payments, cost of goods, and general-ledger postings. Tracker prevents double-entry and ensures your books reflect real-time production and fulfilment data.",
    items: ["SAP Business One / S/4HANA", "Oracle NetSuite", "Sage 50 / Sage Intacct", "QuickBooks Online & Desktop", "Xero accounting", "Microsoft Dynamics 365", "Custom ERP API connectors", "General-ledger journal exports"],
    example: "Example: When a sales order is invoiced in Tracker, the invoice data (line items, quantities, decoration costs, blank-garment costs) is posted to QuickBooks Online as a journal entry. Payments received in QuickBooks update the order status in Tracker. Month-end reconciliation is automatic."
  },
  {
    icon: <Truck className="h-8 w-8 text-gold" />,
    title: "Shipping & Logistics Integrations",
    desc: "Rate-shop, print labels, and push tracking numbers — all from within Tracker. Multi-carrier support lets you choose the fastest or cheapest option per shipment. International orders include customs documentation and duty estimates.",
    items: ["ShipStation", "UPS / FedEx / USPS direct", "DHL / DPD / Royal Mail", "Freight carrier APIs", "Multi-package shipments", "International customs documentation", "Automated packing-slip generation", "Carrier rate comparison"],
    example: "Example: An order with 3 boxes ships to a corporate client. Tracker rate-shops across UPS, FedEx, and USPS, selects the cheapest 2-day option, prints labels for all packages, generates a packing slip, and pushes tracking numbers to both the customer portal and the e-commerce store."
  },
  {
    icon: <Globe className="h-8 w-8 text-gold" />,
    title: "Open API & Webhooks",
    desc: "Build custom integrations with Tracker's RESTful API and real-time webhook event system. Trigger workflows in external tools when orders are placed, proofs are approved, jobs are completed, or shipments are dispatched.",
    items: ["RESTful JSON API", "Webhook event subscriptions", "OAuth 2.0 authentication", "Rate-limited & documented endpoints", "Sandbox testing environment", "Custom field mapping", "Bulk import/export endpoints", "Event-driven automation"],
    example: "Example: When a proof is approved in Tracker, a webhook fires to your internal Slack channel, notifying the production manager. Simultaneously, a second webhook updates your custom dashboard with the job's estimated completion time."
  }
];

const Integrations = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "Integrations | PLM, Machine, ERP & E-commerce Connections for Garment Decoration",
          description: "Connect Tracker with Barudan, Tajima, SanMar, alphabroder, Shopify, ShipStation, SAP, QuickBooks & more. Full integration ecosystem for garment decorators.",
          keywords: "PLM garment integrations, embroidery machine integration, Barudan bNET, Tajima Pulse, SanMar API, alphabroder integration, Shopify garment decoration, ERP integration, ShipStation, garment decoration software integrations",
          canonical: `${getCurrentOrigin()}/integrations`
        }}
        breadcrumbs={breadcrumb}
        extraSchema={schema}
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-36 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-6">
                <span className="text-sm text-gold uppercase font-medium tracking-wider">Integration Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Connect Tracker to <span className="text-gold-gradient">Every System You Use</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From embroidery machines and blank-garment distributors to e-commerce stores, ERP platforms, and shipping carriers — Tracker integrates with the tools garment decorators depend on every day. Eliminate double-entry, synchronise data in real time, and run your entire operation from one platform. Our integration ecosystem handles the full supply chain: sourcing blank garments from <Link to="/integrations/sanmar" className="text-gold hover:underline">SanMar</Link> and <Link to="/integrations/alphabroder" className="text-gold hover:underline">alphabroder</Link>, pulling orders from <Link to="/integrations/shopify" className="text-gold hover:underline">Shopify</Link>, pushing files to machines, and shipping via <Link to="/integrations/shipstation" className="text-gold hover:underline">ShipStation</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8 px-4 border-y border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Real-time data sync", "Bi-directional flow", "Zero double-entry", "Secure API connections"].map((b, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Integrations Grid */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerIntegrations.map((integration) => (
                  <Link key={integration.id} to={`/integrations/${integration.id}`} onClick={scrollToTop} className="group">
                    <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:-translate-y-1">
                      <div className={`${integration.bgColor} rounded-lg h-24 flex items-center justify-center mb-6`}>
                        <img src={integration.image} alt={`${integration.name} integration with Tracker garment decoration software`} className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{integration.name}</h3>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{integration.category}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{integration.description}</p>
                      <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4 ml-1" /></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Full Integration Categories with Examples */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Complete Integration Ecosystem</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Tracker connects to every layer of your garment decoration operation — from the machines on your production floor to the accounting software in your back office. Each integration category includes real-world workflow examples.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {integrationCategories.map((cat, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      {cat.icon}
                      <h3 className="text-xl font-semibold text-foreground">{cat.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{cat.desc}</p>
                    <ul className="grid grid-cols-1 gap-2 mb-4">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                      <p className="text-xs text-muted-foreground italic">{cat.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Pages */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { to: "/logo-management", title: "Cloud Logo Management", desc: "Machine-ready logo delivery powered by barcode-triggered integrations." },
                  { to: "/production-scheduling", title: "Production Scheduling", desc: "Barcode-to-machine pushes via integrated equipment for all decoration methods." },
                  { to: "/proof-approvals", title: "Digital Proof Approvals", desc: "Customer-facing proofs linked to e-commerce orders and production queues." }
                ].map((link, i) => (
                  <Link key={i} to={link.to} onClick={scrollToTop} className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all h-full">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">{link.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{link.desc}</p>
                      <span className="text-gold text-sm mt-3 inline-flex items-center">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Don't See Your Integration?</h2>
            <p className="text-muted-foreground mb-8">We're constantly adding new connections. Tell us what you need and our team will assess feasibility — often within 48 hours. Our open API and webhook system lets you build custom integrations for any workflow.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" onClick={scrollToTop}><Button variant="gold" size="lg">Get Started</Button></Link>
              <Link to="/contact" onClick={scrollToTop}><Button variant="outline" size="lg">Request an Integration</Button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Integrations;

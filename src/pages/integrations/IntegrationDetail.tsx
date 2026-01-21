import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, RefreshCw, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import NotFound from "@/pages/NotFound";

const integrationData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  image: string;
  bgColor: string;
  category: string;
  features: string[];
  benefits: { icon: React.ElementType; title: string; description: string }[];
}> = {
  shopify: {
    name: "Shopify",
    tagline: "Sync your Shopify store with Tracker",
    description: "Connect your Shopify store to automatically sync orders, inventory, and customer data. Streamline your workflow and eliminate manual data entry.",
    image: "/lovable-uploads/a061c746-21cc-421c-8f26-239f553bcf06.png",
    bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/30",
    category: "E-commerce",
    features: [
      "Automatic order import from Shopify",
      "Real-time inventory sync",
      "Customer data synchronization",
      "Product catalog integration",
      "Shipping status updates",
      "Multi-location support"
    ],
    benefits: [
      { icon: Zap, title: "Instant Sync", description: "Orders appear in Tracker within seconds of being placed." },
      { icon: RefreshCw, title: "Two-Way Updates", description: "Changes in Tracker automatically reflect in Shopify." },
      { icon: Shield, title: "Secure Connection", description: "OAuth 2.0 authentication keeps your data safe." },
      { icon: Clock, title: "Save Time", description: "Eliminate manual order entry and reduce errors." }
    ]
  },
  woocommerce: {
    name: "WooCommerce",
    tagline: "Connect your WooCommerce store",
    description: "Integrate your WordPress WooCommerce store with Tracker for seamless order management and inventory synchronization.",
    image: "/lovable-uploads/c25b44a2-426c-4f30-9e20-b4cf6ae40e2e.png",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/30",
    category: "E-commerce",
    features: [
      "Automatic order synchronization",
      "Product and variant mapping",
      "Customer data import",
      "Inventory level updates",
      "Order status sync",
      "Webhook-based real-time updates"
    ],
    benefits: [
      { icon: Zap, title: "Quick Setup", description: "Connect your store in minutes with our guided setup." },
      { icon: RefreshCw, title: "Real-Time Sync", description: "Webhooks ensure instant order updates." },
      { icon: Shield, title: "Reliable", description: "Built on WooCommerce REST API for stability." },
      { icon: Clock, title: "Automated", description: "Set it and forget it - orders flow automatically." }
    ]
  },
  shipstation: {
    name: "ShipStation",
    tagline: "Automate your shipping workflow",
    description: "Connect ShipStation to streamline your shipping process. Import orders, print labels, and track shipments all from one place.",
    image: "/lovable-uploads/70e89c9a-2a2a-47bf-84af-d0d6cecca1e3.png",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
    category: "Shipping",
    features: [
      "Automatic order export to ShipStation",
      "Shipping label generation",
      "Tracking number import",
      "Carrier rate shopping",
      "Batch shipping support",
      "Return label creation"
    ],
    benefits: [
      { icon: Zap, title: "Faster Shipping", description: "Get orders out the door quickly with batch processing." },
      { icon: RefreshCw, title: "Auto-Updates", description: "Tracking numbers sync back to orders automatically." },
      { icon: Shield, title: "Best Rates", description: "Compare carrier rates to find the best price." },
      { icon: Clock, title: "Time Savings", description: "Reduce shipping time by up to 75%." }
    ]
  },
  alphabroder: {
    name: "Alphabroder",
    tagline: "Access real-time supplier data",
    description: "Connect with Alphabroder for live inventory checks, pricing, and seamless purchase order creation.",
    image: "/lovable-uploads/43dfb005-d4c4-43ef-846a-545265bad44a.png",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    category: "Suppliers",
    features: [
      "Real-time inventory availability",
      "Live pricing updates",
      "Purchase order automation",
      "Product catalog sync",
      "Order tracking",
      "Drop-ship support"
    ],
    benefits: [
      { icon: Zap, title: "Live Inventory", description: "Check stock levels before promising to customers." },
      { icon: RefreshCw, title: "Price Updates", description: "Always have current pricing at your fingertips." },
      { icon: Shield, title: "Accurate Data", description: "Direct API connection ensures data accuracy." },
      { icon: Clock, title: "Faster Orders", description: "Create POs directly from sales orders." }
    ]
  },
  sanmar: {
    name: "SanMar",
    tagline: "Connect with SanMar supplier network",
    description: "Integrate with SanMar for inventory availability, product data, and streamlined ordering.",
    image: "/lovable-uploads/e4f4a469-9951-418c-b168-1634003acc41.png",
    bgColor: "bg-gradient-to-br from-amber-500/20 to-amber-600/30",
    category: "Suppliers",
    features: [
      "Inventory availability checks",
      "Product catalog integration",
      "Automated purchase orders",
      "Pricing synchronization",
      "Order status tracking",
      "Multiple warehouse support"
    ],
    benefits: [
      { icon: Zap, title: "Instant Checks", description: "Check inventory across all SanMar warehouses." },
      { icon: RefreshCw, title: "Catalog Sync", description: "Keep product data up-to-date automatically." },
      { icon: Shield, title: "Reliable Orders", description: "Direct integration reduces order errors." },
      { icon: Clock, title: "Efficiency", description: "Streamline your procurement process." }
    ]
  }
};

const IntegrationDetail = () => {
  const { integrationId } = useParams<{ integrationId: string }>();
  
  const integration = integrationId ? integrationData[integrationId] : null;
  
  if (!integration) {
    return <NotFound />;
  }

  return (
    <>
      <PageSEO 
        seo={{
          title: `${integration.name} Integration | Tracker`,
          description: integration.description,
          keywords: `${integration.name.toLowerCase()}, integration, tracker, ${integration.category.toLowerCase()}`
        }}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link 
              to="/integrations" 
              onClick={scrollToTop}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Integrations
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className={`${integration.bgColor} rounded-xl p-8 flex items-center justify-center flex-shrink-0`}>
                <img 
                  src={integration.image} 
                  alt={integration.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground mb-4 inline-block">
                  {integration.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  {integration.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {integration.tagline}
                </p>
                <Link to="/get-started" onClick={scrollToTop}>
                  <Button variant="gold" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 px-4 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <p className="text-lg text-foreground leading-relaxed">
              {integration.description}
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-foreground">
              Why integrate with {integration.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integration.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-gold/50"
                >
                  <benefit.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-foreground">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integration.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background border border-border rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to connect {integration.name}?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your free trial and connect your {integration.name} account in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" onClick={scrollToTop}>
                <Button variant="gold" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact" onClick={scrollToTop}>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IntegrationDetail;

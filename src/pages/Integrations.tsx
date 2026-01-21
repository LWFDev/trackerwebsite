import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";

const integrations = [
  {
    id: "shopify",
    name: "Shopify",
    description: "Sync orders, inventory, and products with your Shopify store in real-time.",
    image: "/lovable-uploads/a061c746-21cc-421c-8f26-239f553bcf06.png",
    bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/30",
    category: "E-commerce"
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description: "Connect your WooCommerce store for seamless order management.",
    image: "/lovable-uploads/c25b44a2-426c-4f30-9e20-b4cf6ae40e2e.png",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/30",
    category: "E-commerce"
  },
  {
    id: "shipstation",
    name: "ShipStation",
    description: "Automate your shipping workflow with ShipStation integration.",
    image: "/lovable-uploads/70e89c9a-2a2a-47bf-84af-d0d6cecca1e3.png",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
    category: "Shipping"
  },
  {
    id: "alphabroder",
    name: "Alphabroder",
    description: "Access real-time inventory and pricing from Alphabroder.",
    image: "/lovable-uploads/43dfb005-d4c4-43ef-846a-545265bad44a.png",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    category: "Suppliers"
  },
  {
    id: "sanmar",
    name: "SanMar",
    description: "Sync inventory, pricing, and product data with SanMar.",
    image: "/lovable-uploads/e4f4a469-9951-418c-b168-1634003acc41.png",
    bgColor: "bg-gradient-to-br from-amber-500/20 to-amber-600/30",
    category: "Suppliers"
  }
];

const categories = ["All", "E-commerce", "Shipping", "Suppliers"];

const Integrations = () => {
  return (
    <>
      <PageSEO 
        seo={{
          title: "Integrations | Tracker",
          description: "Connect Tracker with your favorite tools. Seamlessly integrate with e-commerce platforms, shipping providers, and suppliers.",
          keywords: "integrations, shopify, woocommerce, shipstation, alphabroder, sanmar"
        }}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-6">
                <span className="text-sm text-gold uppercase font-medium tracking-wider">Integrations</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Connect with your <span className="text-gold-gradient">favorite tools</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Tracker integrates seamlessly with the platforms you already use, creating a unified workflow that increases efficiency and reduces errors.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4 border-y border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                "Real-time data sync",
                "Two-way communication",
                "Automatic updates",
                "Easy setup"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <Link 
                  key={integration.id}
                  to={`/integrations/${integration.id}`}
                  onClick={scrollToTop}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:-translate-y-1">
                    <div className={`${integration.bgColor} rounded-lg h-24 flex items-center justify-center mb-6`}>
                      <img 
                        src={integration.image} 
                        alt={integration.name}
                        className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{integration.name}</h3>
                      <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {integration.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{integration.description}</p>
                    <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Don't see your integration?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're constantly adding new integrations. Let us know what you need and we'll work on making it happen.
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="gold" size="lg">
                Request an Integration
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Integrations;

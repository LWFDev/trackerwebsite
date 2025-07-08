
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Building, FileText, Globe, CheckCircle, BarChart2, Truck, ShoppingCart, Calendar, Bell, FileSpreadsheet, Clock, Percent, Users, Map, Package, Zap } from "lucide-react";

const Suppliers = () => {
  return (
    <ModuleLayout
      title="Suppliers"
      description="Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions."
      color="amber"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      stats={[
        {
          value: "35%",
          label: "Faster supplier onboarding",
          icon: <Clock className="h-8 w-8 text-amber-500" />
        },
        {
          value: "25%",
          label: "Reduction in procurement costs",
          icon: <Percent className="h-8 w-8 text-amber-500" />
        },
        {
          value: "42%",
          label: "Improvement in supplier performance",
          icon: <BarChart2 className="h-8 w-8 text-amber-500" />
        },
        {
          value: "1,000+",
          label: "Integrated supplier catalogs",
          icon: <Package className="h-8 w-8 text-amber-500" />
        }
      ]}
      mainSection={{
        title: "Transform Your Supplier Management",
        description: "Our Suppliers module gives you the tools to build stronger supplier relationships, make smarter purchasing decisions, and ensure consistent product availability."
      }}
      keyFeatures={{
        title: "Comprehensive Supplier Management",
        description: "Everything you need to optimize your supplier relationships",
        features: [
          {
            title: "Centralized Supplier Profiles",
            description: "Create detailed supplier records with contact information, payment terms, delivery options, and performance metrics.",
            icon: <Building className="h-6 w-6" />
          },
          {
            title: "Integrated Catalogs & Price Lists",
            description: "Maintain up-to-date supplier catalogs with pricing, availability, and lead times for easy comparison and selection.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Supplier Performance Tracking",
            description: "Monitor key metrics like on-time delivery, quality compliance, and response times to identify top performers.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Automated Availability Checks",
            description: "Verify product availability across multiple suppliers in real-time before creating purchase orders.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Multi-location Supplier Management",
            description: "Manage supplier relationships across different regions with location-specific pricing and delivery options.",
            icon: <Globe className="h-6 w-6" />
          },
          {
            title: "Delivery Schedule Management",
            description: "Track supplier delivery schedules, lead times, and shipping methods to optimize your supply chain.",
            icon: <Truck className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Strategic Supplier Relationships",
        subtitle: "Beyond Transactions",
        description: "Our platform helps you build stronger supplier partnerships that go beyond simple transactions.",
        items: [
          { text: "Supplier collaboration tools with shared documents and communications", icon: <Users className="h-5 w-5" /> },
          { text: "Contract management with renewal alerts and compliance tracking", icon: <Bell className="h-5 w-5" /> },
          { text: "Supplier diversity tracking and reporting capabilities", icon: <Map className="h-5 w-5" /> },
          { text: "Sustainability and compliance documentation management", icon: <FileText className="h-5 w-5" /> },
          { text: "Preferred supplier designation with tiered pricing structures", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Quick supplier substitution capabilities for supply chain resilience", icon: <Zap className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Optimize Your Supplier Management?",
        description: "Join thousands of businesses that have transformed their supplier relationships with our comprehensive solution.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request a Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Purchase Orders",
          icon: <FileSpreadsheet className="h-8 w-8" />,
          description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment.",
          link: "/modules/purchase-orders"
        },
        {
          title: "Base Garments",
          icon: <ShoppingCart className="h-8 w-8" />,
          description: "Set up your core product catalog, including styles, sizes, colors, and default pricing.",
          link: "/modules/base-garments"
        },
        {
          title: "Inventory",
          icon: <Calendar className="h-8 w-8" />,
          description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
          link: "/modules/inventory"
        }
      ]}
    />
  );
};

export default Suppliers;


import ModuleLayout from "@/components/modules/ModuleLayout";
import { Shirt, Tag, PlusCircle, Search, ShieldCheck, Palette, Zap, Layers, Settings, CheckCircle, ShoppingCart, Paintbrush, Package } from "lucide-react";

const BaseGarments = () => {
  return (
    <ModuleLayout
      title="Base Garments"
      description="Set up your core product catalog, including styles, sizes, colors, and default pricing."
      color="amber"
      stats={[
        {
          value: "30,000+",
          label: "Pre-configured garment styles",
          icon: <Shirt className="h-8 w-8 text-amber-500" />
        },
        {
          value: "15 min",
          label: "Average setup time for new items",
          icon: <Zap className="h-8 w-8 text-amber-500" />
        },
        {
          value: "99.8%",
          label: "Pricing accuracy across the platform",
          icon: <Tag className="h-8 w-8 text-amber-500" />
        },
        {
          value: "45%",
          label: "Faster order creation with templates",
          icon: <CheckCircle className="h-8 w-8 text-amber-500" />
        }
      ]}
      mainSection={{
        title: "Build Your Core Product Catalog",
        description: "Our Base Garments module lets you create a comprehensive product library that serves as the foundation for your entire decoration business."
      }}
      keyFeatures={{
        title: "Complete Product Management",
        description: "Everything you need to build and maintain your product catalog",
        features: [
          {
            title: "Comprehensive Style Library",
            description: "Create detailed product templates with comprehensive attributes for styles, sizes, colors, and materials.",
            icon: <Shirt className="h-6 w-6" />
          },
          {
            title: "Flexible Pricing Structure",
            description: "Configure multiple pricing levels with volume discounts, customer-specific pricing, and margin calculations.",
            icon: <Tag className="h-6 w-6" />
          },
          {
            title: "Product Customization",
            description: "Define decoration areas, maximum imprint sizes, and compatible decoration methods for each garment style.",
            icon: <Settings className="h-6 w-6" />
          },
          {
            title: "Product Variants",
            description: "Manage size and color variants with specific inventory levels, pricing, and availability tracking.",
            icon: <Layers className="h-6 w-6" />
          },
          {
            title: "Advanced Search & Filtering",
            description: "Quickly find products with powerful search and filtering by category, brand, price range, and attributes.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Product Import & Sync",
            description: "Easily import product data from suppliers and keep your catalog updated with the latest offerings.",
            icon: <PlusCircle className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Supplier Integration",
        subtitle: "Connected Catalog",
        description: "Maintain an up-to-date product catalog with direct connections to your key suppliers.",
        items: [
          { text: "Direct import of new styles from major industry suppliers", icon: <PlusCircle className="h-5 w-5" /> },
          { text: "Automatic price updates from connected suppliers", icon: <Tag className="h-5 w-5" /> },
          { text: "Real-time inventory availability checking", icon: <Package className="h-5 w-5" /> },
          { text: "Full color and size matrices for complete product lines", icon: <Palette className="h-5 w-5" /> },
          { text: "High-quality product images and detailed specifications", icon: <ShieldCheck className="h-5 w-5" /> },
          { text: "Decoration guidelines and quality specifications", icon: <CheckCircle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Build Your Product Catalog?",
        description: "Join thousands of businesses that have streamlined their product management with our Base Garments module.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Product Designer",
          icon: <Paintbrush className="h-8 w-8" />,
          description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements.",
          link: "/modules/product-designer"
        },
        {
          title: "Inventory",
          icon: <Package className="h-8 w-8" />,
          description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
          link: "/modules/inventory"
        },
        {
          title: "Sales & Orders",
          icon: <ShoppingCart className="h-8 w-8" />,
          description: "Manage incoming orders, quotes, and job details in one streamlined dashboard.",
          link: "/modules/sales-orders"
        }
      ]}
    />
  );
};

export default BaseGarments;

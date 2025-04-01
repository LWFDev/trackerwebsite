import ModuleLayout from "@/components/modules/ModuleLayout";
import { Package, TruckIcon, Percent, Clock, BarChart2, MapPin, Zap, QrCode, LineChart, RefreshCw, Search, Building } from "lucide-react";

const InventoryLogistics = () => {
  return (
    <ModuleLayout
      title="Inventory Management"
      description="Gain complete visibility and control over your inventory with real-time tracking, automated reordering, and powerful analytics."
      color="blue"
      stats={[
        {
          value: "35%",
          label: "Reduction in stockouts",
          icon: <Percent className="h-8 w-8 text-blue-500" />
        },
        {
          value: "28%",
          label: "Increase in inventory turnover",
          icon: <RefreshCw className="h-8 w-8 text-blue-500" />
        },
        {
          value: "42%",
          label: "Reduction in carrying costs",
          icon: <LineChart className="h-8 w-8 text-blue-500" />
        },
        {
          value: "99.8%",
          label: "Order fulfillment accuracy",
          icon: <Package className="h-8 w-8 text-blue-500" />
        }
      ]}
      mainSection={{
        title: "Complete Inventory Control at Your Fingertips",
        description: "Our Inventory Management module provides all the tools you need to optimize your inventory operations."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to optimize your inventory management",
        features: [
          {
            title: "Real-time Tracking",
            description: "Monitor inventory levels across multiple locations in real-time with automatic updates.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Barcode & RFID Integration",
            description: "Scan and track inventory with barcode and RFID technology for accurate stock management.",
            icon: <QrCode className="h-6 w-6" />
          },
          {
            title: "Automated Reordering",
            description: "Set reorder points and automatically generate purchase orders when stock levels are low.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "Batch & Lot Tracking",
            description: "Track batches and lots for complete traceability and quality control throughout the supply chain.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Inventory Forecasting",
            description: "Use historical data and AI algorithms to predict future inventory needs and optimize stock levels.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Multi-warehouse Management",
            description: "Manage inventory across multiple warehouses and locations with transfer tracking and optimization.",
            icon: <Building className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Connects With Your Entire Business",
        subtitle: "Seamless Integration",
        description: "Our Inventory Management module integrates with your existing systems to provide a complete view of your business operations.",
        items: [
          { text: "Integrates with e-commerce platforms", icon: <Package className="h-5 w-5" /> },
          { text: "Connects with accounting software", icon: <Package className="h-5 w-5" /> },
          { text: "Works with shipping and logistics providers", icon: <Package className="h-5 w-5" /> },
          { text: "Syncs with point-of-sale systems", icon: <Package className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Optimize Your Inventory?",
        description: "Join thousands of businesses that have transformed their inventory management with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Contact Sales"
      }}
      relatedModules={[
        {
          title: "Sales & Order Management",
          icon: <Package className="h-8 w-8" />,
          description: "Connect teams, close more deals, and simplify your sales process.",
          link: "/modules/sales-order-management"
        },
        {
          title: "Production & Manufacturing",
          icon: <Package className="h-8 w-8" />,
          description: "Oversee production processes, schedules, and resource allocation.",
          link: "/modules/production-manufacturing"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Get powerful insights from your data, anytime, anywhere.",
          link: "/modules/analytics-reporting"
        }
      ]}
    />
  );
};

export default InventoryLogistics;

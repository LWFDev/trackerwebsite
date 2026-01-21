import ModuleLayout from "@/components/modules/ModuleLayout";
import { Package, TruckIcon, Percent, Clock, BarChart2, MapPin, Zap, QrCode, LineChart, RefreshCw, Search, Building, Box, LayoutGrid, Smartphone, AlertTriangle, ShoppingCart, ShieldCheck } from "lucide-react";
import inventoryHero from "@/assets/modules/inventory-hero.jpg";
import inventoryMain from "@/assets/modules/inventory-main.jpg";

const Inventory = () => {
  return (
    <ModuleLayout
      title="Inventory"
      description="Monitor stock levels, track item movement, and get automatic low-stock alerts across locations."
      color="blue"
      heroImage={inventoryHero}
      heroImageCallouts={[
        {
          text: "Real-time Stock Monitoring",
          position: { top: "15%", left: "-20%" },
          icon: <BarChart2 className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Multi-location Tracking",
          position: { top: "35%", right: "-20%" },
          icon: <Building className="h-4 w-4" />,
          delay: "1s"
        },
        {
          text: "Automated Alerts & Reordering",
          position: { bottom: "20%", left: "-20%" },
          icon: <AlertTriangle className="h-4 w-4" />,
          delay: "1.5s"
        }
      ]}
      stats={[
        {
          value: "35%",
          label: "Reduction in stockouts and lost sales",
          icon: <Percent className="h-8 w-8 text-blue-500" />
        },
        {
          value: "28%",
          label: "Increase in inventory turnover ratio",
          icon: <RefreshCw className="h-8 w-8 text-blue-500" />
        },
        {
          value: "42%",
          label: "Reduction in inventory carrying costs",
          icon: <LineChart className="h-8 w-8 text-blue-500" />
        },
        {
          value: "99.8%",
          label: "Order fulfillment accuracy",
          icon: <Package className="h-8 w-8 text-blue-500" />
        }
      ]}
      mainSection={{
        title: "Transform Your Inventory Management",
        description: "Our comprehensive inventory solution provides real-time visibility, intelligent forecasting, and automated workflows to optimize your entire supply chain from warehouse to customer.",
        image: inventoryMain
      }}
      keyFeatures={{
        title: "Complete Inventory Control",
        description: "Everything you need to optimize inventory management across your business",
        features: [
          {
            title: "Real-time Inventory Tracking",
            description: "Monitor stock levels across multiple locations with automatic updates, movement tracking, and customizable alerts.",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Advanced Barcode & RFID",
            description: "Streamline receiving, picking, and shipping with integrated barcode and RFID scanning for accurate inventory tracking.",
            icon: <QrCode className="h-6 w-6" />
          },
          {
            title: "Intelligent Reordering",
            description: "Optimize stock levels with automated purchase orders based on sales velocity, lead times, and seasonal demand patterns.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "Comprehensive Lot Tracking",
            description: "Maintain complete traceability with lot, batch, serial number, and expiration date tracking throughout the supply chain.",
            icon: <Box className="h-6 w-6" />
          },
          {
            title: "Predictive Inventory Planning",
            description: "Forecast future inventory needs using AI-powered algorithms that analyze historical data, trends, and seasonality.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Multi-location Management",
            description: "Optimize inventory across warehouses, stores, and fulfillment centers with transfer management and location-specific rules.",
            icon: <Building className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "End-to-End Supply Chain Visibility",
        subtitle: "Connected Operations",
        description: "Our Inventory Management module integrates seamlessly with your entire business ecosystem for complete operational visibility.",
        items: [
          { text: "Real-time synchronization with e-commerce platforms and marketplaces", icon: <ShoppingCart className="h-5 w-5" /> },
          { text: "Automated connection with accounting for accurate financial reporting", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Integrated shipping and logistics provider management", icon: <TruckIcon className="h-5 w-5" /> },
          { text: "Mobile inventory management with our dedicated app", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Advanced warehouse management with bin and zone tracking", icon: <LayoutGrid className="h-5 w-5" /> },
          { text: "Proactive quality control and defect management", icon: <ShieldCheck className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Optimize Your Inventory Operations?",
        description: "Join thousands of businesses that have transformed their inventory management with our comprehensive solution.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request a Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Sales & Orders",
          icon: <ShoppingCart className="h-8 w-8" />,
          description: "Streamline your order processing with automated workflows and real-time inventory availability.",
          link: "/modules/sales-orders"
        },
        {
          title: "Production",
          icon: <Package className="h-8 w-8" />,
          description: "Integrate inventory with production scheduling, materials planning, and quality control.",
          link: "/modules/production"
        },
        {
          title: "Warehouse",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Track item locations, transfers, and storage with real-time warehouse visibility and control.",
          link: "/modules/warehouse"
        }
      ]}
    />
  );
};

export default Inventory;

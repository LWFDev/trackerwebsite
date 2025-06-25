
import ModuleLayout from "@/components/modules/ModuleLayout";
import { 
  Package, 
  TruckIcon, 
  BarChart2, 
  Layers, 
  CheckCircle, 
  Users, 
  Search, 
  Map, 
  Smartphone, 
  Zap, 
  LineChart,
  ShoppingCart,
  FileSpreadsheet
} from "lucide-react";

const Warehouse = () => {
  return (
    <ModuleLayout
      title="Warehouse"
      description="Track item locations, transfers, and storage with real-time warehouse visibility and control."
      color="indigo"
      heroImage="/lovable-uploads/b967fa34-27f3-4bde-8864-dd74e1e5fea9.png"
      stats={[
        {
          value: "40%",
          label: "Reduction in picking time",
          icon: <Clock className="h-8 w-8 text-indigo-500" />
        },
        {
          value: "99.9%",
          label: "Inventory accuracy",
          icon: <CheckCircle className="h-8 w-8 text-indigo-500" />
        },
        {
          value: "65%",
          label: "Less time spent on inventory counts",
          icon: <LineChart className="h-8 w-8 text-indigo-500" />
        },
        {
          value: "18%",
          label: "Increased storage utilization",
          icon: <Package className="h-8 w-8 text-indigo-500" />
        }
      ]}
      mainSection={{
        title: "Complete Warehouse Visibility",
        description: "Take control of your warehouse operations with real-time tracking of items, locations, and movement throughout your facility."
      }}
      keyFeatures={{
        title: "Advanced Warehouse Management",
        description: "Everything you need to optimize your warehouse operations",
        features: [
          {
            title: "Location Management",
            description: "Create and manage zones, aisles, shelves, and bins with customizable naming conventions and capacity planning.",
            icon: <Map className="h-6 w-6" />
          },
          {
            title: "Barcode & RFID Integration",
            description: "Streamline item movement with mobile scanning, automated data capture, and real-time updates.",
            icon: <QrCode className="h-6 w-6" />
          },
          {
            title: "Intelligent Put-Away",
            description: "Optimize item storage with suggestions based on product characteristics, turnover rates, and space utilization.",
            icon: <ForkliftIcon className="h-6 w-6" />
          },
          {
            title: "Efficient Picking Operations",
            description: "Improve order fulfillment with wave picking, zone picking, and optimized pick paths to minimize travel time.",
            icon: <Layers className="h-6 w-6" />
          },
          {
            title: "Transfer Management",
            description: "Track and manage item transfers between locations, warehouses, and fulfillment centers with complete visibility.",
            icon: <TruckIcon className="h-6 w-6" />
          },
          {
            title: "Real-time Reporting",
            description: "Monitor warehouse operations with dashboards showing throughput, utilization, and performance metrics.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Designed for Efficiency",
        subtitle: "Modern Warehouse Operations",
        description: "Our Warehouse module incorporates best practices for today's warehouse environments.",
        items: [
          { text: "Mobile app access for warehouse staff with real-time updates", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Cycle counting tools to maintain inventory accuracy without disruption", icon: <CheckCircle className="h-5 w-5" /> },
          { text: "Labor management and productivity tracking for warehouse teams", icon: <Users className="h-5 w-5" /> },
          { text: "Cross-docking capabilities for high-velocity items", icon: <Zap className="h-5 w-5" /> },
          { text: "Optimized slotting to improve space utilization and picking efficiency", icon: <Package className="h-5 w-5" /> },
          { text: "Advanced search for quickly locating any item in your warehouse", icon: <Search className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Warehouse Operations?",
        description: "Join thousands of businesses that have increased efficiency and accuracy with our Warehouse module.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
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
        },
        {
          title: "Purchase Orders",
          icon: <FileSpreadsheet className="h-8 w-8" />,
          description: "Create, send, and track POs with direct links to incoming inventory.",
          link: "/modules/purchase-orders"
        }
      ]}
    />
  );
};

const Clock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const QrCode = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="5" height="5" rx="1"></rect>
    <rect x="16" y="3" width="5" height="5" rx="1"></rect>
    <rect x="3" y="16" width="5" height="5" rx="1"></rect>
    <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
    <path d="M21 21v.01"></path>
    <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
    <path d="M3 12h.01"></path>
    <path d="M12 3h.01"></path>
    <path d="M12 16v.01"></path>
    <path d="M16 12h1"></path>
    <path d="M21 12v.01"></path>
    <path d="M12 21v-1"></path>
  </svg>
);

const ForkliftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3"></path>
    <path d="M19 20c1.1 0 2-.9 2-2v-6l-3-6c-.3-.7-1-1.2-1.8-1.2H12v7"></path>
    <path d="M9 20l-1.5-2.5h11L17 20"></path>
    <circle cx="7" cy="19" r="1.5"></circle>
    <circle cx="17" cy="19" r="1.5"></circle>
  </svg>
);

export default Warehouse;

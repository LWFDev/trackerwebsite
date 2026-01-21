
import ModuleLayout from "@/components/modules/ModuleLayout";
import { FileText, DollarSign, Clock, CheckCircle, Truck, Calendar, BarChart2, Package, Building, Search, Globe, Zap, ShoppingCart, FileSpreadsheet, Receipt, AlertTriangle } from "lucide-react";

const PurchaseOrders = () => {
  return (
    <ModuleLayout
      title="Purchase Orders"
      description="Create, send, and track POs with direct links to incoming inventory and supplier fulfillment."
      color="rose"
      stats={[
        {
          value: "75%",
          label: "Reduction in PO processing time",
          icon: <Clock className="h-8 w-8 text-rose-500" />
        },
        {
          value: "32%",
          label: "Decrease in procurement costs",
          icon: <DollarSign className="h-8 w-8 text-rose-500" />
        },
        {
          value: "99.2%",
          label: "Order accuracy with validation",
          icon: <CheckCircle className="h-8 w-8 text-rose-500" />
        },
        {
          value: "100%",
          label: "PO visibility throughout lifecycle",
          icon: <FileText className="h-8 w-8 text-rose-500" />
        }
      ]}
      mainSection={{
        title: "Streamline Your Purchasing Process",
        description: "Our Purchase Orders module gives you complete control over the procurement process, from requisition to receipt, with powerful automation and tracking capabilities."
      }}
      keyFeatures={{
        title: "Comprehensive Procurement Management",
        description: "Everything you need to optimize your purchasing workflows",
        features: [
          {
            title: "Intelligent PO Creation",
            description: "Generate purchase orders automatically from low stock alerts, sales orders, or manually with smart item suggestions.",
            icon: <FileText className="h-6 w-6" />
          },
          {
            title: "Approval Workflows",
            description: "Configure multi-level approval processes based on order value, department, or product category to ensure proper authorization.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Order Tracking & Notifications",
            description: "Monitor order status from submission to delivery with real-time updates and automated alerts for changes or delays.",
            icon: <Clock className="h-6 w-6" />
          },
          {
            title: "Receiving & Quality Control",
            description: "Process incoming shipments with barcode scanning, quantity verification, and quality inspection documentation.",
            icon: <Truck className="h-6 w-6" />
          },
          {
            title: "Invoice Matching",
            description: "Automatically match invoices to purchase orders and receiving documents for streamlined three-way verification.",
            icon: <Receipt className="h-6 w-6" />
          },
          {
            title: "Procurement Analytics",
            description: "Generate detailed reports on spending by supplier, category, and time period to identify savings opportunities.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Advanced Procurement Capabilities",
        subtitle: "Beyond Basic POs",
        description: "Our platform provides sophisticated tools to optimize your entire procurement process.",
        items: [
          { text: "Blanket purchase orders for recurring or high-volume orders", icon: <FileSpreadsheet className="h-5 w-5" /> },
          { text: "Multi-currency support for international purchasing", icon: <Globe className="h-5 w-5" /> },
          { text: "Automatic stock replenishment based on min/max levels", icon: <Package className="h-5 w-5" /> },
          { text: "Supplier scorecards and performance analytics", icon: <Building className="h-5 w-5" /> },
          { text: "Advanced search across purchase order history", icon: <Search className="h-5 w-5" /> },
          { text: "Exception alerts for price variances and delivery issues", icon: <AlertTriangle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Procurement Process?",
        description: "Join thousands of businesses that have streamlined their purchasing with our Purchase Orders module.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Suppliers",
          icon: <Building className="h-8 w-8" />,
          description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions.",
          link: "/modules/suppliers"
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

export default PurchaseOrders;

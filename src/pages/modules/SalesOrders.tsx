
import ModuleLayout from "@/components/modules/ModuleLayout";
import { ShoppingCart, Clock, DollarSign, LineChart, CheckCircle, Table, TruckIcon, BarChart2, MessageSquare, CreditCard, Users, Settings, Globe } from "lucide-react";

const SalesOrders = () => {
  return (
    <ModuleLayout
      title="Sales & Orders"
      description="Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving."
      color="blue"
      heroImage="https://nubosync.com/wp-content/uploads/2025/04/Screenshot-2025-04-02-100541.png"
      stats={[
        {
          value: "Save 40%",
          label: "Time with automated workflows",
          icon: <Clock className="h-8 w-8 text-blue-500" />
        },
        {
          value: "Reduce Costs",
          label: "Cut order management costs by 15% through automation",
          icon: <DollarSign className="h-8 w-8 text-blue-500" />
        },
        {
          value: "99.8%",
          label: "Order accuracy with intelligent validation",
          icon: <LineChart className="h-8 w-8 text-blue-500" />
        },
        {
          value: "24/7",
          label: "Real-time order visibility and tracking",
          icon: <Globe className="h-8 w-8 text-blue-500" />
        }
      ]}
      mainSection={{
        title: "Streamline Your Entire Order Process",
        description: "From quote to fulfillment, our Sales & Order Management module provides all the tools you need to manage your order process efficiently, reduce errors, and increase customer satisfaction."
      }}
      keyFeatures={{
        title: "Comprehensive Order Management",
        description: "Everything you need to optimize your sales and order workflows",
        features: [
          {
            title: "Smart Order Creation",
            description: "Easily create detailed orders with customizable templates, automated numbering, and intelligent product suggestions.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Real-time Order Tracking",
            description: "Track orders from placement to fulfillment with real-time status updates and automated notifications.",
            icon: <Table className="h-6 w-6" />
          },
          {
            title: "Secure Payment Processing",
            description: "Process payments securely with integrated payment gateways, automated invoicing, and flexible payment terms.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Intelligent Shipping Management",
            description: "Manage shipping and delivery with integrated carrier services, automatic rate calculation, and tracking number generation.",
            icon: <TruckIcon className="h-6 w-6" />
          },
          {
            title: "Automated Customer Communication",
            description: "Keep customers informed with automated email and SMS notifications for order confirmations, shipments, and delivery updates.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Comprehensive Analytics & Reporting",
            description: "Generate detailed reports on order volume, revenue, fulfillment rates, and customer behavior to optimize your sales process.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Seamless Integration Across Your Business",
        subtitle: "Unified Experience",
        description: "Our Sales & Orders module integrates seamlessly with your entire business ecosystem.",
        items: [
          { text: "Connects with your CRM system to leverage customer data", icon: <Users className="h-5 w-5" /> },
          { text: "Integrates with inventory for accurate stock availability", icon: <TruckIcon className="h-5 w-5" /> },
          { text: "Links with accounting for streamlined financial tracking", icon: <DollarSign className="h-5 w-5" /> },
          { text: "Connects with shipping providers for automated fulfillment", icon: <TruckIcon className="h-5 w-5" /> },
          { text: "Syncs with analytics for comprehensive business insights", icon: <BarChart2 className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Streamline Your Order Management?",
        description: "Join thousands of businesses that have transformed their order process with NuboSync.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "See Pricing",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Inventory",
          icon: <TruckIcon className="h-8 w-8" />,
          description: "Track inventory and manage logistics operations seamlessly.",
          link: "/modules/inventory"
        },
        {
          title: "Customer Portal",
          icon: <MessageSquare className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
        },
        {
          title: "Production",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Schedule, assign, and track every job from setup through final output.",
          link: "/modules/production"
        }
      ]}
    />
  );
};

export default SalesOrders;

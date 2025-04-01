
import ModuleLayout from "@/components/modules/ModuleLayout";
import { ShoppingCart, Clock, DollarSign, LineChart, CheckCircle, Table, TruckIcon, BarChart2, MessageSquare, CreditCard } from "lucide-react";

const SalesOrderManagement = () => {
  return (
    <ModuleLayout
      title="Sales & Order Management"
      description="Connect teams, close more deals, and simplify your sales process with our comprehensive Orders module."
      color="blue"
      stats={[
        {
          value: "Save 40%",
          label: "Time",
          icon: <Clock className="h-8 w-8 text-blue-500" />
        },
        {
          value: "Reduce Costs",
          label: "Cut order management costs by 15% through automation",
          icon: <DollarSign className="h-8 w-8 text-blue-500" />
        },
        {
          value: "Improve Accuracy",
          label: "Achieve 99.8% accuracy in order fulfillment",
          icon: <LineChart className="h-8 w-8 text-blue-500" />
        }
      ]}
      mainSection={{
        title: "Everything You Need for Order Management",
        description: "Our Orders module provides all the tools you need to manage your order process efficiently."
      }}
      keyFeatures={{
        title: "Comprehensive Order Management",
        description: "Our Orders module provides all the tools you need to manage your order process efficiently.",
        features: [
          {
            title: "Create Orders",
            description: "Easily create detailed orders with customizable templates and automated numbering.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Order Tracking",
            description: "Track orders from placement to fulfillment with real-time status updates.",
            icon: <Table className="h-6 w-6" />
          },
          {
            title: "Payment Processing",
            description: "Process payments securely with integrated payment gateways and automated invoicing.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Shipping Management",
            description: "Manage shipping and delivery with integrated carrier services and tracking numbers.",
            icon: <TruckIcon className="h-6 w-6" />
          },
          {
            title: "Customer Communication",
            description: "Communicate with customers about their orders with automated email and SMS notifications.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Reporting & Analytics",
            description: "Generate comprehensive reports on order volume, revenue, and customer turnover.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      ctaSection={{
        title: "Ready to Streamline Your Order Management?",
        description: "Join thousands of businesses that have transformed their order process with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request Demo"
      }}
      relatedModules={[
        {
          title: "Inventory & Logistics",
          icon: <TruckIcon className="h-8 w-8" />,
          description: "Track inventory and manage logistics operations seamlessly.",
          link: "/modules/inventory-logistics"
        },
        {
          title: "Customer Portal",
          icon: <MessageSquare className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
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

export default SalesOrderManagement;

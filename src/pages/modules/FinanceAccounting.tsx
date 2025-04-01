
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Receipt, BarChart2, CreditCard, DollarSign, FileText, PieChart, Zap, Lock, RefreshCw, Check, Clock, Users } from "lucide-react";

const FinanceAccounting = () => {
  return (
    <ModuleLayout
      title="Finance & Accounting"
      description="Manage financial transactions and accounting processes efficiently with our comprehensive solution."
      color="green"
      stats={[
        {
          value: "$2.5M+",
          label: "Processed Monthly",
          icon: <DollarSign className="h-8 w-8 text-green-500" />
        },
        {
          value: "1.2%",
          label: "Avg. Transaction Time",
          icon: <Clock className="h-8 w-8 text-green-500" />
        },
        {
          value: "99.99%",
          label: "Uptime",
          icon: <Zap className="h-8 w-8 text-green-500" />
        },
        {
          value: "135+",
          label: "Supported Currencies",
          icon: <CreditCard className="h-8 w-8 text-green-500" />
        }
      ]}
      mainSection={{
        title: "Accept Payments Everywhere",
        description: "Process payments across multiple channels and methods with a single integration."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to streamline payments and stay on top",
        features: [
          {
            title: "Multiple Payment Methods",
            description: "Accept credit cards, bank transfers, digital wallets, cryptocurrencies, and other methods.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Automated Reconciliation",
            description: "Automatically match transactions with invoices and update your accounting systems.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "Recurring Billing",
            description: "Set up subscription payments and recurring billing schedules for customers.",
            icon: <Clock className="h-6 w-6" />
          },
          {
            title: "Payment Analytics",
            description: "Track payment trends, revenue patterns, analyze conversions, and adjust your strategy.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Fraud Prevention",
            description: "Protect your business with advanced fraud detection and prevention tools.",
            icon: <Lock className="h-6 w-6" />
          },
          {
            title: "Global Payments",
            description: "Accept payments from customers in any region with multi-currency and localization support.",
            icon: <CreditCard className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "About Payments",
        description: "Our payment processing provides a complete solution for all your processing and reporting payment needs.",
        items: [
          { text: "Lower payment processing with automated validation", icon: <Check className="h-5 w-5" /> },
          { text: "Reduced manual errors through automated reconciliation", icon: <Check className="h-5 w-5" /> },
          { text: "Automated customer communications with status updates", icon: <Check className="h-5 w-5" /> },
          { text: "Integration with your ERP and accounting systems", icon: <Check className="h-5 w-5" /> },
          { text: "Fast payment processing", icon: <Check className="h-5 w-5" /> },
          { text: "End-to-end encryption", icon: <Check className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to streamline your payment processing?",
        description: "Join thousands of businesses already using our Payments module to process transactions securely and efficiently.",
        primaryButtonText: "Start Free Trial",
        secondaryButtonText: "Talk to Sales"
      }}
      relatedModules={[
        {
          title: "Orders",
          icon: <FileText className="h-8 w-8" />,
          description: "Track and process customer orders efficiently.",
          link: "/modules/sales-order-management"
        },
        {
          title: "Customers",
          icon: <Users className="h-8 w-8" />,
          description: "Manage customer relationships and data with easy-to-use CRM tools.",
          link: "/modules/customer-service"
        },
        {
          title: "Invoice Manager",
          icon: <FileText className="h-8 w-8" />,
          description: "Create and manage invoices with automated workflows.",
          link: "/modules/document-management"
        }
      ]}
    />
  );
};

export default FinanceAccounting;

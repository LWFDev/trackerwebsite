import ModuleLayout from "@/components/modules/ModuleLayout";
import { Receipt, BarChart2, CreditCard, DollarSign, FileText, PieChart, Zap, Lock, RefreshCw, Check, Clock, Users, Calculator, Calendar, Briefcase, TrendingUp, Shield, Globe } from "lucide-react";
import financeAccountingMain from "@/assets/modules/finance-accounting-main.jpg";

const FinanceAccounting = () => {
  return (
    <ModuleLayout
      title="Finance & Accounting"
      description="Manage financial transactions and accounting processes efficiently with our comprehensive finance solution."
      color="green"
      stats={[
        {
          value: "$2.5M+",
          label: "Processed Monthly Per Average Client",
          icon: <DollarSign className="h-8 w-8 text-green-500" />
        },
        {
          value: "45%",
          label: "Reduction in Manual Accounting Tasks",
          icon: <Clock className="h-8 w-8 text-green-500" />
        },
        {
          value: "99.99%",
          label: "Uptime for Financial Operations",
          icon: <Zap className="h-8 w-8 text-green-500" />
        },
        {
          value: "135+",
          label: "Countries and Currencies Supported",
          icon: <Globe className="h-8 w-8 text-green-500" />
        }
      ]}
      mainSection={{
        title: "Complete Financial Management",
        description: "Our Finance & Accounting module provides a comprehensive solution for all your financial operations, from payment processing to advanced reporting and compliance.",
        image: financeAccountingMain
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to streamline financial operations and gain full control",
        features: [
          {
            title: "Multi-Currency Payment Processing",
            description: "Accept payments in 135+ currencies with automatic exchange rate calculation and consolidated reporting.",
            icon: <CreditCard className="h-6 w-6" />
          },
          {
            title: "Intelligent Reconciliation",
            description: "Automatically match transactions with invoices and update your accounting systems with AI-powered accuracy.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "Subscription & Recurring Billing",
            description: "Set up flexible subscription models with automated billing schedules, proration, and dunning management.",
            icon: <Calendar className="h-6 w-6" />
          },
          {
            title: "Advanced Financial Analytics",
            description: "Access real-time financial dashboards with customizable KPIs, cash flow forecasting, and trend analysis.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Enterprise-Grade Security",
            description: "Protect financial data with bank-level encryption, multi-factor authentication, and comprehensive audit trails.",
            icon: <Shield className="h-6 w-6" />
          },
          {
            title: "Regulatory Compliance",
            description: "Stay compliant with automatic tax calculation, reporting for multiple jurisdictions, and built-in audit controls.",
            icon: <Briefcase className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Designed for Financial Excellence",
        subtitle: "Business Impact",
        description: "Our finance and accounting solutions deliver measurable results for businesses of all sizes.",
        items: [
          { text: "Reduce accounting costs by up to 35% through intelligent automation", icon: <TrendingUp className="h-5 w-5" /> },
          { text: "Improve cash flow with predictive analytics and automated collections", icon: <DollarSign className="h-5 w-5" /> },
          { text: "Eliminate manual errors with automated reconciliation and validation", icon: <Check className="h-5 w-5" /> },
          { text: "Gain real-time visibility into financial performance across all channels", icon: <BarChart2 className="h-5 w-5" /> },
          { text: "Ensure compliance with built-in controls and audit trails", icon: <Shield className="h-5 w-5" /> },
          { text: "Streamline period-end closing with automated workflows", icon: <Calendar className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to transform your financial operations?",
        description: "Join thousands of businesses already using our Finance & Accounting module to optimize financial processes and drive growth.",
        primaryButtonText: "Get Started",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "View Pricing",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Sales & Order Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Track and process customer orders efficiently with automated workflows.",
          link: "/modules/sales-order-management"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Get powerful insights from your financial data with customizable dashboards.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Enable customer self-service for invoices, payments, and financial documents.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default FinanceAccounting;

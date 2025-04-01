
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Zap, Clock, Database, RefreshCw, Code, Bell, FileCode, Layout, CheckCircle } from "lucide-react";

const IntegrationPlatform = () => {
  return (
    <ModuleLayout
      title="Integrations Platform"
      description="Connect your systems and automate workflows with our powerful integration platform."
      color="teal"
      stats={[
        {
          value: "500+",
          label: "Pre-built Connectors",
          icon: <Zap className="h-8 w-8 text-teal-500" />
        },
        {
          value: "70%",
          label: "Time Saved",
          icon: <Clock className="h-8 w-8 text-teal-500" />
        },
        {
          value: "99.9%",
          label: "Uptime",
          icon: <CheckCircle className="h-8 w-8 text-teal-500" />
        },
        {
          value: "10,000+",
          label: "Active Users",
          icon: <Users className="h-8 w-8 text-teal-500" />
        }
      ]}
      mainSection={{
        title: "Connect Your Entire Tech Stack",
        description: "Seamlessly integrate all your business systems with our powerful platform."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to connect and automate your business systems",
        features: [
          {
            title: "Pre-built Connectors",
            description: "Connect to 500+ applications and services with our pre-built connectors.",
            icon: <Zap className="h-6 w-6" />
          },
          {
            title: "Visual Workflow Builder",
            description: "Create complex integrations with our intuitive drag-and-drop interface.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Real-time Data Sync",
            description: "Keep your data in sync across all your systems in real-time.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "Custom API Builder",
            description: "Create custom APIs to connect with any system or service.",
            icon: <Code className="h-6 w-6" />
          },
          {
            title: "Error Handling",
            description: "Robust error handling and retry mechanisms to ensure reliability.",
            icon: <AlertCircle className="h-6 w-6" />
          },
          {
            title: "Monitoring & Alerts",
            description: "Monitor your integrations and receive alerts when issues arise.",
            icon: <Bell className="h-6 w-6" />
          }
        ]
      }}
      ctaSection={{
        title: "Ready to Connect Your Systems?",
        description: "Join thousands of businesses that have transformed their operations with our Integration Platform.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request Demo"
      }}
      relatedModules={[
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Get powerful insights from your data, anytime, anywhere.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Document Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Store, organize, and share documents securely across your organization.",
          link: "/modules/document-management"
        },
        {
          title: "Customer Portal",
          icon: <UserCheck className="h-8 w-8" />,
          description: "Provide your customers with a self-service portal for support and information.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default IntegrationPlatform;

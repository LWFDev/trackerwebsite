import ModuleLayout from "@/components/modules/ModuleLayout";
import { Zap, Clock, Database, RefreshCw, Code, Bell, File, Layout, CheckCircle, Users, BarChart2, Globe, Link2, Shield, Server, Plug, Map, Puzzle } from "lucide-react";
import integrationPlatformMain from "@/assets/modules/integration-platform-main.jpg";

const IntegrationPlatform = () => {
  return (
    <ModuleLayout
      title="Integrations Platform"
      description="Connect your entire technology ecosystem and automate cross-system workflows with our powerful enterprise integration platform."
      color="teal"
      stats={[
        {
          value: "500+",
          label: "Pre-built Connectors & Growing",
          icon: <Zap className="h-8 w-8 text-teal-500" />
        },
        {
          value: "70%",
          label: "Reduction in Integration Development Time",
          icon: <Clock className="h-8 w-8 text-teal-500" />
        },
        {
          value: "99.9%",
          label: "Platform Uptime SLA",
          icon: <CheckCircle className="h-8 w-8 text-teal-500" />
        },
        {
          value: "10,000+",
          label: "Active Enterprise Integrations",
          icon: <Users className="h-8 w-8 text-teal-500" />
        }
      ]}
      mainSection={{
        title: "Unify Your Business Technology",
        description: "Our Integration Platform brings together all your systems, applications, and data sources to create a seamless, connected ecosystem that eliminates silos and automates critical business processes.",
        image: integrationPlatformMain
      }}
      keyFeatures={{
        title: "Enterprise-Grade Integration Tools",
        description: "Everything you need to connect and automate your business systems",
        features: [
          {
            title: "Universal Connectivity",
            description: "Connect to virtually any system with 500+ pre-built connectors for popular applications, databases, and custom APIs.",
            icon: <Zap className="h-6 w-6" />
          },
          {
            title: "No-Code Workflow Builder",
            description: "Create sophisticated integrations with our intuitive visual designer - no programming skills required.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Real-time Data Synchronization",
            description: "Keep your data consistent across systems with bi-directional syncing, transformation rules, and conflict resolution.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            title: "API Management",
            description: "Create, publish, and manage APIs with comprehensive lifecycle tools, documentation, and security controls.",
            icon: <Code className="h-6 w-6" />
          },
          {
            title: "Intelligent Error Handling",
            description: "Ensure reliability with automatic error detection, retry mechanisms, and fallback options for critical processes.",
            icon: <Bell className="h-6 w-6" />
          },
          {
            title: "Comprehensive Monitoring",
            description: "Track integration performance with detailed logging, real-time alerts, and customizable dashboards.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Built for Enterprise Scale",
        subtitle: "Enterprise Ready",
        description: "Our platform is designed to handle the most demanding integration requirements with uncompromising security and performance.",
        items: [
          { text: "High-throughput architecture processing millions of transactions daily", icon: <Zap className="h-5 w-5" /> },
          { text: "Advanced encryption and security with SOC 2, GDPR, and HIPAA compliance", icon: <Shield className="h-5 w-5" /> },
          { text: "Flexible deployment options including cloud, hybrid, and on-premises", icon: <Server className="h-5 w-5" /> },
          { text: "Global data centers ensuring optimal performance worldwide", icon: <Globe className="h-5 w-5" /> },
          { text: "Version control and rollback capabilities for safe deployment", icon: <RefreshCw className="h-5 w-5" /> },
          { text: "Comprehensive audit trails for all integration activities", icon: <Database className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Connect Your Business Systems?",
        description: "Join thousands of enterprises that have transformed their operations with our Integration Platform.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Analyze integration performance and generate cross-system data insights.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Document Management",
          icon: <File className="h-8 w-8" />,
          description: "Automate document workflows across systems and departments.",
          link: "/modules/document-management"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Deliver integrated customer experiences with unified data and services.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default IntegrationPlatform;

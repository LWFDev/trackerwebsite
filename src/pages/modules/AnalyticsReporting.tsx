
import ModuleLayout from "@/components/modules/ModuleLayout";
import { BarChart2, PieChart, TrendingUp, Users, Clock, LineChart, BarChart, Calendar, FileText, RefreshCw, Database, Zap, Eye, Smartphone, Layers, Monitor, Sliders, Wifi, Lock, Shield } from "lucide-react";

const AnalyticsReporting = () => {
  return (
    <ModuleLayout
      title="Analytics & Reporting"
      description="Transform your data into actionable insights with our powerful analytics platform featuring real-time dashboards and customizable reports."
      color="teal"
      heroImage="/lovable-uploads/32d8d791-11ef-418a-9131-8f947c40c8a4.png"
      heroImageCallouts={[
        {
          text: "Analytics Dashboard",
          position: { top: "15%", left: "-20%" },
          icon: <BarChart2 className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Data Visualization",
          position: { top: "35%", right: "-20%" },
          icon: <PieChart className="h-4 w-4" />,
          delay: "0.7s"
        },
        {
          text: "Report Builder",
          position: { top: "55%", left: "-15%" },
          icon: <FileText className="h-4 w-4" />,
          delay: "0.9s"
        },
        {
          text: "Performance Metrics",
          position: { top: "75%", right: "-15%" },
          icon: <TrendingUp className="h-4 w-4" />,
          delay: "1.1s"
        }
      ]}
      stats={[
        {
          value: "15,000+",
          label: "Active Users Making Data-Driven Decisions",
          icon: <Users className="h-8 w-8 text-[#D4AF37]" />
        },
        {
          value: "40%",
          label: "Time Saved on Report Creation",
          icon: <Clock className="h-8 w-8 text-[#D4AF37]" />
        },
        {
          value: "200+",
          label: "Pre-built Report Templates",
          icon: <FileText className="h-8 w-8 text-[#D4AF37]" />
        },
        {
          value: "25%",
          label: "Average Business Performance Improvement",
          icon: <TrendingUp className="h-8 w-8 text-[#D4AF37]" />
        }
      ]}
      mainSection={{
        title: "Unlock the Power of Your Data",
        description: "Our Analytics & Reporting platform provides comprehensive tools to collect, visualize, and analyze data from across your business, enabling informed decisions that drive growth and efficiency."
      }}
      keyFeatures={{
        title: "Comprehensive Analytics Suite",
        description: "Everything you need to transform your data into strategic insights",
        features: [
          {
            title: "Real-time Interactive Dashboards",
            description: "Monitor key metrics in real-time with customizable dashboards featuring drag-and-drop design and automatic data refreshing.",
            icon: <LineChart className="h-6 w-6" />
          },
          {
            title: "Advanced Data Visualization",
            description: "Create compelling visual representations with 40+ chart types, interactive elements, and presentation-ready exports.",
            icon: <PieChart className="h-6 w-6" />
          },
          {
            title: "Role-based Report Distribution",
            description: "Deliver tailored insights to different stakeholders with role-specific dashboards, access controls, and automated sharing.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Intelligent Report Scheduling",
            description: "Automate report generation and distribution with customizable schedules, formats, and delivery channels.",
            icon: <Calendar className="h-6 w-6" />
          },
          {
            title: "Comprehensive Data Integration",
            description: "Connect to 200+ data sources including databases, applications, and external services for a unified view of your business.",
            icon: <Database className="h-6 w-6" />
          },
          {
            title: "AI-Powered Data Analysis",
            description: "Uncover hidden patterns and trends with machine learning algorithms that automatically identify anomalies and opportunities.",
            icon: <Zap className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Enterprise-Grade Analytics Platform",
        subtitle: "Built for Performance",
        description: "Our analytics solution combines power, flexibility and security to meet the demands of modern businesses.",
        items: [
          { text: "High-performance data processing with sub-second query response", icon: <Zap className="h-5 w-5" /> },
          { text: "Responsive design that works across desktop, tablet, and mobile", icon: <Smartphone className="h-5 w-5" /> },
          { text: "Embedded analytics capabilities for customer-facing dashboards", icon: <Eye className="h-5 w-5" /> },
          { text: "Granular security controls with row-level and column-level permissions", icon: <Lock className="h-5 w-5" /> },
          { text: "Data governance tools for compliance and data quality management", icon: <Shield className="h-5 w-5" /> },
          { text: "Offline capabilities with automatic synchronization when back online", icon: <Wifi className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to unlock the power of your data?",
        description: "Join thousands of businesses already using our Analytics platform to make better decisions and drive growth.",
        primaryButtonText: "Start Free Trial",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Sales & Order Management",
          icon: <BarChart className="h-8 w-8" />,
          description: "Analyze sales performance, order trends, and customer buying patterns.",
          link: "/modules/sales-order-management"
        },
        {
          title: "Finance & Accounting",
          icon: <FileText className="h-8 w-8" />,
          description: "Track financial KPIs, monitor cash flow, and analyze profitability metrics.",
          link: "/modules/finance-accounting"
        },
        {
          title: "Production & Manufacturing",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Optimize production processes with detailed efficiency and quality analytics.",
          link: "/modules/production-manufacturing"
        }
      ]}
    />
  );
};

export default AnalyticsReporting;

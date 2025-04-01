
import ModuleLayout from "@/components/modules/ModuleLayout";
import { BarChart2, PieChart, TrendingUp, Users, Clock, LineChart, BarChart, Calendar, FileText, RefreshCw } from "lucide-react";
import Footer from "@/components/landing/Footer";

const AnalyticsReporting = () => {
  return (
    <>
      <ModuleLayout
        title="Analytics & Reporting"
        description="Transform your data into actionable insights with powerful analytics and visualization tools."
        color="teal"
        stats={[
          {
            value: "15,000+",
            label: "Active Users",
            icon: <Users className="h-8 w-8 text-[#D4AF37]" />
          },
          {
            value: "40%",
            label: "Time Saved",
            icon: <Clock className="h-8 w-8 text-[#D4AF37]" />
          },
          {
            value: "4.9/5",
            label: "Customer Rating",
            icon: <BarChart className="h-8 w-8 text-[#D4AF37]" />
          },
          {
            value: "25%",
            label: "Performance Boost",
            icon: <TrendingUp className="h-8 w-8 text-[#D4AF37]" />
          }
        ]}
        mainSection={{
          title: "Powerful Analytics at Your Fingertips",
          description: "Transform your data into actionable insights with our intuitive dashboard."
        }}
        keyFeatures={{
          title: "Key Features",
          description: "Everything you need to transform your data into actionable insights",
          features: [
            {
              title: "Real-time Analytics",
              description: "Monitor your business metrics in real-time with automatic data refreshing and alerts.",
              icon: <LineChart className="h-6 w-6" />
            },
            {
              title: "Interactive Visualizations",
              description: "Create stunning charts, graphs, and data visualizations with our drag-and-drop interface.",
              icon: <PieChart className="h-6 w-6" />
            },
            {
              title: "Custom Dashboards",
              description: "Build personalized dashboards tailored to different roles and departments.",
              icon: <BarChart className="h-6 w-6" />
            },
            {
              title: "Automated Reporting",
              description: "Schedule and distribute reports automatically to key stakeholders.",
              icon: <Calendar className="h-6 w-6" />
            },
            {
              title: "Data Integration",
              description: "Connect to multiple data sources for a unified view of your business.",
              icon: <RefreshCw className="h-6 w-6" />
            },
            {
              title: "Advanced Filtering",
              description: "Drill down into your data with powerful filtering and segmentation tools.",
              icon: <FileText className="h-6 w-6" />
            }
          ]
        }}
        specialSection={{
          title: "Advanced Analytics Capabilities",
          description: "Our platform goes beyond basic reporting to provide deep analytics capabilities",
          items: [
            { text: "AI-powered data insights and trend predictions", icon: <TrendingUp className="h-5 w-5" /> },
            { text: "Custom report builder with drag-and-drop interface", icon: <FileText className="h-5 w-5" /> },
            { text: "Interactive data visualization with multiple chart types", icon: <PieChart className="h-5 w-5" /> },
            { text: "Automated data cleansing and normalization", icon: <RefreshCw className="h-5 w-5" /> },
            { text: "Role-based dashboards and access control", icon: <Users className="h-5 w-5" /> }
          ]
        }}
        ctaSection={{
          title: "Ready to transform your data into insights?",
          description: "Join thousands of businesses already using our Analytics module to make better decisions.",
          primaryButtonText: "Start Free Trial",
          secondaryButtonText: "Talk to Sales"
        }}
        relatedModules={[
          {
            title: "Sales & Order Management",
            icon: <BarChart className="h-8 w-8" />,
            description: "Connect teams, close more deals, and simplify your sales process.",
            link: "/modules/sales-order-management"
          },
          {
            title: "Finance & Accounting",
            icon: <FileText className="h-8 w-8" />,
            description: "Manage financial transactions and accounting processes efficiently.",
            link: "/modules/finance-accounting"
          },
          {
            title: "Production & Manufacturing",
            icon: <BarChart2 className="h-8 w-8" />,
            description: "Oversee production processes, schedules, and resource allocation.",
            link: "/modules/production-manufacturing"
          }
        ]}
      />
      <Footer />
    </>
  );
};

export default AnalyticsReporting;

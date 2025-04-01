
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Layers, Clock, Percent, Settings, BarChart2, Wrench, Clipboard, LineChart, CheckCircle, File, Users, Layout } from "lucide-react";

const ProductionManufacturing = () => {
  return (
    <ModuleLayout
      title="Production Management"
      description="Streamline your production processes, optimize resource allocation, and increase efficiency with our comprehensive Production Management solution."
      color="blue"
      stats={[
        {
          value: "25%",
          label: "Increase in production efficiency",
          icon: <Percent className="h-8 w-8 text-blue-500" />
        },
        {
          value: "30%",
          label: "Reduction in production time",
          icon: <Clock className="h-8 w-8 text-blue-500" />
        },
        {
          value: "18%",
          label: "Decrease in operational costs",
          icon: <LineChart className="h-8 w-8 text-blue-500" />
        },
        {
          value: "99.5%",
          label: "On-time delivery rate",
          icon: <CheckCircle className="h-8 w-8 text-blue-500" />
        }
      ]}
      mainSection={{
        title: "Comprehensive Production Management",
        description: "Our Production Management module provides all the tools you need to optimize your manufacturing processes."
      }}
      keyFeatures={{
        title: "Key Features",
        description: "Everything you need to optimize your manufacturing processes",
        features: [
          {
            title: "Production Planning",
            description: "Create detailed production plans with resource allocation, timelines, and dependencies.",
            icon: <Clipboard className="h-6 w-6" />
          },
          {
            title: "Scheduling & Capacity",
            description: "Optimize production schedules based on capacity, priorities, and deadlines.",
            icon: <Clock className="h-6 w-6" />
          },
          {
            title: "Quality Control",
            description: "Implement quality checks at every stage of production to ensure consistent quality.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Resource Management",
            description: "Track and allocate materials, equipment, and human resources efficiently.",
            icon: <Settings className="h-6 w-6" />
          },
          {
            title: "Performance Analytics",
            description: "Monitor key performance indicators and identify areas for improvement.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Maintenance Scheduling",
            description: "Plan and track preventive maintenance to minimize downtime and ensure equipment life.",
            icon: <Wrench className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Streamlined Production Process",
        subtitle: "Process",
        description: "Our platform guides you through every stage of the production lifecycle."
      }}
      ctaSection={{
        title: "Ready to Optimize Your Production?",
        description: "Join thousands of manufacturers that have transformed their production processes with NuboSync.",
        primaryButtonText: "Get Started Today",
        secondaryButtonText: "Request a Demo"
      }}
      relatedModules={[
        {
          title: "Inventory & Logistics",
          icon: <File className="h-8 w-8" />,
          description: "Track inventory and manage logistics operations seamlessly.",
          link: "/modules/inventory-logistics"
        },
        {
          title: "Product Design",
          icon: <Layout className="h-8 w-8" />,
          description: "Create and manage product designs with powerful customization tools.",
          link: "/modules/product-design"
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

export default ProductionManufacturing;

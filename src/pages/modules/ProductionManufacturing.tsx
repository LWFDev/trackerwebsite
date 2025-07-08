import ModuleLayout from "@/components/modules/ModuleLayout";
import { Layers, Clock, Percent, Settings, BarChart2, Wrench, Clipboard, LineChart, CheckCircle, File, Users, Layout, Wrench as WrenchIcon, Cpu, AlertTriangle, BookOpen, Database, Sliders } from "lucide-react";

const ProductionManufacturing = () => {
  return (
    <ModuleLayout
      title="Production Management"
      description="Streamline your production processes, optimize resource allocation, and increase efficiency with our comprehensive manufacturing solution."
      color="blue"
      heroImage="/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png"
      heroImageCallouts={[
        {
          text: "Job Details View",
          position: { top: "20%", left: "-20%" },
          icon: <File className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Production Workflow",
          position: { top: "40%", right: "-20%" },
          icon: <Layers className="h-4 w-4" />,
          delay: "0.7s"
        },
        {
          text: "Resource Allocation",
          position: { top: "60%", left: "-15%" },
          icon: <Users className="h-4 w-4" />,
          delay: "0.9s"
        },
        {
          text: "Quality Control",
          position: { top: "80%", right: "-15%" },
          icon: <CheckCircle className="h-4 w-4" />,
          delay: "1.1s"
        }
      ]}
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
        title: "Transform Your Manufacturing Operations",
        description: "Our Production Management module provides the tools you need to optimize your entire manufacturing process from planning to quality control, increasing efficiency while reducing costs."
      }}
      keyFeatures={{
        title: "Complete Production Control",
        description: "Everything you need to optimize your manufacturing processes",
        features: [
          {
            title: "Advanced Production Planning",
            description: "Create optimized production plans with intelligent resource allocation, dependency management, and capacity planning.",
            icon: <Clipboard className="h-6 w-6" />
          },
          {
            title: "Dynamic Scheduling",
            description: "Optimize production schedules with real-time adjustments based on priorities, capacity, and material availability.",
            icon: <Clock className="h-6 w-6" />
          },
          {
            title: "Integrated Quality Management",
            description: "Implement comprehensive quality controls with inspection points, testing protocols, and non-conformance tracking.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Intelligent Resource Management",
            description: "Track and allocate materials, equipment, and personnel with precision to maximize utilization and minimize waste.",
            icon: <Settings className="h-6 w-6" />
          },
          {
            title: "Real-time Performance Monitoring",
            description: "Monitor key performance indicators with customizable dashboards that highlight bottlenecks and improvement opportunities.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Predictive Maintenance",
            description: "Minimize downtime with condition-based monitoring, maintenance forecasting, and automated service scheduling.",
            icon: <WrenchIcon className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Designed for Manufacturing Excellence",
        subtitle: "Industry Solutions",
        description: "Our production management platform is tailored to meet the unique challenges of various manufacturing environments.",
        items: [
          { text: "Discrete manufacturing with build-to-order and assemble-to-order workflows", icon: <Layers className="h-5 w-5" /> },
          { text: "Process manufacturing with batch processing and formula management", icon: <Database className="h-5 w-5" /> },
          { text: "Lean manufacturing tools including kanban and pull systems", icon: <Sliders className="h-5 w-5" /> },
          { text: "Industry 4.0 ready with IoT integration and machine connectivity", icon: <Cpu className="h-5 w-5" /> },
          { text: "Regulatory compliance tools for ISO, FDA, and industry standards", icon: <BookOpen className="h-5 w-5" /> },
          { text: "Environmental and safety management capabilities", icon: <AlertTriangle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Production Operations?",
        description: "Join thousands of manufacturers that have optimized their production processes with our comprehensive solution.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request a Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Inventory & Logistics",
          icon: <File className="h-8 w-8" />,
          description: "Integrate production with inventory management for seamless material flow and stock control.",
          link: "/modules/inventory-logistics"
        },
        {
          title: "Product Design",
          icon: <Layout className="h-8 w-8" />,
          description: "Connect design and engineering directly to production for faster product development.",
          link: "/modules/product-design"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Gain comprehensive insights into production performance, quality, and efficiency.",
          link: "/modules/analytics-reporting"
        }
      ]}
    />
  );
};

export default ProductionManufacturing;

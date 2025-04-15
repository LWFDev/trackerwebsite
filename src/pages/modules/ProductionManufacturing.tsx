
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Layers, Clock, Percent, Settings, BarChart2, Wrench, Clipboard, LineChart, CheckCircle, File, Users, Layout, Wrench as WrenchIcon, Cpu, AlertTriangle, BookOpen, Database, Sliders } from "lucide-react";

const Production = () => {
  return (
    <ModuleLayout
      title="Production"
      description="Schedule, assign, and track every job from setup through final output with visual production queues."
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
        title: "Transform Your Production Operations",
        description: "Our Production module provides the tools you need to optimize your entire production process from planning to final delivery, increasing efficiency while reducing costs."
      }}
      keyFeatures={{
        title: "Complete Production Control",
        description: "Everything you need to optimize your production processes",
        features: [
          {
            title: "Visual Production Planning",
            description: "Create optimized production plans with intelligent resource allocation, dependency management, and capacity planning.",
            icon: <Clipboard className="h-6 w-6" />
          },
          {
            title: "Dynamic Job Scheduling",
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
            title: "Production Floor Tracking",
            description: "Track job progress in real-time with digital production boards, operator updates, and automated status changes.",
            icon: <WrenchIcon className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Designed for Production Excellence",
        subtitle: "Industry Solutions",
        description: "Our production management platform is tailored to meet the unique challenges of various decoration methods.",
        items: [
          { text: "Screen printing with color separation tracking and press management", icon: <Layers className="h-5 w-5" /> },
          { text: "Embroidery with stitch count estimates and digitizing status", icon: <Database className="h-5 w-5" /> },
          { text: "DTG and DTF printing with pretreatment and curing tracking", icon: <Sliders className="h-5 w-5" /> },
          { text: "Sublimation with temperature and pressure specifications", icon: <Cpu className="h-5 w-5" /> },
          { text: "Heat transfer vinyl with cutting and weeding tracking", icon: <BookOpen className="h-5 w-5" /> },
          { text: "Laser engraving with power and speed settings", icon: <AlertTriangle className="h-5 w-5" /> }
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
          title: "Inventory",
          icon: <File className="h-8 w-8" />,
          description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
          link: "/modules/inventory"
        },
        {
          title: "Product Designer",
          icon: <Layout className="h-8 w-8" />,
          description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements.",
          link: "/modules/product-designer"
        },
        {
          title: "Sales & Orders",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving.",
          link: "/modules/sales-orders"
        }
      ]}
    />
  );
};

export default Production;

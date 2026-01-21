
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Layers, Clock, Percent, Settings, BarChart2, Wrench, Clipboard, LineChart, CheckCircle, File, Users, Layout, Cpu, AlertTriangle, BookOpen, Database, Sliders } from "lucide-react";

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
        description: "Our Production module provides the tools you need to optimize your entire manufacturing process from planning to quality control, increasing efficiency while reducing costs."
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
            icon: <Wrench className="h-6 w-6" />
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
          title: "Artworkers",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order.",
          link: "/modules/artworkers"
        }
      ]}
    />
  );
};

export default Production;

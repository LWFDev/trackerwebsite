
import ModuleLayout from "@/components/modules/ModuleLayout";
import { Layers, Clock, Percent, Settings, BarChart2, Wrench, Clipboard, LineChart, CheckCircle, File, Layout, Cpu, AlertTriangle, BookOpen, Database, Sliders } from "lucide-react";

const Production = () => {
  return (
    <ModuleLayout
      title="Production"
      description="Advanced production scheduling for embroidery, DTG, DTF, screen printing & heat seal with thread color optimization, barcode machine integrations, and QA routing."
      color="blue"
      seoKeywords="production scheduling for embroidery, thread color optimization, barcode integrations, DTG printing management, DTF transfer tracking, screen printing workflow, heat seal production, machine efficiencies, time tracking, QA routing"
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
        title: "Optimize Embroidery Production with Thread Matching & Scheduling",
        description: "Production scheduling for embroidery, DTG, DTF, screen printing, and heat seal workflows. Optimize thread color sequences, manage machine efficiencies, track time per job, route through QA checkpoints, and deliver production files directly to machines via barcode integrations."
      }}
      keyFeatures={{
        title: "Complete Garment Decoration Production Control",
        description: "Everything you need to optimize embroidery, DTG, DTF, screen printing & heat seal production",
        features: [
          {
            title: "Thread Color Optimization",
            description: "Optimize embroidery production schedules by grouping orders with matching thread colors to minimize changeover time and maximize machine efficiency.",
            icon: <Clipboard className="h-6 w-6" />
          },
          {
            title: "Dynamic Multi-Method Scheduling",
            description: "Schedule across embroidery, DTG, DTF, screen printing, and heat seal production lines with real-time adjustments based on priorities and capacity.",
            icon: <Clock className="h-6 w-6" />
          },
          {
            title: "QA Routing & Quality Management",
            description: "Route jobs through QA checkpoints with inspection protocols, non-conformance tracking, and quality control for garment decoration standards.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Barcode Machine Integrations",
            description: "Deliver production files directly to embroidery machines (Barudan/Tajima), DTG printers, DTF systems, and heat seal equipment via barcode scanning.",
            icon: <Settings className="h-6 w-6" />
          },
          {
            title: "Real-time Production Dashboards",
            description: "Monitor embroidery head counts, DTG/DTF throughput, screen printing runs, and heat seal cycles with customizable dashboards and Metabase/PowerBI integration.",
            icon: <BarChart2 className="h-6 w-6" />
          },
          {
            title: "Time Tracking & Machine Maintenance",
            description: "Track time per job, monitor machine efficiencies, and schedule preventative maintenance to minimize downtime across all decoration equipment.",
            icon: <Wrench className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Built for Garment Decoration Excellence",
        subtitle: "Industry Solutions",
        description: "Production management tailored for embroidery, DTG, DTF, screen printing, heat seal, and licensed team gear operations.",
        items: [
          { text: "Embroidery production with thread color grouping, head management, and bNET/Pulse delivery", icon: <Layers className="h-5 w-5" /> },
          { text: "DTG & DTF production tracking with file delivery and transfer management", icon: <Database className="h-5 w-5" /> },
          { text: "Screen printing workflow with separation files, screen burning, and ink management", icon: <Sliders className="h-5 w-5" /> },
          { text: "Barcode integrations to embroidery, DTG, DTF, and heat seal machines", icon: <Cpu className="h-5 w-5" /> },
          { text: "Licensed team gear production with compliance tracking and order grouping", icon: <BookOpen className="h-5 w-5" /> },
          { text: "ERP and shipping integrations for end-to-end fulfillment", icon: <AlertTriangle className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Optimize Your Garment Decoration Production?",
        description: "Join garment decorators who have optimized embroidery, DTG, DTF, screen printing & heat seal production with Tracker.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Request a Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Inventory",
          icon: <File className="h-8 w-8" />,
          description: "Monitor blank garment stock levels, thread inventory, and ink supplies across locations.",
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
          description: "Assign artwork tasks, manage digital proof approvals, and ensure timely proof delivery for every order.",
          link: "/modules/artworkers"
        }
      ]}
    />
  );
};

export default Production;

import ModuleLayout from "@/components/modules/ModuleLayout";
import { Paintbrush, Clock, CheckCircle, Image, Users, FileText, Calendar, MessageSquare, Search, Layout, Layers, AlertTriangle, Zap, Settings, Upload, Download } from "lucide-react";
import artworkersHero from "@/assets/modules/artworkers-hero.jpg";

const Artworkers = () => {
  return (
    <ModuleLayout
      title="Artworkers"
      description="Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order."
      color="emerald"
      heroImage={artworkersHero}
      stats={[
        {
          value: "60%",
          label: "Reduction in artwork revision time",
          icon: <Clock className="h-8 w-8 text-emerald-500" />
        },
        {
          value: "35%",
          label: "Increase in first-proof approval rate",
          icon: <CheckCircle className="h-8 w-8 text-emerald-500" />
        },
        {
          value: "42%",
          label: "Faster proof turnaround times",
          icon: <Zap className="h-8 w-8 text-emerald-500" />
        },
        {
          value: "98.5%",
          label: "On-time artwork delivery",
          icon: <Calendar className="h-8 w-8 text-emerald-500" />
        }
      ]}
      mainSection={{
        title: "Streamline Your Artwork Workflow",
        description: "Our Artworkers module provides the tools you need to manage artwork creation, revisions, and approvals with complete visibility and control."
      }}
      keyFeatures={{
        title: "Comprehensive Artwork Management",
        description: "Everything you need to optimize your artwork production workflow",
        features: [
          {
            title: "Intelligent Task Assignment",
            description: "Automatically route artwork requests to the right team members based on skills, workload, and job requirements.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Visual Proof Creation",
            description: "Generate professional proofs with accurate product mockups, placement guides, and production specifications.",
            icon: <Paintbrush className="h-6 w-6" />
          },
          {
            title: "Streamlined Approval Process",
            description: "Manage the entire approval workflow with automated notifications, tracking, and audit trails for every change.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Revision Management",
            description: "Track all artwork versions with complete history, comparison tools, and clear change documentation.",
            icon: <Layers className="h-6 w-6" />
          },
          {
            title: "Integrated Communication",
            description: "Keep all conversations about artwork in context with threaded comments, notifications, and file sharing.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Production-Ready Exports",
            description: "Generate print-ready files in the right format and resolution for every production method and equipment type.",
            icon: <Download className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Artwork Process Optimization",
        subtitle: "Beyond Task Management",
        description: "Our platform provides advanced tools to improve your entire artwork creation process.",
        items: [
          { text: "Artwork templates and starting points for common job types", icon: <Layout className="h-5 w-5" /> },
          { text: "Direct integration with design software like Adobe Creative Cloud", icon: <Settings className="h-5 w-5" /> },
          { text: "Asset organization with powerful search and filtering capabilities", icon: <Search className="h-5 w-5" /> },
          { text: "Proactive deadline management and escalation procedures", icon: <AlertTriangle className="h-5 w-5" /> },
          { text: "Color management and production specifications verification", icon: <FileText className="h-5 w-5" /> },
          { text: "Automated file preparation for different decoration methods", icon: <Upload className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Artwork Process?",
        description: "Join thousands of businesses that have streamlined their artwork management with our comprehensive solution.",
        primaryButtonText: "Get Started Today",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Logos",
          icon: <Image className="h-8 w-8" />,
          description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking.",
          link: "/modules/logos"
        },
        {
          title: "Product Designer",
          icon: <Paintbrush className="h-8 w-8" />,
          description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements.",
          link: "/modules/product-designer"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default Artworkers;

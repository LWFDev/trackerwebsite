
import React from "react";
import { 
  ShoppingCart, 
  Receipt, 
  Paintbrush, 
  MessagesSquare, 
  Package, 
  Layers, 
  BarChart2, 
  Zap, 
  Image, 
  FileText, 
  ClipboardList, 
  UserCheck 
} from "lucide-react";

// Module categories data
export const moduleCategories = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Order Management",
        description: "Connect teams, close more deals, and simplify your sales process.",
        icon: <ShoppingCart className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/sales-order-management",
        color: "bg-blue-500/20",
        category: "Sales"
      },
      {
        title: "Finance & Accounting",
        description: "Manage financial transactions and accounting processes efficiently.",
        icon: <Receipt className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/finance-accounting",
        color: "bg-indigo-500/20",
        category: "Finance"
      },
      {
        title: "Inventory & Logistics",
        description: "Track inventory and manage logistics operations seamlessly.",
        icon: <Package className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/inventory-logistics",
        color: "bg-cyan-500/20",
        category: "Inventory"
      },
      {
        title: "Production & Manufacturing",
        description: "Oversee production processes, schedules, and resource allocation.",
        icon: <Layers className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/production-manufacturing",
        color: "bg-purple-500/20",
        category: "Production"
      }
    ]
  },
  {
    title: "Client Management",
    modules: [
      {
        title: "Customer Service",
        description: "Manage customer support cases faster across every channel.",
        icon: <MessagesSquare className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-service",
        color: "bg-teal-500/20",
        category: "Support"
      },
      {
        title: "Customer Portal",
        description: "Provide your customers with a self-service portal for support and information.",
        icon: <UserCheck className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-portal",
        color: "bg-teal-500/20",
        category: "Support"
      }
    ]
  },
  {
    title: "Design & Content",
    modules: [
      {
        title: "Product Design",
        description: "Create and manage product designs with powerful customization tools.",
        icon: <Paintbrush className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/product-design",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Logo Hub",
        description: "Centralize and manage all your brand logos in one place.",
        icon: <Image className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/logo-hub",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Document Management",
        description: "Store, organize, and share documents securely across your organization.",
        icon: <FileText className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/document-management",
        color: "bg-emerald-500/20",
        category: "Design"
      }
    ]
  },
  {
    title: "Project & Analytics",
    modules: [
      {
        title: "Project Management",
        description: "Plan, track, and manage projects with ease.",
        icon: <ClipboardList className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/project-management",
        color: "bg-amber-500/20",
        category: "Analytics"
      },
      {
        title: "Analytics & Reporting",
        description: "Get powerful insights from your data, anytime, anywhere.",
        icon: <BarChart2 className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/analytics-reporting",
        color: "bg-amber-500/20",
        category: "Analytics"
      },
      {
        title: "Integration Platform",
        description: "Connect your teams and data with apps built in clicks, not code.",
        icon: <Zap className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/integration-platform",
        color: "bg-rose-500/20",
        category: "Integrations"
      }
    ]
  }
];

// Get all modules in a flat array
export const allModules = moduleCategories.flatMap(category => category.modules);

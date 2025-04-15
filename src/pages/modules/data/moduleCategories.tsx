
import React from "react";
import { 
  ShoppingCart, 
  Package, 
  Layers, 
  Users,
  BarChart2, 
  Image, 
  FileText, 
  ClipboardList, 
  UserCheck,
  Truck,
  Warehouse,
  Box,
  PaintBrush,
  Database,
  TShirt,
  UserCog,
  FileInvoice,
  Building
} from "lucide-react";

// Module categories data
export const moduleCategories = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Orders",
        description: "Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving.",
        icon: <ShoppingCart className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/sales-orders",
        color: "bg-blue-500/20",
        category: "Sales"
      },
      {
        title: "Warehouse",
        description: "Track item locations, transfers, and storage with real-time warehouse visibility and control.",
        icon: <Warehouse className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/warehouse",
        color: "bg-indigo-500/20",
        category: "Inventory"
      },
      {
        title: "Inventory",
        description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
        icon: <Box className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/inventory",
        color: "bg-cyan-500/20",
        category: "Inventory"
      },
      {
        title: "Production",
        description: "Schedule, assign, and track every job from setup through final output with visual production queues.",
        icon: <Layers className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/production",
        color: "bg-purple-500/20",
        category: "Production"
      }
    ]
  },
  {
    title: "Customer Management",
    modules: [
      {
        title: "Customer Database",
        description: "Store all customer details, communication logs, and order history in one centralized, searchable profile.",
        icon: <Database className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/customer-database",
        color: "bg-teal-500/20",
        category: "Support"
      },
      {
        title: "Customer Portal",
        description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
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
        title: "Product Designer",
        description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements.",
        icon: <PaintBrush className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/product-designer",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Logo Management",
        description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking.",
        icon: <Image className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/logo-management",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Base Garment",
        description: "Set up your core product catalog, including styles, sizes, colors, and default pricing.",
        icon: <TShirt className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/base-garment",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Artworkers",
        description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order.",
        icon: <UserCog className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/artworkers",
        color: "bg-emerald-500/20",
        category: "Design"
      }
    ]
  },
  {
    title: "Supplier Management",
    modules: [
      {
        title: "Suppliers",
        description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions.",
        icon: <Building className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/suppliers",
        color: "bg-amber-500/20",
        category: "Suppliers"
      },
      {
        title: "Purchase Orders",
        description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment.",
        icon: <FileInvoice className="h-8 w-8 text-[#D4AF37]" />,
        link: "/modules/purchase-orders",
        color: "bg-amber-500/20",
        category: "Suppliers"
      }
    ]
  }
];

// Get all modules in a flat array
export const allModules = moduleCategories.flatMap(category => category.modules);

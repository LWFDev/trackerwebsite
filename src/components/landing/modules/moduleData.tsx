
import React from "react";
import { 
  Image, 
  FileText, 
  ShoppingCart, 
  Layers, 
  Receipt, 
  Check,
  BarChart2,
  Zap,
  Users,
  FileSearch,
  ClipboardList,
  UserCheck,
  PieChart,
  TrendingUp,
  Package,
  Truck,
  Paintbrush,
  MessagesSquare,
  Building,
  FileSpreadsheet,
  Shirt
} from "lucide-react";
import { ModulesData } from "./types";

// Create module data
const modules: ModulesData = {
  popular: [
    {
      title: "Sales & Orders",
      description: "Manage incoming orders, quotes, and job details in one streamlined dashboard",
      icon: <ShoppingCart className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/sales-orders"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-designer"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logos"
    },
    {
      title: "Customer Portal",
      description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time",
      icon: <UserCheck className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ],
  categories: [
    {
      title: "Business Operations",
      description: "Modules for managing your core business operations",
      icon: <TrendingUp className="text-gold-DEFAULT" />,
      learnMoreLink: "#business-operations"
    },
    {
      title: "Customer Management",
      description: "Tools for managing customer relationships and service",
      icon: <Users className="text-gold-DEFAULT" />,
      learnMoreLink: "#customer-management"
    },
    {
      title: "Production & Design",
      description: "Solutions for product design and manufacturing",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "#production-design"
    }
  ],
  all: [
    {
      title: "Sales & Orders",
      description: "Manage incoming orders, quotes, and job details in one streamlined dashboard",
      icon: <ShoppingCart className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/sales-orders"
    },
    {
      title: "Warehouse",
      description: "Track item locations, transfers, and storage with real-time warehouse visibility and control",
      icon: <Package className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/warehouse"
    },
    {
      title: "Customer Database",
      description: "Store all customer details, communication logs, and order history in one centralized profile",
      icon: <Users className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-database"
    },
    {
      title: "Base Garments",
      description: "Set up your core product catalog, including styles, sizes, colors, and default pricing",
      icon: <Shirt className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/base-garments"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logos"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-designer"
    },
    {
      title: "Inventory",
      description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations",
      icon: <Package className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/inventory"
    },
    {
      title: "Production",
      description: "Schedule, assign, and track every job from setup through final output with visual production queues",
      icon: <Layers className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/production"
    },
    {
      title: "Suppliers",
      description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions",
      icon: <Building className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/suppliers"
    },
    {
      title: "Purchase Orders",
      description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment",
      icon: <FileSpreadsheet className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/purchase-orders"
    },
    {
      title: "Artworkers",
      description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/artworkers"
    },
    {
      title: "Customer Portal",
      description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time",
      icon: <UserCheck className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ]
};

export default modules;

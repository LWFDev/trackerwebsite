
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
  MessagesSquare
} from "lucide-react";
import { ModulesData } from "./types";

// Create module data
const modules: ModulesData = {
  popular: [
    {
      title: "Sales & Orders",
      description: "Manage incoming orders, quotes, and job details in one streamlined dashboard",
      icon: <ShoppingCart className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-design"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logo-hub"
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
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Warehouse",
      description: "Track item locations, transfers, and storage with real-time warehouse visibility and control",
      icon: <Package className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/inventory-logistics"
    },
    {
      title: "Customer Database",
      description: "Store all customer details, communication logs, and order history in one centralized profile",
      icon: <Users className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-service"
    },
    {
      title: "Base Garments",
      description: "Set up your core product catalog, including styles, sizes, colors, and default pricing",
      icon: <Layers className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/production-manufacturing"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logo-hub"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-design"
    },
    {
      title: "Inventory",
      description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations",
      icon: <Package className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/inventory-logistics"
    },
    {
      title: "Production",
      description: "Schedule, assign, and track every job from setup through final output with visual production queues",
      icon: <Layers className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/production-manufacturing"
    },
    {
      title: "Suppliers",
      description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions",
      icon: <Users className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/finance-accounting"
    },
    {
      title: "Purchase Orders",
      description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment",
      icon: <FileText className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/finance-accounting"
    },
    {
      title: "Artworkers",
      description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-design"
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


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
      title: "Sales & Order Management",
      description: "Connect teams, close more deals, and simplify your sales process",
      icon: <ShoppingCart className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Analytics & Reporting",
      description: "Get powerful insights from your data, anytime, anywhere",
      icon: <BarChart2 className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/analytics-reporting"
    },
    {
      title: "Logo Hub",
      description: "Centralize and manage all your brand logos in one place",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logo-hub"
    },
    {
      title: "Customer Portal",
      description: "Provide your customers with a self-service portal for support and information",
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
      title: "Sales & Order Management",
      description: "Connect teams, close more deals, and simplify your sales process",
      icon: <ShoppingCart className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/sales-order-management"
    },
    {
      title: "Finance & Accounting",
      description: "Manage financial transactions and accounting processes efficiently",
      icon: <Receipt className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/finance-accounting"
    },
    {
      title: "Product Design",
      description: "Create and manage product designs with powerful customization tools",
      icon: <Paintbrush className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/product-design"
    },
    {
      title: "Customer Service",
      description: "Manage customer support cases faster across every channel",
      icon: <MessagesSquare className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-service"
    },
    {
      title: "Inventory & Logistics",
      description: "Track inventory and manage logistics operations seamlessly",
      icon: <Package className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/inventory-logistics"
    },
    {
      title: "Production & Manufacturing",
      description: "Oversee production processes, schedules, and resource allocation",
      icon: <Layers className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/production-manufacturing"
    },
    {
      title: "Analytics & Reporting",
      description: "Get powerful insights from your data, anytime, anywhere",
      icon: <BarChart2 className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/analytics-reporting"
    },
    {
      title: "Integration Platform",
      description: "Connect your teams and data with apps built in clicks, not code",
      icon: <Zap className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/integration-platform"
    },
    {
      title: "Logo Hub",
      description: "Centralize and manage all your brand logos in one place",
      icon: <Image className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/logo-hub"
    },
    {
      title: "Document Management",
      description: "Store, organize, and share documents securely across your organization",
      icon: <FileText className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/document-management"
    },
    {
      title: "Project Management",
      description: "Plan, track, and manage projects with ease",
      icon: <ClipboardList className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/project-management"
    },
    {
      title: "Customer Portal",
      description: "Provide your customers with a self-service portal for support and information",
      icon: <UserCheck className="text-gold-DEFAULT" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ]
};

export default modules;

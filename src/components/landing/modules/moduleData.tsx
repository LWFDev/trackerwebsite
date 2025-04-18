
import React from "react";
import { TrendingUp, Users, Paintbrush } from "lucide-react";
import { ModulesData } from "./types";

const modules: ModulesData = {
  popular: [
    {
      title: "Sales & Orders",
      description: "Manage incoming orders, quotes, and job details in one streamlined dashboard",
      icon: <img src="/lovable-uploads/1.webp" alt="Sales & Orders" className="h-8 w-8" />,
      learnMoreLink: "/modules/sales-orders"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <img src="/lovable-uploads/6.webp" alt="Product Designer" className="h-8 w-8" />,
      learnMoreLink: "/modules/product-designer"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <img src="/lovable-uploads/5.webp" alt="Logos" className="h-8 w-8" />,
      learnMoreLink: "/modules/logos"
    },
    {
      title: "Customer Portal",
      description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time",
      icon: <img src="/lovable-uploads/13.webp" alt="Customer Portal" className="h-8 w-8" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ],
  categories: [
    {
      title: "Business Operations",
      description: "Modules for managing your core business operations",
      icon: <TrendingUp className="text-gold-DEFAULT h-8 w-8" />,
      learnMoreLink: "#business-operations"
    },
    {
      title: "Customer Management",
      description: "Tools for managing customer relationships and service",
      icon: <Users className="text-gold-DEFAULT h-8 w-8" />,
      learnMoreLink: "#customer-management"
    },
    {
      title: "Production & Design",
      description: "Solutions for product design and manufacturing",
      icon: <Paintbrush className="text-gold-DEFAULT h-8 w-8" />,
      learnMoreLink: "#production-design"
    }
  ],
  all: [
    {
      title: "Sales & Orders",
      description: "Manage incoming orders, quotes, and job details in one streamlined dashboard",
      icon: <img src="/lovable-uploads/1.webp" alt="Sales & Orders" className="h-8 w-8" />,
      learnMoreLink: "/modules/sales-orders"
    },
    {
      title: "Warehouse",
      description: "Track item locations, transfers, and storage with real-time warehouse visibility and control",
      icon: <img src="/lovable-uploads/2.webp" alt="Warehouse" className="h-8 w-8" />,
      learnMoreLink: "/modules/warehouse"
    },
    {
      title: "Customer Database",
      description: "Store all customer details, communication logs, and order history in one centralized profile",
      icon: <img src="/lovable-uploads/3.webp" alt="Customers" className="h-8 w-8" />,
      learnMoreLink: "/modules/customer-database"
    },
    {
      title: "Base Garments",
      description: "Set up your core product catalog, including styles, sizes, colors, and default pricing",
      icon: <img src="/lovable-uploads/4.webp" alt="Base Garments" className="h-8 w-8" />,
      learnMoreLink: "/modules/base-garments"
    },
    {
      title: "Logos",
      description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking",
      icon: <img src="/lovable-uploads/5.webp" alt="Logos" className="h-8 w-8" />,
      learnMoreLink: "/modules/logos"
    },
    {
      title: "Product Designer",
      description: "Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements",
      icon: <img src="/lovable-uploads/6.webp" alt="Product Designer" className="h-8 w-8" />,
      learnMoreLink: "/modules/product-designer"
    },
    {
      title: "Inventory",
      description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations",
      icon: <img src="/lovable-uploads/8.webp" alt="Inventory" className="h-8 w-8" />,
      learnMoreLink: "/modules/inventory"
    },
    {
      title: "Production",
      description: "Schedule, assign, and track every job from setup through final output with visual production queues",
      icon: <img src="/lovable-uploads/9.webp" alt="Production" className="h-8 w-8" />,
      learnMoreLink: "/modules/production"
    },
    {
      title: "Suppliers",
      description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions",
      icon: <img src="/lovable-uploads/10.webp" alt="Suppliers" className="h-8 w-8" />,
      learnMoreLink: "/modules/suppliers"
    },
    {
      title: "Purchase Orders",
      description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment",
      icon: <img src="/lovable-uploads/11.webp" alt="Purchase Orders" className="h-8 w-8" />,
      learnMoreLink: "/modules/purchase-orders"
    },
    {
      title: "Artworkers",
      description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order",
      icon: <img src="/lovable-uploads/12.webp" alt="Artworkers" className="h-8 w-8" />,
      learnMoreLink: "/modules/artworkers"
    },
    {
      title: "Customer Portal",
      description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time",
      icon: <img src="/lovable-uploads/13.webp" alt="Customer Portal" className="h-8 w-8" />,
      learnMoreLink: "/modules/customer-portal"
    }
  ]
};

export default modules;

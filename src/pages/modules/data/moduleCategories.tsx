
import React from "react";
import { moduleIcons } from "./moduleIcons";
import { ModuleCategory, Module } from "@/types/modules";

export const moduleCategories: ModuleCategory[] = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Orders",
        description: "Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving.",
        icon: { src: moduleIcons.salesOrders, alt: "Sales & Orders" },
        link: "/modules/sales-orders",
        color: "bg-blue-500/20",
        category: "Sales"
      },
      {
        title: "Warehouse",
        description: "Track item locations, transfers, and storage with real-time warehouse visibility and control.",
        icon: { src: moduleIcons.warehouse, alt: "Warehouse" },
        link: "/modules/warehouse",
        color: "bg-indigo-500/20",
        category: "Warehouse"
      },
      {
        title: "Inventory",
        description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
        icon: { src: moduleIcons.inventory, alt: "Inventory" },
        link: "/modules/inventory",
        color: "bg-cyan-500/20",
        category: "Inventory"
      },
      {
        title: "Production",
        description: "Schedule, assign, and track every job from setup through final output with visual production queues.",
        icon: { src: moduleIcons.production, alt: "Production" },
        link: "/modules/production",
        color: "bg-purple-500/20",
        category: "Production"
      }
    ]
  },
  {
    title: "Client Management",
    modules: [
      {
        title: "Customer Database",
        description: "Store all customer details, communication logs, and order history in one centralized, searchable profile.",
        icon: { src: moduleIcons.customerDatabase, alt: "Customers" },
        link: "/modules/customer-database",
        color: "bg-teal-500/20",
        category: "Support"
      },
      {
        title: "Customer Portal",
        description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
        icon: { src: moduleIcons.customerPortal, alt: "Customer Portal" },
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
        icon: { src: moduleIcons.productDesigner, alt: "Product Designer" },
        link: "/modules/product-designer",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Logos",
        description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking.",
        icon: { src: moduleIcons.logos, alt: "Logos" },
        link: "/modules/logos",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Artworkers",
        description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order.",
        icon: { src: moduleIcons.artworkers, alt: "Artworkers" },
        link: "/modules/artworkers",
        color: "bg-emerald-500/20",
        category: "Design"
      }
    ]
  },
  {
    title: "Product & Suppliers",
    modules: [
      {
        title: "Base Garments",
        description: "Set up your core product catalog, including styles, sizes, colors, and default pricing.",
        icon: { src: moduleIcons.baseGarments, alt: "Base Garments" },
        link: "/modules/base-garments",
        color: "bg-gold-opacity-20",
        category: "Products"
      },
      {
        title: "Suppliers",
        description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions.",
        icon: { src: moduleIcons.suppliers, alt: "Suppliers" },
        link: "/modules/suppliers",
        color: "bg-gold-opacity-20",
        category: "Suppliers"
      },
      {
        title: "Purchase Orders",
        description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment.",
        icon: { src: moduleIcons.purchaseOrders, alt: "Purchase Orders" },
        link: "/modules/purchase-orders",
        color: "bg-rose-500/20",
        category: "Purchasing"
      }
    ]
  }
];

export const allModules: Module[] = moduleCategories.flatMap(category => category.modules);

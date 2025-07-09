
import React from "react";

export const moduleCategories = [
  {
    title: "Business Operations",
    modules: [
      {
        title: "Sales & Orders",
        description: "Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving.",
        icon: <img src="/lovable-uploads/e43639fe-8f28-4447-8659-16c1baee9b53.png" alt="Sales & Orders" className="h-8 w-8" />,
        link: "/modules/sales-orders",
        color: "bg-blue-500/20",
        category: "Sales"
      },
      {
        title: "Warehouse",
        description: "Track item locations, transfers, and storage with real-time warehouse visibility and control.",
        icon: <img src="/lovable-uploads/2788046a-56b7-45e9-8c62-0dcdf981aad7.png" alt="Warehouse" className="h-8 w-8" />,
        link: "/modules/warehouse",
        color: "bg-indigo-500/20",
        category: "Warehouse"
      },
      {
        title: "Inventory",
        description: "Monitor stock levels, track item movement, and get automatic low-stock alerts across locations.",
        icon: <img src="/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png" alt="Inventory" className="h-8 w-8" />,
        link: "/modules/inventory",
        color: "bg-cyan-500/20",
        category: "Inventory"
      },
      {
        title: "Production",
        description: "Schedule, assign, and track every job from setup through final output with visual production queues.",
        icon: <img src="/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png" alt="Production" className="h-8 w-8" />,
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
        icon: <img src="/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png" alt="Customers" className="h-8 w-8" />,
        link: "/modules/customer-database",
        color: "bg-teal-500/20",
        category: "Support"
      },
      {
        title: "Customer Portal",
        description: "Give customers a branded login to review orders, approve proofs, and track job progress in real-time.",
        icon: <img src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" alt="Customer Portal" className="h-8 w-8" />,
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
        icon: <img src="/lovable-uploads/165c6ded-645a-41df-ba0c-b54b428c3953.png" alt="Product Designer" className="h-8 w-8" />,
        link: "/modules/product-designer",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Logos",
        description: "Upload, categorize, and manage customer logos and artwork files with built-in version tracking.",
        icon: <img src="/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png" alt="Logos" className="h-8 w-8" />,
        link: "/modules/logos",
        color: "bg-emerald-500/20",
        category: "Design"
      },
      {
        title: "Artworkers",
        description: "Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order.",
        icon: <img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Artworkers" className="h-8 w-8" />,
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
        icon: <img src="/lovable-uploads/9646681d-05d8-4c78-9601-8a8b99451f0e.png" alt="Base Garments" className="h-8 w-8" />,
        link: "/modules/base-garments",
        color: "bg-gold-opacity-20",
        category: "Products"
      },
      {
        title: "Suppliers",
        description: "Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions.",
        icon: <img src="/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png" alt="Suppliers" className="h-8 w-8" />,
        link: "/modules/suppliers",
        color: "bg-gold-opacity-20",
        category: "Suppliers"
      },
      {
        title: "Purchase Orders",
        description: "Create, send, and track POs with direct links to incoming inventory and supplier fulfillment.",
        icon: <img src="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png" alt="Purchase Orders" className="h-8 w-8" />,
        link: "/modules/purchase-orders",
        color: "bg-rose-500/20",
        category: "Purchasing"
      }
    ]
  }
];

export const allModules = moduleCategories.flatMap(category => category.modules);

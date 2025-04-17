
import React from "react";
import ModuleCard from "./ModuleCard";
import SectionTitle from "./SectionTitle";

const ModulesSection = () => {
  return (
    <>
      <SectionTitle
        label="Modules"
        title={
          <>
            Modular Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Every Need</span>
          </>
        }
        description="Tracker offers a comprehensive suite of modules that can be combined to create the perfect solution for your business."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ModuleCard
          icon={<img src="/lovable-uploads/e43639fe-8f28-4447-8659-16c1baee9b53.png" alt="Sales & Orders" className="w-10 h-10" />}
          title="Sales & Orders"
          description="Manage incoming orders, quotes, and job details in one streamlined dashboard."
          link="/modules/sales-orders"
          delay={0.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/2788046a-56b7-45e9-8c62-0dcdf981aad7.png" alt="Warehouse" className="w-10 h-10" />}
          title="Warehouse"
          description="Track item locations, transfers, and storage with real-time warehouse visibility."
          link="/modules/warehouse"
          delay={0.2}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png" alt="Customers" className="w-10 h-10" />}
          title="Customer Database"
          description="Store all customer details, communication logs, and order history."
          link="/modules/customer-database"
          delay={0.3}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/9646681d-05d8-4c78-9601-8a8b99451f0e.png" alt="Base Garments" className="w-10 h-10" />}
          title="Base Garments"
          description="Set up your core product catalog with styles, sizes, and colors."
          link="/modules/base-garments"
          delay={0.4}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png" alt="Logos" className="w-10 h-10" />}
          title="Logos"
          description="Upload, categorize, and manage customer logos and artwork files."
          link="/modules/logos"
          delay={0.5}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/165c6ded-645a-41df-ba0c-b54b428c3953.png" alt="Product Designer" className="w-10 h-10" />}
          title="Product Designer"
          description="Allow users to customize garments visually with drag-and-drop tools."
          link="/modules/product-designer"
          delay={0.6}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png" alt="Inventory" className="w-10 h-10" />}
          title="Inventory"
          description="Monitor stock levels, track item movement, and get low-stock alerts."
          link="/modules/inventory"
          delay={0.7}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png" alt="Production" className="w-10 h-10" />}
          title="Production"
          description="Schedule, assign, and track every job through final output."
          link="/modules/production"
          delay={0.8}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png" alt="Suppliers" className="w-10 h-10" />}
          title="Suppliers"
          description="Maintain supplier contacts and product availability data."
          link="/modules/suppliers"
          delay={0.9}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png" alt="Purchase Orders" className="w-10 h-10" />}
          title="Purchase Orders"
          description="Create and track purchase orders with supplier fulfillment."
          link="/modules/purchase-orders"
          delay={1.0}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Artworkers" className="w-10 h-10" />}
          title="Artworkers"
          description="Assign artwork tasks and manage proof approvals."
          link="/modules/artworkers"
          delay={1.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" alt="Customer Portal" className="w-10 h-10" />}
          title="Customer Portal"
          description="Give customers access to orders, proofs, and tracking."
          link="/modules/customer-portal"
          delay={1.2}
        />
      </div>
    </>
  );
};

export default ModulesSection;

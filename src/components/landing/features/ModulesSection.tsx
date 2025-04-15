
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
          icon={<img src="/lovable-uploads/ff724d99-20cb-4926-8ea8-b88f5f69ef43.png" alt="Sales & Orders" className="w-10 h-10 rounded-lg" />}
          title="Sales & Orders"
          description="Manage incoming orders, quotes, and job details in one streamlined dashboard."
          link="/modules/sales-orders"
          delay={0.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/62625f08-6c74-40d2-ad82-d39c8e88166e.png" alt="Warehouse" className="w-10 h-10 rounded-lg" />}
          title="Warehouse"
          description="Track item locations, transfers, and storage with real-time warehouse visibility."
          link="/modules/warehouse"
          delay={0.2}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/9f87abc4-dc21-425b-9d53-87e075883a7f.png" alt="Product Designer" className="w-10 h-10 rounded-lg" />}
          title="Product Designer"
          description="Allow users to customize garments visually with drag-and-drop tools."
          link="/modules/product-designer"
          delay={0.3}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/afc5ca77-21a0-489c-a1e6-175ab043eefc.png" alt="Customer Database" className="w-10 h-10 rounded-lg" />}
          title="Customer Database"
          description="Store all customer details, communication logs, and order history."
          link="/modules/customer-database"
          delay={0.4}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/21a8e13e-dd14-4d85-a3b0-ddc1394fb620.png" alt="Inventory" className="w-10 h-10 rounded-lg" />}
          title="Inventory"
          description="Monitor stock levels, track item movement, and get low-stock alerts."
          link="/modules/inventory"
          delay={0.5}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/00c91c58-277c-42e8-8541-9d76b49beff5.png" alt="Production" className="w-10 h-10 rounded-lg" />}
          title="Production"
          description="Schedule, assign, and track every job through final output."
          link="/modules/production"
          delay={0.6}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/32d8d791-11ef-418a-9131-8f947c40c8a4.png" alt="Artworkers" className="w-10 h-10 rounded-lg" />}
          title="Artworkers"
          description="Assign artwork tasks, manage approvals, and ensure timely proof delivery."
          link="/modules/artworkers"
          delay={0.7}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/e5ad0901-4dde-40da-a19e-48cea2067633.png" alt="Logos" className="w-10 h-10 rounded-lg" />}
          title="Logos"
          description="Upload, categorize, and manage customer logos and artwork files."
          link="/modules/logos"
          delay={0.8}
        />
      </div>
    </>
  );
};

export default ModulesSection;

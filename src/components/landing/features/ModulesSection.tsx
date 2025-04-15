
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
          description="Manage incoming orders, quotes, and job details in one streamlined dashboard, keeping your sales pipeline moving."
          link="/modules/sales-orders"
          delay={0.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/62625f08-6c74-40d2-ad82-d39c8e88166e.png" alt="Warehouse" className="w-10 h-10 rounded-lg" />}
          title="Warehouse"
          description="Track item locations, transfers, and storage with real-time warehouse visibility and control."
          link="/modules/warehouse"
          delay={0.2}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/9f87abc4-dc21-425b-9d53-87e075883a7f.png" alt="Product Designer" className="w-10 h-10 rounded-lg" />}
          title="Product Designer"
          description="Allow users to customize garments visually with drag-and-drop logos, text, and artwork placements."
          link="/modules/product-designer"
          delay={0.3}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/afc5ca77-21a0-489c-a1e6-175ab043eefc.png" alt="Customer Database" className="w-10 h-10 rounded-lg" />}
          title="Customer Database"
          description="Store all customer details, communication logs, and order history in one centralized, searchable profile."
          link="/modules/customer-database"
          delay={0.4}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/21a8e13e-dd14-4d85-a3b0-ddc1394fb620.png" alt="Inventory" className="w-10 h-10 rounded-lg" />}
          title="Inventory"
          description="Monitor stock levels, track item movement, and get automatic low-stock alerts across locations."
          link="/modules/inventory"
          delay={0.5}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/00c91c58-277c-42e8-8541-9d76b49beff5.png" alt="Production" className="w-10 h-10 rounded-lg" />}
          title="Production"
          description="Schedule, assign, and track every job from setup through final output with visual production queues."
          link="/modules/production"
          delay={0.6}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/32d8d791-11ef-418a-9131-8f947c40c8a4.png" alt="Base Garment" className="w-10 h-10 rounded-lg" />}
          title="Base Garment"
          description="Set up your core product catalog, including styles, sizes, colors, and default pricing."
          link="/modules/base-garment"
          delay={0.7}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/e5ad0901-4dde-40da-a19e-48cea2067633.png" alt="Logo Management" className="w-10 h-10 rounded-lg" />}
          title="Logo Management"
          description="Upload, categorize, and manage customer logos and artwork files with built-in version tracking."
          link="/modules/logo-management"
          delay={0.8}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/43dfb005-d4c4-43ef-846a-545265bad44a.png" alt="Suppliers" className="w-10 h-10 rounded-lg" />}
          title="Suppliers"
          description="Maintain supplier contacts, price lists, and product availability to streamline purchasing decisions."
          link="/modules/suppliers"
          delay={0.9}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/21b9829f-379e-4192-ba9b-f5175847a165.png" alt="Purchase Orders" className="w-10 h-10 rounded-lg" />}
          title="Purchase Orders"
          description="Create, send, and track POs with direct links to incoming inventory and supplier fulfillment."
          link="/modules/purchase-orders"
          delay={1.0}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/21a12b27-efed-4d20-8969-1ce62300e72a.png" alt="Artworkers" className="w-10 h-10 rounded-lg" />}
          title="Artworkers"
          description="Assign artwork tasks, manage approvals, and ensure timely proof delivery for every order."
          link="/modules/artworkers"
          delay={1.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/cac46aad-7090-45f2-b15d-50e424cf84d1.png" alt="Customer Portal" className="w-10 h-10 rounded-lg" />}
          title="Customer Portal"
          description="Give customers a branded login to review orders, approve proofs, and track job progress in real-time."
          link="/modules/customer-portal"
          delay={1.2}
        />
      </div>
    </>
  );
};

export default ModulesSection;

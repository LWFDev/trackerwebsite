
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
          icon={<img src="/lovable-uploads/62625f08-6c74-40d2-ad82-d39c8e88166e.png" alt="Sales & Order Management" className="w-10 h-10 rounded-lg" />}
          title="Sales & Order Management"
          description="Manage quotes, track sales, email orders directly from your dashboard."
          link="/modules/sales-order-management"
          delay={0.1}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/369d3355-34ed-4efa-a369-eadbdacb23d9.png" alt="Customer Service" className="w-10 h-10 rounded-lg" />}
          title="Finance & Accounting"
          description="Manage financial data and reporting for better decision making."
          link="/modules/finance-accounting"
          delay={0.2}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/4f462409-1909-4f6c-b235-dc001e17c78a.png" alt="Product Design" className="w-10 h-10 rounded-lg" />}
          title="Product Design"
          description="Create and manage product designs with collaborative tools."
          link="/modules/product-design"
          delay={0.3}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/afc5ca77-21a0-489c-a1e6-175ab043eefc.png" alt="Customer Service" className="w-10 h-10 rounded-lg" />}
          title="Customer Service"
          description="Manage customer support issues faster, improving the experience."
          link="/modules/customer-service"
          delay={0.4}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/21a8e13e-dd14-4d85-a3b0-ddc1394fb620.png" alt="Inventory" className="w-10 h-10 rounded-lg" />}
          title="Inventory & Logistics"
          description="Track inventory and manage shipping operations seamlessly."
          link="/modules/inventory-logistics"
          delay={0.5}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/00c91c58-277c-42e8-8541-9d76b49beff5.png" alt="Production" className="w-10 h-10 rounded-lg" />}
          title="Production & Manufacturing"
          description="Track production schedules, allocations, and resource utilization."
          link="/modules/production-manufacturing"
          delay={0.6}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/32d8d791-11ef-418a-9131-8f947c40c8a4.png" alt="Analytics" className="w-10 h-10 rounded-lg" />}
          title="Analytics & Reporting"
          description="Get powerful insights from your data, events, and reports."
          link="/modules/analytics-reporting"
          delay={0.7}
        />
        <ModuleCard
          icon={<img src="/lovable-uploads/e5ad0901-4dde-40da-a19e-48cea2067633.png" alt="Logo Hub" className="w-10 h-10 rounded-lg" />}
          title="Logo Hub"
          description="Centralize all your logos and brand assets in one place."
          link="/modules/logo-hub"
          delay={0.8}
        />
      </div>
    </>
  );
};

export default ModulesSection;

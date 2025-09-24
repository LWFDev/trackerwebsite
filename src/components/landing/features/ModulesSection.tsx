
import React from "react";
import ModuleCard from "./ModuleCard";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { scrollToTop } from "@/utils/navigation";

const ModulesSection = () => {
  return (
    <>
      <SectionTitle
        label="Modules"
        title={
          <>
            Modular Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600">Every Need</span>
          </>
        }
        description="Tracker offers a comprehensive suite of modules that can be combined to create the perfect solution for your garment & garment decoration business."
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
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>

      <ScrollReveal delay={0.9} className="mt-12 text-center">
        <Link to="/modules" onClick={scrollToTop}>
          <Button variant="outline" size="lg" className="border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group">
            View all modules
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </ScrollReveal>
    </>
  );
};

export default ModulesSection;

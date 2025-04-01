
import React from "react";
import ModuleCard from "./ModuleCard";

interface ModuleListSectionProps {
  title: string;
  modules: any[];
}

const ModuleListSection = ({ title, modules }: ModuleListSectionProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <ModuleCard key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

export default ModuleListSection;

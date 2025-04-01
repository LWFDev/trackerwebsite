
import React from "react";
import { Module } from "./types";
import ModuleItem from "./ModuleItem";

interface AllModulesTabProps {
  modules: Module[];
}

const AllModulesTab = ({ modules }: AllModulesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {modules.map((module, index) => (
        <ModuleItem
          key={index}
          title={module.title}
          description={module.description}
          icon={module.icon}
          learnMoreLink={module.learnMoreLink}
        />
      ))}
    </div>
  );
};

export default AllModulesTab;


import React from "react";
import { Module } from "./types";
import ModuleItem from "./ModuleItem";
import NewUserCard from "./NewUserCard";

interface PopularModulesTabProps {
  modules: Module[];
}

const PopularModulesTab = ({ modules }: PopularModulesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <NewUserCard />
    </div>
  );
};

export default PopularModulesTab;

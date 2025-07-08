
import React from "react";
import { moduleCategories } from "@/pages/modules/data/moduleCategories";
import ModuleItem from "./ModuleItem";
import NewUserCard from "./NewUserCard";

const CategoriesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-2 space-y-8">
        {moduleCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.modules.map((module, moduleIndex) => (
                <ModuleItem
                  key={moduleIndex}
                  title={module.title}
                  description={module.description}
                  icon={module.icon}
                  learnMoreLink={module.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <NewUserCard />
    </div>
  );
};

export default CategoriesTab;

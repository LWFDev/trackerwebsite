
import React from "react";
import { Module } from "./types";
import ModuleItem from "./ModuleItem";

interface CategoriesTabProps {
  categories: Module[];
}

const CategoriesTab = ({ categories }: CategoriesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <ModuleItem
          key={index}
          title={category.title}
          description={category.description}
          icon={category.icon}
          learnMoreLink={category.learnMoreLink}
        />
      ))}
    </div>
  );
};

export default CategoriesTab;

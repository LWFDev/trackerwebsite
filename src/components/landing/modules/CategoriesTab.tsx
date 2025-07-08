
import React from "react";
import { Module } from "./types";
import ModuleItem from "./ModuleItem";
import NewUserCard from "./NewUserCard";

interface CategoriesTabProps {
  categories: Module[];
}

const CategoriesTab = ({ categories }: CategoriesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewUserCard />
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

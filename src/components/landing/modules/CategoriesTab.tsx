
import React from "react";
import { Link } from "react-router-dom";
import NewUserCard from "./NewUserCard";

const categories = [
  { name: "Sales", color: "bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30" },
  { name: "Finance", color: "bg-green-500/20 border-green-500/30 hover:bg-green-500/30" },
  { name: "Design", color: "bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30" },
  { name: "Support", color: "bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30" },
  { name: "Inventory", color: "bg-cyan-500/20 border-cyan-500/30 hover:bg-cyan-500/30" },
  { name: "Production", color: "bg-pink-500/20 border-pink-500/30 hover:bg-pink-500/30" },
  { name: "Integrations", color: "bg-indigo-500/20 border-indigo-500/30 hover:bg-indigo-500/30" }
];

const CategoriesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/modules"
              className={`${category.color} rounded-lg border p-6 text-center transition-colors duration-200`}
            >
              <span className="text-white font-medium text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <NewUserCard />
    </div>
  );
};

export default CategoriesTab;

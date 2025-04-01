
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import CategorySelector from "./components/CategorySelector";
import ModuleListSection from "./components/ModuleListSection";
import CtaSection from "./components/CtaSection";
import { allModules } from "./data/moduleCategories";

const ModuleIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredModules, setFilteredModules] = useState(allModules);
  
  // Effect to filter modules when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredModules(allModules);
    } else {
      setFilteredModules(
        allModules.filter(module => module.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <CategorySelector 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ModuleListSection 
        title={selectedCategory === "All" ? "All Modules" : `${selectedCategory} Modules`}
        modules={filteredModules}
      />
      <CtaSection />
    </div>
  );
};

export default ModuleIndex;

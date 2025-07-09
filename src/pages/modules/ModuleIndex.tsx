
import { useState, useEffect } from "react";
import { preloadCriticalImages } from "./data/moduleIcons";
import { useModuleData } from "@/hooks/useModuleData";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroSection from "./components/HeroSection";
import CategorySelector from "./components/CategorySelector";
import ModuleListSection from "./components/ModuleListSection";
import CtaSection from "./components/CtaSection";

const ModuleIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { modules, isLoading, filterByCategory } = useModuleData();
  const prefersReducedMotion = useReducedMotion();
  
  const filteredModules = filterByCategory(selectedCategory);

  // Preload critical images on mount
  useEffect(() => {
    preloadCriticalImages();
  }, []);

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
        isLoading={isLoading}
        prefersReducedMotion={prefersReducedMotion}
      />
      <CtaSection />
    </div>
  );
};

export default ModuleIndex;

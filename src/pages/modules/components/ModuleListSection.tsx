
import React, { Suspense } from "react";
import ModuleCard from "./ModuleCard";
import { ModuleCardSkeleton } from "@/components/common/LoadingSkeleton";
import { VirtualScrollList } from "@/components/ui/VirtualScrollList";
import { Module } from "@/types/modules";

interface ModuleListSectionProps {
  title: string;
  modules: Module[];
  isLoading?: boolean;
  prefersReducedMotion?: boolean;
}

const ModuleListSection = ({ 
  title, 
  modules, 
  isLoading = false,
  prefersReducedMotion = false 
}: ModuleListSectionProps) => {
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ModuleCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Use virtual scrolling for large lists
  if (modules.length > 20) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {title}
        </h2>
        
        <VirtualScrollList
          items={modules}
          itemHeight={300}
          containerHeight={600}
          renderItem={(module, index) => (
            <div className="p-4">
              <ModuleCard key={index} module={module} prefersReducedMotion={prefersReducedMotion} />
            </div>
          )}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense fallback={
          <>
            {Array.from({ length: modules.length }).map((_, i) => (
              <ModuleCardSkeleton key={i} />
            ))}
          </>
        }>
          {modules.map((module, index) => (
            <ModuleCard 
              key={index} 
              module={module} 
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ModuleListSection;

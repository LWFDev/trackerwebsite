
import React, { Suspense } from "react";
import ModuleCard from "./ModuleCard";
import { ModuleCardSkeleton } from "@/components/common/LoadingSkeleton";
import { Module } from "@/types/modules";

interface ModuleListSectionProps {
  title: string;
  modules: Module[];
}

const ModuleListSection = ({ title, modules }: ModuleListSectionProps) => {
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
            <ModuleCard key={index} module={module} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ModuleListSection;

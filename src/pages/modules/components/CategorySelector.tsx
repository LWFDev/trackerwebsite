
import React from "react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) => {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm py-6 sticky top-16 z-10 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <ToggleGroup 
          type="single" 
          defaultValue="All" 
          value={selectedCategory}
          onValueChange={(value) => {
            if (value) setSelectedCategory(value);
          }}
          className="flex flex-wrap justify-center gap-2"
        >
          <ToggleGroupItem 
            value="All" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "All" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            All
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Sales" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Sales" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Sales
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Finance" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Finance" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Finance
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Design" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Design" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Design
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Support" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Support" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Support
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Inventory" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Inventory" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Inventory
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Production" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Production" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Production
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Analytics" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Analytics" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Analytics
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="Integrations" 
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              selectedCategory === "Integrations" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            Integrations
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default CategorySelector;


import React from "react";
import { cn } from "@/lib/utils";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { DocsCategory } from "@/data/docsData";

interface DocsSidebarProps {
  categories: DocsCategory[];
  selectedCategory: string;
  selectedDoc: string;
  onCategoryChange: (categoryId: string) => void;
  onDocChange: (docId: string) => void;
}

const DocsSidebar = ({
  categories,
  selectedCategory,
  selectedDoc,
  onCategoryChange,
  onDocChange
}: DocsSidebarProps) => {
  return (
    <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-4 sticky top-24">
      <h3 className="text-lg font-semibold mb-4 text-white/90">Documentation</h3>
      
      <Accordion 
        type="multiple" 
        defaultValue={categories.map(cat => cat.id)}
        className="space-y-1"
      >
        {categories.map((category) => (
          <AccordionItem 
            key={category.id} 
            value={category.id}
            className="border-b border-zinc-700/50 last:border-b-0"
          >
            <AccordionTrigger 
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "text-sm font-medium hover:text-gold py-2",
                selectedCategory === category.id ? "text-gold" : "text-zinc-300"
              )}
            >
              {category.name}
            </AccordionTrigger>
            <AccordionContent className="pl-2">
              <ul className="space-y-1 py-1">
                {category.docs.map((doc) => (
                  <li key={doc.id}>
                    <button
                      onClick={() => {
                        onCategoryChange(category.id);
                        onDocChange(doc.id);
                      }}
                      className={cn(
                        "w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors",
                        selectedDoc === doc.id && selectedCategory === category.id
                          ? "bg-gold-opacity-20 text-gold-light font-medium"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50"
                      )}
                    >
                      {doc.title}
                    </button>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DocsSidebar;

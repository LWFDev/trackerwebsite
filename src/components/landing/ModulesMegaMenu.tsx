
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import modules from "./modules/moduleData";
import PopularModulesTab from "./modules/PopularModulesTab";
import CategoriesTab from "./modules/CategoriesTab";

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="fixed top-[60px] left-0 w-full bg-zinc-900 shadow-lg z-50 border-t border-zinc-800">
      <div className="container mx-auto p-6">
        <Tabs defaultValue="popular" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <TabsTrigger 
                value="popular"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-gold transition-all duration-300"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger 
                value="categories"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-gold transition-all duration-300"
              >
                Categories
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular" className="mt-0">
            <PopularModulesTab modules={modules.popular} />
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <CategoriesTab />
          </TabsContent>


        </Tabs>
      </div>
    </div>
  );
};

export default ModulesMegaMenu;

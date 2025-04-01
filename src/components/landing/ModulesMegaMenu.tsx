
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import modules from "./modules/moduleData";
import PopularModulesTab from "./modules/PopularModulesTab";
import CategoriesTab from "./modules/CategoriesTab";
import AllModulesTab from "./modules/AllModulesTab";

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="fixed top-[60px] left-0 w-full bg-zinc-900 shadow-lg z-50 border-t border-zinc-800">
      <div className="container mx-auto p-6">
        <Tabs defaultValue="popular" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-zinc-800">
              <TabsTrigger value="popular">
                Popular
              </TabsTrigger>
              <TabsTrigger value="categories">
                Categories
              </TabsTrigger>
              <TabsTrigger value="all">
                All Modules
              </TabsTrigger>
            </TabsList>
            <Link to="/modules" className="text-gold-DEFAULT text-sm hover:underline">
              View all modules
            </Link>
          </div>

          <TabsContent value="popular" className="mt-0">
            <PopularModulesTab modules={modules.popular} />
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <CategoriesTab categories={modules.categories} />
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <AllModulesTab modules={modules.all} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ModulesMegaMenu;

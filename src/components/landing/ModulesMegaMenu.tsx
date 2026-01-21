import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import modules from "./modules/moduleData";
import PopularModulesTab from "./modules/PopularModulesTab";
import CategoriesTab from "./modules/CategoriesTab";
import { useBanner } from "@/components/layout/Layout";

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const { bannerVisible } = useBanner();
  
  // Calculate top position based on banner visibility
  const topPosition = bannerVisible ? "top-[96px]" : "top-[52px]";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10, zIndex: 40 }}
      animate={{ opacity: 1, y: 0, zIndex: 60 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.25,
        ease: "easeOut",
        zIndex: { delay: 0.15 }
      }}
      className={`fixed ${topPosition} left-0 w-full bg-zinc-900/98 backdrop-blur-md shadow-2xl border-t border-zinc-800`}
    >
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
    </motion.div>
  );
};

export default ModulesMegaMenu;

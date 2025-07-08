
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import modules from "./modules/moduleData";
import PopularModulesTab from "./modules/PopularModulesTab";
import CategoriesTab from "./modules/CategoriesTab";
import AllModulesTab from "./modules/AllModulesTab";

const ModulesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const navigate = useNavigate();
  
  const handleAllModulesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Use setTimeout to allow the scroll to start before navigation
    setTimeout(() => {
      navigate("/modules");
    }, 100);
  };

  return (
    <div className="fixed top-[60px] left-0 w-full bg-zinc-900 shadow-lg z-50 border-t border-zinc-800">
      <div className="container mx-auto p-6">
        <Tabs defaultValue="popular" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <TabsTrigger 
                value="popular"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-[#D4AF37] transition-all duration-300"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger 
                value="categories"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-[#D4AF37] transition-all duration-300"
              >
                Categories
              </TabsTrigger>
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-[#D4AF37] transition-all duration-300"
              >
                All Modules
              </TabsTrigger>
            </TabsList>
            <Link 
              to="/modules" 
              onClick={handleAllModulesClick}
              className="text-gold-DEFAULT text-sm hover:underline flex items-center group"
            >
              View all modules
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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

          {/* Green button - appears on all tabs */}
          <div className="mt-6 flex justify-start">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ModulesMegaMenu;

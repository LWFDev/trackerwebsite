import React from "react";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";
const NewUserCard = () => {
  return <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col h-full">
      <h3 className="font-medium text-white mb-3">What are modules in Tracker?</h3>
      <p className="text-zinc-400 text-sm mb-6">Modules are the building blocks of Tracker - each one designed to serve a specific function in your business. </p>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-3 text-gold flex-shrink-0" />
          Turn modules on or off based on your workflow
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-3 text-gold flex-shrink-0" />
          Customized to fit your exact business operations 
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-3 text-gold flex-shrink-0" />
           Minimize clutter - just the tools that matter to you
        </li>
      </ul>
      <div className="mt-auto space-y-4">
        <Link to="/modules" onClick={scrollToTop} className="block">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center group">
            Browse all modules
            <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link to="/modules" onClick={scrollToTop} className="block text-center text-zinc-400 hover:text-white text-sm flex items-center justify-center group transition-colors">
          Browse all categories
          <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>;
};
export default NewUserCard;
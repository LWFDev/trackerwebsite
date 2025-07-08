import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const NewUserCard = () => {
  return <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col h-full">
      <h3 className="font-medium text-white mb-2">What are modules in Tracker?</h3>
      <p className="text-zinc-400 text-sm mb-4">Modules are the building blocks of Tracker - each one designed to serve a specific function in your business. </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
          Turn modules on or off based on your workflow
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
          Customized to fit your exact business operations 
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
           Minimize clutter - just the tools that matter to you
        </li>
      </ul>
      <Link to="/modules" className="block mt-auto">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Browse all modules</Button>
      </Link>
    </div>;
};
export default NewUserCard;
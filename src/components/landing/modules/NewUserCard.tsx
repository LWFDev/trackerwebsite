
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewUserCard = () => {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
      <h3 className="font-medium text-white mb-2">New to Tracker?</h3>
      <p className="text-zinc-400 text-sm mb-4">
        Discover how our integrated modules can streamline your business operations.
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
          Explore all modules
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
          See customer stories
        </li>
        <li className="flex items-center text-sm text-zinc-300">
          <Check size={16} className="mr-2 text-gold-DEFAULT" />
          View pricing options
        </li>
      </ul>
      <Link to="/modules" className="block mt-3">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Browse all modules</Button>
      </Link>
    </div>
  );
};

export default NewUserCard;

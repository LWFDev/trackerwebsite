
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ModuleItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

const ModuleItem = ({ title, description, icon, learnMoreLink }: ModuleItemProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4 bg-zinc-800 p-3 rounded-lg h-fit">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm mb-2">{description}</p>
        <Link to={learnMoreLink} className="text-gold-DEFAULT text-sm hover:underline">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ModuleItem;

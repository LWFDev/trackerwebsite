
import React from "react";
import { Badge } from "@/components/ui/badge";

const StoryHero = () => {
  return (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-emerald-700 border-emerald-200 bg-emerald-50 text-sm font-medium">
        Our Foundation Story
      </Badge>
      <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
        <span className="bg-gradient-to-r from-slate-800 via-emerald-600 to-slate-700 bg-clip-text text-transparent">
          The Story Continued
        </span>
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-slate-500 mx-auto mb-8 rounded-full"></div>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Built on decades of hands-on experience and an unwavering commitment to transforming how businesses operate.
      </p>
    </div>
  );
};

export default StoryHero;

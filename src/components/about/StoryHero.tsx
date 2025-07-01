
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const StoryHero = () => {
  return (
    <div className="text-center mb-24">
      <Badge variant="outline" className="mb-8 px-8 py-4 text-emerald-700 border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-50 text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300">
        <Sparkles className="h-4 w-4 mr-2 text-emerald-600" />
        Our Foundation Story
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
        <span className="bg-gradient-to-r from-slate-800 via-[#D4AF37] via-emerald-600 via-green-500 to-slate-700 bg-clip-text text-transparent">
          The Story Continued
        </span>
      </h1>
      <div className="flex justify-center items-center gap-2 mb-10">
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-green-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gradient-to-br from-[#D4AF37] via-emerald-500 to-slate-400 rounded-full"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-[#D4AF37] to-slate-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
        Built on decades of hands-on experience and an unwavering commitment to 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-emerald-600 font-semibold"> transforming</span> how businesses operate.
      </p>
    </div>
  );
};

export default StoryHero;

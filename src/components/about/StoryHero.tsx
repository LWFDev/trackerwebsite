
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const StoryHero = () => {
  return (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-8 px-6 py-3 text-emerald-700 border-emerald-200 bg-emerald-50 font-medium">
        <Sparkles className="h-4 w-4 mr-2 text-emerald-600" />
        Our Foundation Story
      </Badge>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-900">
        The Story Continued
      </h1>
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="w-12 h-0.5 bg-emerald-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gold rounded-full"></div>
        <div className="w-12 h-0.5 bg-gold rounded-full"></div>
      </div>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Built on decades of hands-on experience and an unwavering commitment to 
        <span className="text-emerald-600 font-semibold"> transforming</span> how businesses operate.
      </p>
    </div>
  );
};

export default StoryHero;

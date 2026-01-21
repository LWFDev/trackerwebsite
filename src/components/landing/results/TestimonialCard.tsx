import React from "react";
import { Star, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, role, delay = 0 }: TestimonialCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-emerald-800/70 dark:bg-emerald-900/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-600/50 hover:border-emerald-400/60 transition-all duration-300 h-full flex flex-col">
        {/* 5 Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-white/90 italic mb-6 flex-grow text-sm leading-relaxed">"{quote}"</p>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700/50 flex items-center justify-center">
            <User className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <p className="font-medium text-white">{author}</p>
            <p className="text-sm text-emerald-300/80">{role}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TestimonialCard;

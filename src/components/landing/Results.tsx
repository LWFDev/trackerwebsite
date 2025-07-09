
import React from "react";
import { Button } from "@/components/ui/button";
import { ChartBar, ChartLine, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ResultCard from "./results/ResultCard";
import ResultMetric from "./results/ResultMetric";
import StatsGrid from "./results/StatsGrid";
import ResultsHeader from "./results/ResultsHeader";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { scrollToTop } from "@/utils/navigation";

const Results = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900/95 via-green-800/90 to-emerald-950/95 dark:from-emerald-900/80 dark:via-green-800/75 dark:to-emerald-950/80 light:from-emerald-900/95 light:via-green-800/90 light:to-emerald-950/95 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced background elements with green theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[150px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-green-400/5 blur-[100px] bottom-0 right-0"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-emerald-400/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-green-500/15 rounded-lg rotate-45 opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ResultsHeader />

        {/* Enhanced content area with green accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ResultCard 
            company="ABC Apparel"
            quote="Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
            person="Woolcool"
            role="CEO, ABC Apparel"
            delay={0}
            videoUrl="https://player.vimeo.com/video/1030900669?h=fd3735c8a0"
          />
          
          <ResultCard 
            company="XYZ Embroidery"
            quote="The product designer module has cut our design approval time by 70%. Our clients love being able to see their designs instantly."
            person="RS Farmah"
            role="Production Manager, XYZ Embroidery"
            delay={100}
            videoUrl="https://player.vimeo.com/video/374282379?h=47c3b154f0"
            thumbnailUrl="/lovable-uploads/a7a106f9-9817-4302-a992-e1b4320c19cd.png"
          />

          <div className="bg-emerald-800/70 dark:bg-emerald-900/60 light:bg-emerald-800/70 backdrop-blur-sm rounded-xl p-8 border border-emerald-600/50 dark:border-emerald-700/50 light:border-emerald-600/50 transform transition-all duration-300 hover:border-emerald-400/60 flex flex-col">
            <ResultMetric 
              icon={<TrendingUp size={24} />} 
              percentage="65%" 
              text="reduction in design time" 
              delay={100} 
            />
            <ResultMetric 
              icon={<Users size={24} />} 
              percentage="3x" 
              text="faster client approvals" 
              delay={200} 
            />
            <ResultMetric 
              icon={<ChartLine size={24} />} 
              percentage="45%" 
              text="increase in production capacity" 
              delay={300} 
            />
          </div>
        </div>
        
        {/* Stats grid */}
        <StatsGrid />

        <div className="text-center">
          <Link to="/case-studies">
            <Button 
              className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
              onClick={scrollToTop}
            >
              Read More Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;

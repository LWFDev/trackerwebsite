
import React from "react";
import { Button } from "@/components/ui/button";
import { ChartBar, ChartLine, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ResultCard from "./results/ResultCard";
import ResultMetric from "./results/ResultMetric";
import StatsGrid from "./results/StatsGrid";
import RoiCalculator from "./results/RoiCalculator";
import ResultsHeader from "./results/ResultsHeader";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Results = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ResultsHeader />

        {/* Redesigned content area with more visual elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ResultCard 
            company="ABC Apparel"
            quote="Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
            person="Jane Smith"
            role="CEO, ABC Apparel"
            delay={0}
          />
          
          <ResultCard 
            company="XYZ Embroidery"
            quote="The product designer module has cut our design approval time by 70%. Our clients love being able to see their designs instantly."
            person="Michael Johnson"
            role="Production Manager, XYZ Embroidery"
            delay={100}
          />

          <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 transform transition-all duration-300 hover:border-[#D4AF37]/40 flex flex-col">
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
        
        {/* ROI Calculator section */}
        <RoiCalculator />

        <div className="text-center">
          <Link to="/case-studies">
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20">
              Read More Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;

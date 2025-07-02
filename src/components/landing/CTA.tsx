
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocalization } from "@/contexts/LocalizationContext";

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { t } = useLocalization();
  
  return (
    <section className="relative py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/30 via-transparent to-slate-50/20 dark:from-zinc-800/20 dark:via-transparent dark:to-zinc-800/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center px-4 py-2 bg-slate-100/80 dark:bg-zinc-800/80 rounded-full border border-slate-200/60 dark:border-zinc-700/60 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {t("Get Started Today")}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              {t("Ready to transform your workflow?")}
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t("Start your free 14-day trial today. No credit card required.")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/get-started" className="inline-block">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0 font-medium"
                >
                  <span className="flex items-center">
                    {t("Get Started")} 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                {t("Schedule Demo")}
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">
              {t("Join thousands of garment decoration businesses using Tracker")}
            </p>
          </div>
        </ScrollReveal>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <ScrollReveal delay={200} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{t("14 Day Guarantee")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={300} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{t("Premium Support")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{t("99.9% Uptime")}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

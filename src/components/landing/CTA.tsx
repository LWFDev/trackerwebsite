
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
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-gold-light/10 dark:from-zinc-900 dark:via-green-900/10 dark:to-gold-dark/10 relative overflow-hidden">
      {/* Subtle background elements with brand colors */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-light/20 to-green-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-green-100/30 to-gold-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge with brand colors */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-light/10 to-green-100/20 rounded-full border border-gold-light/30 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-gold-DEFAULT to-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gold-dark dark:text-gold-light">
                {t("Get Started Today")}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {t("Ready to transform your workflow?")}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t("Start your free 14-day trial today. No credit card required.")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/get-started" className="inline-block">
                <Button 
                  size="lg" 
                  className="group px-8 py-4 text-lg bg-gradient-to-r from-gold-DEFAULT to-gold-light hover:from-gold-light hover:to-gold-DEFAULT text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    {t("Get Started")} 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300"
              >
                {t("Schedule Demo")}
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
              {t("Join thousands of garment decoration businesses using Tracker")}
            </p>
          </div>
        </ScrollReveal>
        
        {/* Trust indicators with brand colors */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <ScrollReveal delay={200} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-gold-light/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("14 Day Guarantee")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={300} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-gold-light/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-light"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("Premium Support")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-gold-light/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-gold-DEFAULT"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("99.9% Uptime")}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

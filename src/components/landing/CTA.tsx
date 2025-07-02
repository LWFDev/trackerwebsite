
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
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-50/30 dark:bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-50/40 dark:bg-slate-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/50 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {t("Get Started Today")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {t("Ready to transform your workflow?")}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              {t("Start your free 14-day trial today. No credit card required.")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/get-started" className="inline-block">
                <Button size="lg" className="group px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <span className="flex items-center">
                    {t("Get Started")} 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                {t("Schedule Demo")}
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("Join thousands of garment decoration businesses using Tracker")}
            </p>
          </div>
        </ScrollReveal>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <ScrollReveal delay={200} direction="up" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("14 Day Guarantee")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={300} direction="up" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("Premium Support")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("99.9% Uptime")}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

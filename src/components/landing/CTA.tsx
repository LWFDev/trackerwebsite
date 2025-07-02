
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
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-zinc-900 relative overflow-hidden">
      {/* Clean, minimal background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/3 via-emerald-500/2 to-blue-600/3 blur-[100px] opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" distance="40px" duration={900}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-200 dark:border-emerald-800 mb-6">
              <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium flex items-center justify-center">
                <span className="bg-emerald-500 w-2 h-2 rounded-full mr-2"></span>
                {t("Get Started Today")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("Ready to ")} 
              <span className="text-emerald-600 dark:text-emerald-400">
                {t("transform your workflow?")}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("Start your free 14-day trial today. No credit card required.")}
            </p>
            
            <Link to="/get-started" className="inline-block">
              <Button size="lg" className="group px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center">
                  {t("Get Started")} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              {t("Join thousands of ")} 
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {t("garment decoration")}
              </span> 
              {t(" businesses using Tracker")}
            </p>
          </div>
        </ScrollReveal>
        
        {/* Clean feature badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <ScrollReveal delay={300} direction="up" className="bg-white dark:bg-zinc-800 px-6 py-3 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("14 Day Guarantee")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="bg-white dark:bg-zinc-800 px-6 py-3 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("Premium Support")}</span>
          </ScrollRevear>
          
          <ScrollReveal delay={500} direction="up" className="bg-white dark:bg-zinc-800 px-6 py-3 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{t("99.9% Uptime")}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

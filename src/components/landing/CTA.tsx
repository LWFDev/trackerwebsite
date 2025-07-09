
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

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
              {t("Ready to transform your business?")}
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t("Discover how modern business management tools can enhance your garment decoration operations and help your business grow.")}
            </p>
            
            <div className="flex justify-center items-center mb-16">
              <Link to="/get-started" className="inline-block">
                <Button 
                  size="lg" 
                  className="group bg-gold-gradient hover:bg-gold-dark-gradient text-gold-foreground px-12 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0 font-medium text-xl"
                >
                  <span className="flex items-center">
                    {t("Get Started")} 
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">
              {t("Trusted by garment decoration businesses worldwide.")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;

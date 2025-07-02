
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
    <section className="py-12 md:py-20 bg-gray-800 dark:bg-zinc-900 light:bg-white text-white dark:text-white light:text-gray-900 relative overflow-hidden">
      {/* Enhanced background elements with green accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Multi-colored gradient blob with green integration */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-emerald-500/8 to-[#F2D675]/10 blur-[150px] opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Enhanced grid pattern with subtle green tint */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] bg-blend-overlay" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        {/* Enhanced floating elements with green accents */}
        <div className={`absolute top-20 left-[10%] w-16 h-16 rounded-full border border-emerald-400/20 opacity-40 ${isMobile ? 'hidden' : 'block'}`}></div>
        <div className={`absolute bottom-20 right-[15%] w-24 h-24 rounded-md border border-[#D4AF37]/15 bg-emerald-500/5 opacity-30 rotate-45 ${isMobile ? 'hidden' : 'block'}`}></div>
        
        {/* Enhanced animated symbols with green variations */}
        <div className="absolute top-[35%] right-[10%] opacity-25">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-400/40">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        
        {/* Additional green accent elements */}
        <div className={`absolute top-[60%] left-[5%] w-12 h-12 rounded-lg border border-emerald-300/15 opacity-30 rotate-12 ${isMobile ? 'hidden' : 'block'}`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" distance="40px" duration={900}>
          <div className="max-w-3xl mx-auto relative">
            <div ref={containerRef} className="relative p-6 sm:p-10 rounded-2xl bg-gray-800/70 dark:bg-zinc-900/70 light:bg-white/90 border border-gray-700 dark:border-zinc-800 light:border-gray-200 hover:border-[#D4AF37]/30 hover:shadow-emerald-500/10 transition-all duration-500 shadow-xl overflow-hidden">
              {/* Enhanced gradient border with green integration */}
              <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#D4AF37]/30 to-emerald-400/15"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black/30 dark:bg-black/30 light:bg-gray-100 rounded-full border border-gray-600 dark:border-zinc-700 light:border-gray-300 mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                    <span className="bg-gradient-to-r from-[#D4AF37] to-emerald-400 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2"></span>
                    {t("Get Started Today")}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white dark:text-white light:text-gray-900">
                  {t("Ready to ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-emerald-400 to-[#F2D675] relative">
                    {t("transform your workflow?")}
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-400/40" viewBox="0 0 400 12" preserveAspectRatio="none">
                      <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </h2>
                
                <p className="text-base sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 sm:mb-8">
                  {t("Start your free 14-day trial today. No credit card required.")}
                </p>
                
                <Link to="/get-started" className="block w-full sm:inline-block sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto group px-6 sm:px-8 shadow-xl bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-[#F2D675] hover:from-emerald-400 hover:via-[#D4AF37] hover:to-emerald-500 text-black transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      {t("Get Started")} <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
                
                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-500">
                  {t("Join ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-emerald-400">{t("garment decoration")}</span> {t("businesses using Tracker")}
                </p>
                
                {/* Enhanced corner decorations with green accents */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden opacity-30">
                  <div className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-r-2 border-emerald-400/25 rounded-tr-3xl"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden opacity-30">
                  <div className="absolute -bottom-10 -left-10 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-l-2 border-[#D4AF37]/25 rounded-bl-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Enhanced floating statistics badges with green integration */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-8 sm:mt-12">
          <ScrollReveal delay={300} direction="up" className="bg-gray-800/80 dark:bg-zinc-900/80 light:bg-white/90 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-200 flex items-center gap-2 shadow-lg hover:border-emerald-400/30 hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-emerald-400"></div>
            <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs sm:text-sm">{t("14 Day Guarantee")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="up" className="bg-gray-800/80 dark:bg-zinc-900/80 light:bg-white/90 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-200 flex items-center gap-2 shadow-lg hover:border-[#D4AF37]/30 hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-emerald-400/60"></div>
            <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs sm:text-sm">{t("Premium Support")}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={500} direction="up" className="bg-gray-800/80 dark:bg-zinc-900/80 light:bg-white/90 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-200 flex items-center gap-2 shadow-lg hover:border-emerald-400/30 hover:shadow-[#D4AF37]/10 transition-all duration-300">
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-emerald-400 to-[#D4AF37]"></div>
            <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs sm:text-sm">{t("99.9% Uptime")}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocalization } from "@/contexts/LocalizationContext";

export const HeroContent = () => {
  const { t } = useLocalization();

  return (
    <motion.div 
      className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#D4AF37]/15 via-emerald-100/80 to-[#F2D675]/20 dark:from-[#D4AF37]/20 dark:via-zinc-900/90 dark:to-[#D4AF37]/15 backdrop-blur-md rounded-full border-2 border-[#D4AF37]/40 mb-6 shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-500 group">
        <div className="text-sm text-[#D4AF37] dark:text-[#F2D675] uppercase font-semibold tracking-wider flex items-center">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mr-3 animate-pulse shadow-lg shadow-[#D4AF37]/60"></span>
          {t("AUTOMATE. ORGANIZE. SIMPLIFY.")}
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#F2D675]">✨</span>
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        {t("Digitize production, ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-emerald-500 relative bg-[length:200%_100%] animate-shimmer">
          {t("enable profit.")}
          <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#D4AF37]/50" viewBox="0 0 400 12" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#F2D675" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M0,6 Q100,2 200,6 T400,6" stroke="url(#heroGradient)" strokeWidth="3" fill="none" />
          </svg>
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 light:text-gray-600 mb-8 max-w-lg animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
        {t("The end-to-end platform that ")} <span className="text-[#D4AF37] dark:text-[#F2D675] font-semibold">{t("automates order handling")}</span>, <span className="text-[#D4AF37] dark:text-[#F2D675] font-semibold">{t("manages inventory")}</span>, {t("and ")} <span className="text-[#D4AF37] dark:text-[#F2D675] font-semibold">{t("optimizes production instantly")}</span> {t("- simpler, clearer and more effectively.")}.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
        <Link to="/get-started" className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-emerald-500 hover:from-[#F2D675] hover:via-[#D4AF37] hover:to-emerald-400 text-black px-6 shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border border-[#D4AF37]/30">
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 flex items-center font-semibold">
              {t("Get Started")} <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full sm:w-auto group border-2 border-[#D4AF37] text-[#D4AF37] dark:text-[#F2D675] hover:bg-[#D4AF37]/10 hover:border-[#F2D675] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/5 to-[#F2D675]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 font-semibold">{t("Contact Sales")}</span>
          </Button>
        </Link>
      </div>
      
      <StatsGrid />
    </motion.div>
  );
};

const StatsGrid = () => {
  const isMobile = useIsMobile();
  const { t } = useLocalization();
  
  return (
    <div className={`mt-12 grid grid-cols-2 gap-4 sm:gap-8 animate-fade-in ${isMobile ? 'mx-auto max-w-md' : ''}`} style={{
      animationDelay: '0.4s'
    }}>
      <StatCard 
        number="1,000,000+" 
        label={t("Logos Managed")} 
      />
      <StatCard 
        number="2,000+" 
        label={t("Workflows Optimized")} 
      />
    </div>
  );
};

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 via-emerald-500/20 to-[#F2D675]/25 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="bg-gradient-to-br from-gray-50/90 via-[#D4AF37]/5 to-emerald-50/60 dark:from-zinc-900/70 dark:via-[#D4AF37]/10 dark:to-zinc-800/80 backdrop-blur-sm p-4 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#F2D675]/50 transition-all duration-300 relative z-10 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30">
        <div className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-emerald-500 group-hover:from-emerald-500 group-hover:via-[#D4AF37] group-hover:to-[#F2D675] transition-all duration-300">{number}</div>
        <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

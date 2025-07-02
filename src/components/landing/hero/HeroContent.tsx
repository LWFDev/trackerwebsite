
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
      <div className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-zinc-900/80 light:bg-gray-100 backdrop-blur-md rounded-full border border-gray-300 dark:border-zinc-800 light:border-gray-300 mb-6 shadow-lg shadow-black/20 hover:shadow-emerald-500/10 transition-all duration-500">
        <div className="text-sm text-emerald-600 dark:text-emerald-400 uppercase font-medium tracking-wider flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          {t("AUTOMATE. ORGANIZE. SIMPLIFY.")}
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        {t("Digitize production, ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 relative">
          {t("enable profit.")}
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-500/30" viewBox="0 0 400 12" preserveAspectRatio="none">
            <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 light:text-gray-600 mb-8 max-w-lg animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
        {t("The end-to-end platform that ")} <span className="text-emerald-600 dark:text-emerald-400">{t("automates order handling")}</span>, <span className="text-emerald-600 dark:text-emerald-400">{t("manages inventory")}</span>, {t("and ")} <span className="text-emerald-600 dark:text-emerald-400">{t("optimizes production instantly")}</span> {t("- simpler, clearer and more effectively.")}.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
        <Link to="/get-started" className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white px-6 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 flex items-center">
              {t("Get Started")} <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full sm:w-auto group border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-emerald-500/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">{t("Contact Sales")}</span>
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
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-400/20 rounded-lg blur-sm transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="bg-gray-50 dark:bg-zinc-900/60 light:bg-gray-50 backdrop-blur-sm p-4 rounded-lg border border-gray-200 dark:border-zinc-800 light:border-gray-200 hover:border-emerald-500/50 transition-all duration-300 relative z-10">
        <div className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400 group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">{number}</div>
        <div className="text-gray-500 dark:text-gray-400 light:text-gray-500 text-xs sm:text-sm">{label}</div>
      </div>
    </div>
  );
};

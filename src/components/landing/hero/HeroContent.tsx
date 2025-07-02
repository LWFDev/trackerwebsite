
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
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-50/80 via-slate-50/60 to-emerald-50/40 dark:from-amber-900/20 dark:via-slate-900/60 dark:to-emerald-900/20 backdrop-blur-sm rounded-full border border-amber-200/50 dark:border-amber-700/30 mb-6 shadow-sm">
        <div className="text-sm text-amber-700 dark:text-amber-400 uppercase font-medium tracking-wider flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-3 animate-pulse"></span>
          {t("AUTOMATE. ORGANIZE. SIMPLIFY.")}
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        {t("Digitize production, ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600 dark:from-amber-400 dark:via-amber-300 dark:to-emerald-400">
          {t("enable profit.")}
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg animate-fade-in leading-relaxed" style={{
        animationDelay: '0.2s'
      }}>
        {t("The end-to-end platform that ")} <span className="text-amber-700 dark:text-amber-400 font-medium">{t("automates order handling")}</span>, <span className="text-amber-700 dark:text-amber-400 font-medium">{t("manages inventory")}</span>, {t("and ")} <span className="text-amber-700 dark:text-amber-400 font-medium">{t("optimizes production instantly")}</span> {t("- simpler, clearer and more effectively.")}.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
        <Link to="/get-started" className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0">
            <span className="flex items-center font-medium">
              {t("Get Started")} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full sm:w-auto group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
            <span className="font-medium">{t("Contact Sales")}</span>
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
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-4 rounded-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-amber-300/50 dark:hover:border-amber-600/50 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="text-2xl md:text-3xl font-bold mb-1 text-slate-800 dark:text-slate-200">{number}</div>
        <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

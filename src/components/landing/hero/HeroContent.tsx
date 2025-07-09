import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocalization } from "@/contexts/LocalizationContext";
export const HeroContent = () => {
  const {
    t
  } = useLocalization();
  return <motion.div className="md:w-1/2 md:pr-8 mb-10 md:mb-0" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }}>
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-50/80 via-slate-50/60 to-emerald-50/40 dark:from-yellow-900/20 dark:via-slate-900/60 dark:to-emerald-900/20 backdrop-blur-sm rounded-full border border-yellow-400/50 dark:border-yellow-600/30 mb-6 shadow-sm">
        <div className="text-sm text-yellow-700 dark:text-yellow-400 uppercase font-medium tracking-wider flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-3 animate-pulse"></span>
          {t("AUTOMATE. ORGANIZE. SIMPLIFY.")}
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        {t("Digitize production, ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-emerald-600 dark:from-yellow-400 dark:via-yellow-300 dark:to-emerald-400">
          {t("enable profit.")}
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg animate-fade-in leading-relaxed" style={{
      animationDelay: '0.2s'
    }}>
        {t("The end-to-end platform that ")} <span className="text-yellow-700 dark:text-yellow-400 font-medium">{t("automates order handling")}</span>, <span className="text-yellow-700 dark:text-yellow-400 font-medium">{t("manages inventory")}</span>, {t("and ")} <span className="text-yellow-700 dark:text-yellow-400 font-medium">{t("optimizes production instantly")}</span> {t("- simpler, clearer and more effectively.")}.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
      animationDelay: '0.3s'
    }}>
        <Link to="/get-started" className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0">
            <span className="flex items-center font-medium">
              {t("Get Started")} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full sm:w-auto group border border-yellow-400 dark:border-yellow-500 text-slate-700 dark:text-slate-300 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
            <span className="font-medium">{t("Contact Sales")}</span>
          </Button>
        </Link>
      </div>
      
      <TrustIndicator />
    </motion.div>;
};
const TrustIndicator = () => {
  const {
    t
  } = useLocalization();
  return <div className="mt-12 animate-fade-in" style={{
    animationDelay: '0.4s'
  }}>
      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium text-slate-50">{t("Enterprise Grade Security")}</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium text-slate-50">{t("99.9% Uptime SLA")}</span>
        </div>
      </div>
      
      <p className="text-xs leading-relaxed max-w-md text-slate-50">
        {t("Trusted by leading garment decorators worldwide. Empower your business to streamline and scale with our comprehensive production management platform.")}
      </p>
    </div>;
};
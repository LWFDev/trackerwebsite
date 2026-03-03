import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocalization } from "@/contexts/LocalizationContext";
import { scrollToTop } from "@/utils/navigation";

export const HeroContent = () => {
  const { t } = useLocalization();
  return (
    <motion.div className="md:w-1/2 md:pr-8 mb-10 md:mb-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold-opacity-10 via-slate-50/60 to-emerald-50/40 dark:from-gold-opacity-20 dark:via-slate-900/60 dark:to-emerald-900/20 backdrop-blur-sm rounded-full border border-gold-opacity-50 dark:border-gold-opacity-30 mb-6 shadow-sm">
        <div className="text-sm text-gold-dark dark:text-gold-light uppercase font-medium tracking-wider flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-gold mr-3 animate-pulse"></span>
          {t("LOGOS. PROOFS. ADVANCED PRODUCTION SCHEDULING.")}
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        {t("Cloud-Based Garment Decoration Software for ")}
        <span className="text-gold-gradient">
          {t("Embroidery, DTG, DTF & Team Gear.")}
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
        {t("The end-to-end platform for ")}
        <span className="text-gold-dark dark:text-gold-light font-medium">{t("cloud logo management")}</span>
        {t(" with embroidery and print separation files, ")}
        <span className="text-gold-dark dark:text-gold-light font-medium">{t("digital proof approvals")}</span>
        {t(", ")}
        <span className="text-gold-dark dark:text-gold-light font-medium">{t("production scheduling")}</span>
        {t(", and barcode machine integrations — simple, clear and more effective.")}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Link to="/get-started" onClick={scrollToTop} className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto group bg-gold-gradient hover:bg-gold-dark-gradient text-gold-foreground px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0">
            <span className="flex items-center font-medium">
              {t("Get Started")} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
        <Link to="/contact" onClick={scrollToTop} className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full sm:w-auto group border border-gold text-slate-700 dark:text-slate-300 hover:border-gold transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
            <span className="font-medium">{t("Contact Sales")}</span>
          </Button>
        </Link>
      </div>
      
      <TrustIndicator />
    </motion.div>
  );
};

const TrustIndicator = () => {
  const { t } = useLocalization();
  return (
    <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium text-slate-50">{t("Embroidery & DTG/DTF Production")}</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium text-slate-50">{t("Screen Printing & Heat Seal")}</span>
        </div>
      </div>
      
      <p className="text-xs leading-relaxed max-w-md text-slate-50">
        {t("Trusted by leading garment decorators worldwide. Manage licensed team gear, embroidery logos, DTG/DTF transfers, and screen printing workflows from one cloud platform.")}
      </p>
    </div>
  );
};

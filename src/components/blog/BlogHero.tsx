
import React from "react";
import { useLocalization } from "@/contexts/LocalizationContext";

const BlogHero = () => {
  const { t } = useLocalization();
  return (
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden flex items-center min-h-[30vh]">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("Tracker Blog")}</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {t("Insights, tips, and industry news to help you streamline your workflow")}
        </p>
      </div>
    </section>
  );
};

export default BlogHero;


import React from "react";
import { useLocalization } from "@/contexts/LocalizationContext";

const ContactFAQ = () => {
  const { t } = useLocalization();
  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("Frequently Asked")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">{t("Questions")}</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("How quickly can I expect a response?")}</h3>
              <p className="text-gray-400">{t("We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.")}</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("Do you offer on-site technical support?")}</h3>
              <p className="text-gray-400">{t("Yes, we provide on-site technical support for enterprise customers. Contact our sales team to learn more about our support packages.")}</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("Can I schedule a demo?")}</h3>
              <p className="text-gray-400">{t("Absolutely! You can schedule a demo by contacting our sales team or filling out the form on this page with \"Demo Request\" in the subject line.")}</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("What information should I provide when reporting an issue?")}</h3>
              <p className="text-gray-400">{t("Please include your account details, a description of the issue, steps to reproduce it, and any error messages you received for faster resolution.")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;

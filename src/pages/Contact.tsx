
import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import PageSEO from "@/components/seo/PageSEO";
import { contactSEO } from "@/data/seoData";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <PageSEO seo={contactSEO} />
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;

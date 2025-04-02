
import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;

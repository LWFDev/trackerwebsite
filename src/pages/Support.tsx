
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import SupportHero from '@/components/support/SupportHero';
import SupportFAQ from '@/components/support/SupportFAQ';
import SupportTicketForm from '@/components/support/SupportTicketForm';
import SupportContact from '@/components/support/SupportContact';
import PageSEO from "@/components/seo/PageSEO";
import { supportSEO, supportFAQSchema } from "@/data/seoData";

const Support = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <PageSEO seo={supportSEO} extraSchema={supportFAQSchema} />
      <SupportHero />
      <SupportFAQ />
      <SupportTicketForm />
      <SupportContact />
    </div>
  );
};

export default Support;


import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";
import PageSEO from "@/components/seo/PageSEO";
import { aboutSEO, aboutBreadcrumb } from "@/data/seoData";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageSEO seo={aboutSEO} breadcrumbs={aboutBreadcrumb} />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;

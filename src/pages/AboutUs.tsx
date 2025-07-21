
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";
import IntegrationPartners from "@/components/about/IntegrationPartners";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <IntegrationPartners />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;

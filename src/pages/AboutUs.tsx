
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;

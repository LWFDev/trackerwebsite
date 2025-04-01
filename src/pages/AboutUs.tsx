
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;


import React from "react";
import StoryHero from "./StoryHero";
import MainStory from "./MainStory";
import TrackerProvides from "./TrackerProvides";
import ClientTypes from "./ClientTypes";


const AboutStory = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <StoryHero />
        <MainStory />
        <TrackerProvides />
        <ClientTypes />
        
      </div>
    </div>
  );
};

export default AboutStory;

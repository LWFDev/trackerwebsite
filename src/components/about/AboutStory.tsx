
import React from "react";
import StoryHero from "./StoryHero";
import MainStory from "./MainStory";
import TrackerProvides from "./TrackerProvides";
import ClientTypes from "./ClientTypes";
import IntegrationPartners from "./IntegrationPartners";

const AboutStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full opacity-20 blur-xl animate-float"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-slate-200 to-gray-300 rounded-full opacity-30 blur-lg animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-200 to-slate-200 rounded-full opacity-25 blur-md animate-bounce"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-16">
        <StoryHero />
        <MainStory />
        <TrackerProvides />
        <ClientTypes />
        <IntegrationPartners />
      </div>
    </div>
  );
};

export default AboutStory;


import React from "react";
import StoryHero from "./StoryHero";
import MainStory from "./MainStory";
import TrackerProvides from "./TrackerProvides";
import ClientTypes from "./ClientTypes";
import IntegrationPartners from "./IntegrationPartners";

const AboutStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-gray-50 relative overflow-hidden">
      {/* Enhanced background pattern with silver and green */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.1)_1px,transparent_0)] [background-size:32px_32px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(148,163,184,0.08)_1px,transparent_0)] [background-size:40px_40px]"></div>
      
      {/* Refined floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-emerald-100 via-green-100 to-slate-100 rounded-full opacity-30 blur-2xl animate-float"></div>
      <div className="absolute top-80 right-16 w-32 h-32 bg-gradient-to-br from-slate-200 via-gray-200 to-emerald-100 rounded-full opacity-25 blur-xl animate-pulse"></div>
      <div className="absolute bottom-60 left-1/3 w-28 h-28 bg-gradient-to-br from-green-200 via-emerald-200 to-slate-200 rounded-full opacity-35 blur-lg animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-300 to-gray-300 rounded-full opacity-20 blur-md animate-wave"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
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

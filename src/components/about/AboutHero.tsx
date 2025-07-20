
import React from "react";

const AboutHero = () => {
  return (
    <div className="pt-24 pb-20 bg-zinc-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-emerald-400 font-medium text-sm tracking-wide uppercase">
              About Tracker
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="block mb-2 text-white">
            Empowering businesses
          </span>
          <span className="block mb-2">
            <span className="text-emerald-400">to work</span> <span className="text-gold">smarter</span>
          </span>
        </h1>

        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-12 h-0.5 bg-emerald-500/60 rounded-full"></div>
          <div className="w-2 h-2 bg-gold rounded-full"></div>
          <div className="w-12 h-0.5 bg-gold-opacity-60 rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-300">
          We build the <span className="text-emerald-400 font-semibold">revolutionary tools</span> that help businesses streamline workflows, reduce manual work, and <span className="text-gold font-semibold">focus on what matters most</span>.
        </p>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <img 
              src="/lovable-uploads/f68df86e-078b-403c-abca-ab6bbd62ece5.png" 
              alt="Our innovative team driving business transformation" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

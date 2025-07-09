
import React from "react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-zinc-900 via-black to-emerald-950 text-white relative overflow-hidden flex items-center min-h-[25vh]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gold-opacity-8 via-emerald-500/5 to-transparent blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-emerald-400/6 to-gold-opacity-4 blur-[80px] top-1/3 right-1/4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-emerald-400 to-green-400">Modules</span>
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Discover our comprehensive suite of business modules designed to 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-emerald-400 font-semibold"> streamline your operations</span> and 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 font-semibold"> drive growth</span>.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

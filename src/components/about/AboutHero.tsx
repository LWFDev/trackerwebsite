
import React from "react";

const AboutHero = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-black via-zinc-900 to-emerald-950 text-white relative overflow-hidden flex flex-col items-center min-h-[40vh]">
      {/* Enhanced background effects with gold and green */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#D4AF37]/15 via-emerald-500/10 to-green-400/5 blur-[150px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-emerald-400/10 via-[#D4AF37]/8 to-green-500/5 blur-[120px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-500/8 to-[#D4AF37]/12 blur-[100px] bottom-1/4 left-1/2 transform -translate-x-1/2 animate-wave"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-emerald-500 to-[#D4AF37] rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-[#D4AF37] rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-60 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-[#D4AF37] to-green-500 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-emerald-500/15 to-green-400/20 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-8 py-3 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-emerald-400 to-green-400 font-semibold text-sm tracking-wide uppercase">
              Transforming Business Excellence
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-[#D4AF37] rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-emerald-400">
              Our mission is to
            </span>
          </span>
          <span className="block mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-emerald-500 via-green-400 to-[#D4AF37]">
              empower businesses
            </span>
          </span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-white">
              to work smarter
            </span>
          </span>
        </h1>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-emerald-400 rounded-full"></div>
          <div className="w-4 h-4 bg-gradient-to-br from-[#D4AF37] via-emerald-500 to-green-400 rounded-full shadow-lg"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-transparent rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
          <span className="text-gray-300">We're building the </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-emerald-400 font-semibold">revolutionary tools</span>
          <span className="text-gray-300"> that help businesses streamline their workflows, reduce manual work, and </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 font-semibold">focus on what matters most</span>
          <span className="text-gray-300">.</span>
        </p>

        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Image glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-emerald-500/15 to-green-400/20 rounded-2xl blur-3xl transform scale-110"></div>
          <div className="relative bg-gradient-to-br from-white/10 via-transparent to-emerald-500/5 p-4 rounded-2xl backdrop-blur-sm border border-[#D4AF37]/20">
            <img 
              src="/lovable-uploads/27c70a05-dca6-4c0b-a0d7-aaf05443a139.png" 
              alt="Our innovative team driving business transformation" 
              className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

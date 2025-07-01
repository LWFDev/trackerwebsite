
import React from "react";

const AboutHero = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white relative overflow-hidden flex flex-col items-center min-h-[40vh]">
      {/* Softened background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/8 via-emerald-500/5 to-transparent blur-[120px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-emerald-400/6 via-[#D4AF37]/4 to-transparent blur-[100px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-400/30 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#D4AF37]/50 rounded-full opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-emerald-500/30 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/10 via-emerald-500/8 to-transparent backdrop-blur-sm border border-[#D4AF37]/20 rounded-full px-8 py-3 mb-8">
            <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-emerald-400 to-white font-semibold text-sm tracking-wide uppercase">
              Transforming Business Excellence
            </span>
            <div className="w-2 h-2 bg-emerald-400/60 rounded-full"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37]/80 to-emerald-400/80">
              Our mission is to
            </span>
          </span>
          <span className="block mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-[#D4AF37]/80">
              empower businesses
            </span>
          </span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400/80 via-green-500 to-white">
              to work smarter
            </span>
          </span>
        </h1>

        {/* Refined decorative elements */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-emerald-400/60 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-[#D4AF37]/80 via-emerald-500/70 to-green-400/60 rounded-full"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400/60 via-green-500/60 to-transparent rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
          <span className="text-gray-300">We're building the </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37]/90 to-emerald-400/90 font-semibold">revolutionary tools</span>
          <span className="text-gray-300"> that help businesses streamline their workflows, reduce manual work, and </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400/90 to-green-400/90 font-semibold">focus on what matters most</span>
          <span className="text-gray-300">.</span>
        </p>

        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Softened image glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-emerald-500/8 to-green-400/10 rounded-2xl blur-2xl transform scale-105"></div>
          <div className="relative bg-gradient-to-br from-white/5 via-transparent to-emerald-500/5 p-4 rounded-2xl backdrop-blur-sm border border-[#D4AF37]/15">
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

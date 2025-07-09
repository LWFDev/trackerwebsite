
import React from "react";

const BackgroundElements = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Primary gradient blob */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-br from-gold-DEFAULT/8 via-gold-light/5 to-gold-DEFAULT/10 blur-[150px] animate-morph top-10 -left-20 opacity-60"></div>
      
      {/* Secondary gradients */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/50 blur-[100px] bottom-10 right-10"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-DEFAULT/5 blur-[80px] bottom-1/3 left-1/3 opacity-30"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-32 left-[15%] w-10 h-10 rounded-md border border-gold-DEFAULT/20 animate-float" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-40 right-[25%] w-14 h-14 rounded-full border border-gold-DEFAULT/15 animate-float" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-1/2 right-[10%] w-20 h-20 rounded-lg border border-zinc-700/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-12 h-12 rounded-full border-2 border-gold-DEFAULT/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-zinc-700/20 rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-1/3 left-[10%] w-6 h-6 rounded-sm border border-gold-DEFAULT/30 animate-float" style={{ animationDelay: '1.8s' }}></div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>
    </div>
  );
};

export default BackgroundElements;


import React from "react";

const WorkflowBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Multiple animated gradient blobs */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-8 blur-[200px] animate-morph top-1/2 -left-40 transform -translate-y-1/2"></div>
      <div className="absolute w-[700px] h-[700px] rounded-full bg-zinc-800/40 blur-[180px] animate-morph top-1/2 -right-40 transform -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-light-opacity-5 blur-[150px] animate-morph bottom-0 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '6s' }}></div>
      
      {/* Enhanced floating elements with more variety */}
      <div className="absolute top-20 left-[15%] w-16 h-16 rounded-xl border-2 border-gold-opacity-20 opacity-30 rotate-12 animate-float shadow-lg shadow-gold" style={{ animationDelay: '1.1s' }}></div>
      <div className="absolute bottom-40 right-[15%] w-20 h-20 rounded-full border-2 border-gold-opacity-15 opacity-25 animate-bounce" style={{ animationDelay: '2.3s' }}></div>
      <div className="absolute top-[25%] right-[30%] w-12 h-12 border-2 border-gold-opacity-20 rounded-lg rotate-45 animate-spin-slow opacity-20" style={{ animationDelay: '1.4s' }}></div>
      <div className="absolute bottom-[20%] left-[35%] w-10 h-10 border-2 border-gold-opacity-15 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-[60%] left-[70%] w-14 h-14 rounded-md border border-gold-light-opacity-20 rotate-12 animate-float opacity-25" style={{ animationDelay: '3.2s' }}></div>
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]"></div>
      
      {/* More diagonal accent lines */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-15">
        <div className="absolute -left-[15%] -top-[15%] w-[130%] h-[130%] border-t-2 border-l-2 border-gold-opacity-30 rotate-12"></div>
        <div className="absolute -left-[15%] -top-[25%] w-[130%] h-[130%] border-t border-l border-gold-opacity-15 rotate-[20deg]"></div>
        <div className="absolute -right-[15%] -bottom-[15%] w-[130%] h-[130%] border-b-2 border-r-2 border-gold-light-opacity-20 rotate-12"></div>
      </div>
    </div>
  );
};

export default WorkflowBackground;


import React, { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const WorkflowStep = ({ 
  number, 
  title, 
  description,
  delay = 0
}: { 
  number: string, 
  title: string, 
  description: string,
  delay?: number
}) => {
  return (
    <ScrollReveal 
      delay={delay * 200} 
      className="flex flex-col items-center text-center group"
      duration={800}
      direction="up"
      distance="30px"
    >
      <div className="relative mb-6">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#F2D675]/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#F2D675]/30 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
        
        {/* Main number circle with enhanced styling */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br relative z-10 from-[#D4AF37] via-[#F2D675] to-[#D4AF37] flex items-center justify-center text-black font-bold text-2xl shadow-2xl shadow-[#D4AF37]/40 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-[#D4AF37]/60 border-2 border-[#F2D675]/50">
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          {/* Rotating border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500 blur-sm"></div>
          <span className="relative z-10">{number}</span>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-300 delay-100"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#F2D675] rounded-full opacity-0 group-hover:opacity-100 animate-float transition-all duration-300 delay-200"></div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 group-hover:text-[#D4AF37] transition-all duration-300 transform group-hover:scale-105">{title}</h3>
      <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300 max-w-[280px] mx-auto leading-relaxed">{description}</p>
      
      {/* Bottom accent line */}
      <div className="w-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mt-4 group-hover:w-20 transition-all duration-500 rounded-full"></div>
    </ScrollReveal>
  );
};

const Workflow = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Enhanced dot animation with multiple effects
  useEffect(() => {
    const animateDot = () => {
      if (!dotRef.current || !lineRef.current) return;

      const animation = dotRef.current.animate(
        [
          { 
            left: '0%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          },
          { 
            left: '25%', 
            transform: 'translateY(-50%) scale(1.2)', 
            filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.9))' 
          },
          { 
            left: '50%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          },
          { 
            left: '75%', 
            transform: 'translateY(-50%) scale(1.2)', 
            filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.9))' 
          },
          { 
            left: '100%', 
            transform: 'translateY(-50%) scale(1)', 
            filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' 
          }
        ],
        {
          duration: 5000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    };

    animateDot();
  }, []);

  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Multiple animated gradient blobs */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/8 blur-[200px] animate-morph top-1/2 -left-40 transform -translate-y-1/2"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full bg-zinc-800/40 blur-[180px] animate-morph top-1/2 -right-40 transform -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#F2D675]/5 blur-[150px] animate-morph bottom-0 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '6s' }}></div>
        
        {/* Enhanced floating elements with more variety */}
        <div className="absolute top-20 left-[15%] w-16 h-16 rounded-xl border-2 border-[#D4AF37]/20 opacity-30 rotate-12 animate-float shadow-lg shadow-[#D4AF37]/10" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-40 right-[15%] w-20 h-20 rounded-full border-2 border-[#D4AF37]/15 opacity-25 animate-bounce" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute top-[25%] right-[30%] w-12 h-12 border-2 border-[#D4AF37]/20 rounded-lg rotate-45 animate-spin-slow opacity-20" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-[20%] left-[35%] w-10 h-10 border-2 border-[#D4AF37]/15 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[60%] left-[70%] w-14 h-14 rounded-md border border-[#F2D675]/20 rotate-12 animate-float opacity-25" style={{ animationDelay: '3.2s' }}></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]"></div>
        
        {/* More diagonal accent lines */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-15">
          <div className="absolute -left-[15%] -top-[15%] w-[130%] h-[130%] border-t-2 border-l-2 border-[#D4AF37]/30 rotate-12"></div>
          <div className="absolute -left-[15%] -top-[25%] w-[130%] h-[130%] border-t border-l border-[#D4AF37]/15 rotate-[20deg]"></div>
          <div className="absolute -right-[15%] -bottom-[15%] w-[130%] h-[130%] border-b-2 border-r-2 border-[#F2D675]/20 rotate-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="down">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Enhanced badge */}
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-zinc-800/90 to-zinc-700/80 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-8 shadow-2xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all duration-300 group cursor-pointer">
              <span className="text-sm text-[#D4AF37] uppercase font-semibold tracking-wider flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mr-3 animate-pulse shadow-lg shadow-[#D4AF37]/50"></span>
                Streamlined Workflow
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span>
              </span>
            </div>
            
            {/* Enhanced title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] relative bg-[length:200%_100%] animate-shimmer">
                entire workflow
                {/* Enhanced underline */}
                <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#D4AF37]/40" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <path d="M0,6 Q100,0 200,6 T400,6" stroke="url(#gradient)" strokeWidth="3" fill="none" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#F2D675" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              From initial designs to final delivery, Tracker helps you manage every step of your production process with <span className="text-[#D4AF37] font-semibold">unprecedented efficiency</span>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Enhanced animated connection line */}
          <div ref={lineRef} className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full shadow-lg shadow-[#D4AF37]/30">
            {/* Main moving dot with enhanced effects */}
            <div 
              ref={dotRef} 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D675] shadow-xl"
              style={{
                left: '0%',
                filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))'
              }}
            >
              {/* Pulsing ring around dot */}
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 animate-ping"></div>
            </div>
              
            {/* Enhanced pulse dots with staggered animation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-3 h-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#F2D675]/60 animate-pulse shadow-md" style={{ animationDelay: '1s' }}></div>
            
            {/* Flowing energy effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          <WorkflowStep 
            number="01" 
            title="Upload & Organize" 
            description="Store all your logos and designs in one secure, searchable location for instant access."
            delay={1} 
          />
          <WorkflowStep 
            number="02" 
            title="Create Proofs" 
            description="Generate stunning professional mockups that wow your customers every time."
            delay={2} 
          />
          <WorkflowStep 
            number="03" 
            title="Get Approvals" 
            description="Streamline client feedback with automated approval workflows and notifications."
            delay={3} 
          />
          <WorkflowStep 
            number="04" 
            title="Track Production" 
            description="Monitor every aspect of your production pipeline from order to final delivery."
            delay={4} 
          />
        </div>
        
        {/* Enhanced directional indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 rounded-full border border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20">
              <span className="text-[#D4AF37] text-sm font-medium">Complete Workflow</span>
              <div className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* Flowing underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

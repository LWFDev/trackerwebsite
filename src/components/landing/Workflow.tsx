
import React from "react";
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
    <ScrollReveal delay={delay * 200} className="flex flex-col items-center text-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F2D675]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br relative z-10 from-[#D4AF37] to-[#F2D675] flex items-center justify-center text-black font-bold mb-5 text-xl shadow-lg shadow-[#D4AF37]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#D4AF37]/40">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </ScrollReveal>
  );
};

const Workflow = () => {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated gradient blobs */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D4AF37]/5 blur-[150px] animate-morph top-1/2 -left-40 transform -translate-y-1/2"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full bg-zinc-800/30 blur-[150px] animate-morph top-1/2 -right-40 transform -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-[25%] w-12 h-12 rounded-md border border-[#D4AF37]/10 opacity-20 rotate-12 animate-float" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-40 right-[20%] w-16 h-16 rounded-full border border-[#D4AF37]/10 opacity-20 animate-float" style={{ animationDelay: '2.3s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6 shadow-lg">
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] mr-2 animate-pulse"></span>
                Workflow
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              Streamline your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] relative">
                entire workflow
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37]/30" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <path d="M0,1 C150,12 250,12 400,1" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              From initial designs to final delivery, Tracker helps you manage every step of your production process.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Animated connection line with dot moving across */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent">
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D4AF37] animate-shimmer" 
                style={{
                  background: 'linear-gradient(to right, #D4AF37, #F2D675)',
                  backgroundSize: '200% 100%',
                  left: '0%'
                }}></div>
          </div>
          
          <WorkflowStep 
            number="01" 
            title="Upload & Organize" 
            description="Store all your logos and designs in one place for easy access."
            delay={1} 
          />
          <WorkflowStep 
            number="02" 
            title="Create Proofs" 
            description="Generate professional mockups for customer approval."
            delay={2} 
          />
          <WorkflowStep 
            number="03" 
            title="Get Approvals" 
            description="Streamline client feedback and approvals."
            delay={3} 
          />
          <WorkflowStep 
            number="04" 
            title="Track Production" 
            description="Monitor progress from order to delivery."
            delay={4} 
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;

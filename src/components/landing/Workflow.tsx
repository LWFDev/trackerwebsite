
import { ArrowRight } from "lucide-react";

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
    <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F2D675] flex items-center justify-center text-black font-bold mb-5 text-xl shadow-lg shadow-[#D4AF37]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#D4AF37]/40">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  );
};

const Workflow = () => {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 -left-40 transform -translate-y-1/2"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full bg-zinc-800/30 blur-[150px] top-1/2 -right-40 transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Workflow</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Streamline your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">entire workflow</span>
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From initial designs to final delivery, Tracker helps you manage every step of your production process.
          </p>
        </div>

        {/* Workflow diagram */}
        <div className="mb-16 relative">
          <div className="flex justify-center mb-10">
            <img 
              src="/lovable-uploads/9721006a-2365-4a7b-87fa-1d3850b2c1a8.png" 
              alt="Workflow diagram" 
              className="max-w-full h-auto rounded-xl shadow-2xl border border-zinc-800 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          
          <WorkflowStep 
            number="01" 
            title="Upload & Organize" 
            description="Store all your logos and designs in one place for easy access."
            delay={0.1} 
          />
          <WorkflowStep 
            number="02" 
            title="Create Proofs" 
            description="Generate professional mockups for customer approval."
            delay={0.2} 
          />
          <WorkflowStep 
            number="03" 
            title="Get Approvals" 
            description="Streamline client feedback and approvals."
            delay={0.3} 
          />
          <WorkflowStep 
            number="04" 
            title="Track Production" 
            description="Monitor progress from order to delivery."
            delay={0.4} 
          />
        </div>
        
        {/* Call to action button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="inline-flex items-center text-[#D4AF37] font-medium hover:text-[#F2D675] transition-colors">
            Learn more about our workflow
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

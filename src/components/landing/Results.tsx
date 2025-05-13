
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ChartBar, ChartLine, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced individual result card component with company logos
const ResultCard = ({ 
  company, 
  quote, 
  person, 
  role, 
  logoSrc,
  delay = 0 
}: { 
  company: string; 
  quote: string; 
  person: string; 
  role: string; 
  logoSrc?: string;
  delay?: number;
}) => {
  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-zinc-800 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        {logoSrc && (
          <div className="mb-4">
            <img src={logoSrc} alt={`${company} logo`} className="h-8 w-auto" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{company}</h3>
        <p className="text-gray-400 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            {person === "Jane Smith" ? (
              <img src="/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png" alt={person} className="w-full h-full object-cover" />
            ) : person === "Michael Johnson" ? (
              <img src="/lovable-uploads/9721006a-2365-4a7b-87fa-1d3850b2c1a8.png" alt={person} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
            )}
          </div>
          <div>
            <div className="font-medium">{person}</div>
            <div className="text-sm text-[#D4AF37]">{role}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Enhanced metric component with icon
const ResultMetric = ({ 
  icon, 
  percentage, 
  text, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  percentage: string; 
  text: string; 
  delay?: number;
}) => {
  return (
    <ScrollReveal delay={delay} direction="up" distance="20px" duration={800} className="mb-8">
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-zinc-800/80 rounded-lg border border-zinc-700 text-[#D4AF37]">
          {icon}
        </div>
        <div>
          <div className="mb-1 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">{percentage}</div>
          <div className="text-gray-300">{text}</div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Featured stat with background
const FeaturedStat = ({ number, label, bgColor }: { number: string; label: string; bgColor: string }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center h-full text-center`}>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
};

const Results = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Real results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">real customers</span>
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in">
            See how businesses like yours are using Tracker to streamline their workflows and increase productivity.
          </p>
        </div>

        {/* Redesigned content area with company logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ResultCard 
            company="ABC Apparel"
            quote="Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
            person="Jane Smith"
            role="CEO, ABC Apparel"
            logoSrc="/lovable-uploads/728cf67b-7031-433e-b3e6-395bfe654652.png"
            delay={0}
          />
          
          <ResultCard 
            company="XYZ Embroidery"
            quote="The product designer module has cut our design approval time by 70%. Our clients love being able to see their designs instantly."
            person="Michael Johnson"
            role="Production Manager, XYZ Embroidery"
            logoSrc="/lovable-uploads/f1e4ea1d-07f7-48d5-aa20-c50891291083.png"
            delay={100}
          />

          <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 transform transition-all duration-300 hover:border-[#D4AF37]/40 flex flex-col">
            <ResultMetric 
              icon={<TrendingUp size={24} />} 
              percentage="65%" 
              text="reduction in design time" 
              delay={100} 
            />
            <ResultMetric 
              icon={<Users size={24} />} 
              percentage="3x" 
              text="faster client approvals" 
              delay={200} 
            />
            <ResultMetric 
              icon={<ChartLine size={24} />} 
              percentage="45%" 
              text="increase in production capacity" 
              delay={300} 
            />
          </div>
        </div>
        
        {/* Stats grid with visual elements */}
        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-sm opacity-80">Orders processed monthly</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img src="/lovable-uploads/972552ea-a023-480e-8094-fcee4fa2f200.png" alt="Orders graphic" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900 rounded-lg p-6 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Active businesses</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img src="/lovable-uploads/62625f08-6c74-40d2-ad82-d39c8e88166e.png" alt="Business graphic" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">32%</div>
                <div className="text-sm opacity-80">Average time saved</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img src="/lovable-uploads/70e89c9a-2a2a-47bf-84af-d0d6cecca1e3.png" alt="Time saving graphic" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900 rounded-lg p-6 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Customer support</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img src="/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png" alt="Support graphic" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ROI Calculator section with better visual */}
        <ScrollReveal delay={200} className="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <ChartBar size={28} className="mr-4 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold">Calculate Your ROI</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-300 mb-6">
                  See how much time and money your business could save by implementing Tracker's workflow automation solution.
                </p>
                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <div className="flex flex-col gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Orders per month</label>
                      <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                        <option>50-100</option>
                        <option>100-500</option>
                        <option>500-1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Team size</label>
                      <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                        <option>1-5</option>
                        <option>6-15</option>
                        <option>16-50</option>
                        <option>50+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Current software</label>
                      <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                        <option>Manual process</option>
                        <option>Spreadsheets</option>
                        <option>Other software</option>
                      </select>
                    </div>
                  </div>
                  <Button className="bg-[#D4AF37] hover:bg-[#F2D675] text-black w-full">Calculate Savings</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c9d06f4a-98af-4be4-83f8-407caa641ded.png" 
                  alt="ROI Chart" 
                  className="max-w-full h-auto rounded-lg border border-zinc-700 shadow-lg"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">
                On average, customers save 15-20 hours per week on administrative tasks after implementing Tracker.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center">
          <Link to="/case-studies">
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20">
              Read More Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;

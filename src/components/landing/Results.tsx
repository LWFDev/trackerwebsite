
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ChartBar, ChartLine, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced individual result card component
const ResultCard = ({ 
  company, 
  quote, 
  person, 
  role, 
  delay = 0 
}: { 
  company: string; 
  quote: string; 
  person: string; 
  role: string; 
  delay?: number;
}) => {
  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-zinc-800 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{company}</h3>
        <p className="text-gray-400 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-zinc-800 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
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

        {/* Redesigned content area with more visual elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ResultCard 
            company="ABC Apparel"
            quote="Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
            person="Jane Smith"
            role="CEO, ABC Apparel"
            delay={0}
          />
          
          <ResultCard 
            company="XYZ Embroidery"
            quote="The product designer module has cut our design approval time by 70%. Our clients love being able to see their designs instantly."
            person="Michael Johnson"
            role="Production Manager, XYZ Embroidery"
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
        
        {/* Stats grid */}
        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
            <FeaturedStat number="10,000+" label="Orders processed monthly" bgColor="bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <FeaturedStat number="500+" label="Active businesses" bgColor="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900" />
            <FeaturedStat number="32%" label="Average time saved" bgColor="bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <FeaturedStat number="24/7" label="Customer support" bgColor="bg-gradient-to-br from-[#D4AF37]/20 to-zinc-900" />
          </div>
        </ScrollReveal>

        {/* ROI Calculator section */}
        <ScrollReveal delay={200} className="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <ChartBar size={28} className="mr-4 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold">Calculate Your ROI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              See how much time and money your business could save by implementing Tracker's workflow automation solution.
            </p>
            <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
                <div className="w-full md:w-1/3">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Orders per month</label>
                  <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                    <option>50-100</option>
                    <option>100-500</option>
                    <option>500-1000</option>
                    <option>1000+</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Team size</label>
                  <select className="bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 w-full">
                    <option>1-5</option>
                    <option>6-15</option>
                    <option>16-50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3">
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

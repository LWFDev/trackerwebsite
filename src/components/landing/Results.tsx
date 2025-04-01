
import { Button } from "@/components/ui/button";

const ResultCard = () => {
  return (
    <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-zinc-800 transform transition-all duration-300 hover:-translate-y-2 hover:border-gold-DEFAULT/40 hover:shadow-xl animate-fade-in">
      <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">How ABC Apparel increased production by 200%</h3>
      <p className="text-gray-400 mb-6">
        "Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zinc-800 rounded-full mr-3 border-2 border-gold-DEFAULT/30 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
        </div>
        <div>
          <div className="font-medium">Jane Smith</div>
          <div className="text-sm text-gold-DEFAULT">CEO, ABC Apparel</div>
        </div>
      </div>
    </div>
  );
};

const ResultMetric = ({ percentage, text, delay = 0 }: { percentage: string, text: string, delay?: number }) => {
  return (
    <div className="mb-8 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">{percentage}</div>
      <div className="text-gray-300">{text}</div>
    </div>
  );
};

const Results = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-DEFAULT/5 blur-[150px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-gold-DEFAULT uppercase font-medium tracking-wider">Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Real results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">real customers</span>
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See how businesses like yours are using Tracker to streamline their workflows and increase productivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <ResultCard />
          </div>
          <div className="md:w-2/3 bg-zinc-900/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/40 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ResultMetric percentage="65%" text="reduction in design time" delay={0.1} />
            <ResultMetric percentage="3x" text="faster client approvals" delay={0.2} />
            <ResultMetric percentage="45%" text="increase in production capacity" delay={0.3} />
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-gradient-to-r from-gold-DEFAULT to-gold-light hover:from-gold-light hover:to-gold-DEFAULT text-black transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-DEFAULT/20">
            Read More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;

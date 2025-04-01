
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="text-sm text-indigo-400 uppercase mb-3 font-medium">AUTOMATE. ORGANIZE. SIMPLIFY.</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digitize production, enable profit.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              The end-to-end platform that <span className="text-indigo-400">automates order handling</span>, <span className="text-indigo-400">manages inventory</span>, and <span className="text-indigo-400">optimizes production instantly</span> - simpler, clearer and more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Contact Sales
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-1">1,000,000+</div>
                <div className="text-gray-400 text-sm">Garments Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2,000+</div>
                <div className="text-gray-400 text-sm">Workflows Automated</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
                <img 
                  src="/lovable-uploads/9721006a-2365-4a7b-87fa-1d3850b2c1a8.png" 
                  alt="Platform dashboard" 
                  className="w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

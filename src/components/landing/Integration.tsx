
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Integration = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-900/30 blur-[100px] bottom-0 right-0"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-DEFAULT/5 blur-[120px] top-20 left-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
              <span className="text-sm text-gold-DEFAULT uppercase font-medium tracking-wider">Integrations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Seamlessly integrate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">your existing tools</span>
            </h2>
            <p className="text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tracker seamlessly links with tools you already use, creating a unified workflow that will increase ease and production efficiency.
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-center p-3 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CheckCircle className="w-5 h-5 text-gold-DEFAULT mr-3" />
                <span>Connect with popular e-commerce platforms</span>
              </div>
              <div className="flex items-center p-3 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CheckCircle className="w-5 h-5 text-gold-DEFAULT mr-3" />
                <span>Sync with your accounting software</span>
              </div>
              <div className="flex items-center p-3 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <CheckCircle className="w-5 h-5 text-gold-DEFAULT mr-3" />
                <span>Import designs from Adobe Creative Cloud</span>
              </div>
              <div className="flex items-center p-3 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/50 hover:-translate-y-1 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <CheckCircle className="w-5 h-5 text-gold-DEFAULT mr-3" />
                <span>Integrate with your production equipment</span>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-gold-DEFAULT to-gold-light hover:from-gold-light hover:to-gold-DEFAULT text-black transition-all duration-300 hover:shadow-lg hover:shadow-gold-DEFAULT/20 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Learn More
            </Button>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div 
                key={index}
                className="bg-zinc-900/70 backdrop-blur-sm rounded-xl h-32 border border-zinc-800 transform transition-all duration-300 hover:border-gold-DEFAULT/50 hover:-translate-y-1 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gold-DEFAULT/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;


import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Integration = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Seamlessly integrate with your existing tools
            </h2>
            <p className="text-gray-400 mb-8">
              Tracker seamlessly links with tools you already use, creating a unified workflow that will increase ease and production efficiency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                <span>Connect with popular e-commerce platforms</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                <span>Sync with your accounting software</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                <span>Import designs from Adobe Creative Cloud</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                <span>Integrate with your production equipment</span>
              </div>
            </div>
            
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Learn More
            </Button>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-lg h-32 border border-slate-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;

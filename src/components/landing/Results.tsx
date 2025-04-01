
import { Button } from "@/components/ui/button";

const ResultCard = () => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-6 border border-slate-700">
      <h3 className="text-xl font-bold mb-4">How ABC Apparel increased production by 200%</h3>
      <p className="text-gray-400 mb-6">
        "Tracker has completely transformed our workflow. We've gone from taking days to processing orders in just a few hours."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-slate-600 rounded-full mr-3"></div>
        <div>
          <div className="font-medium">Jane Smith</div>
          <div className="text-sm text-gray-500">CEO, ABC Apparel</div>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Real results from real customers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how businesses like yours are using Tracker to streamline their workflows and increase productivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <ResultCard />
          </div>
          <div className="md:w-2/3 bg-slate-900 rounded-lg p-6 border border-slate-700">
            <div className="mb-8">
              <div className="mb-2 text-2xl font-bold text-indigo-500">65%</div>
              <div>reduction in design time</div>
            </div>
            <div className="mb-8">
              <div className="mb-2 text-2xl font-bold text-indigo-500">3x</div>
              <div>faster client approvals</div>
            </div>
            <div>
              <div className="mb-2 text-2xl font-bold text-indigo-500">45%</div>
              <div>increase in production capacity</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Read More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">transform your workflow?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Start your free 14-day trial today.
          </p>
          
          <Link to="/get-started">
            <Button size="lg" className="px-8 shadow-xl bg-gradient-to-r from-[#D4AF37] to-[#F2D675] hover:from-[#F2D675] hover:to-[#D4AF37] text-black transform transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              Get Started Free <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;

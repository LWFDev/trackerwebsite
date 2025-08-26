
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-gold-opacity-30 transition-all duration-500 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to <span className="text-gold-gradient">transform your workflow?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Start your evaluation today.
          </p>
          
          <Link to="/get-started" onClick={scrollToTop}>
            <Button size="lg" className="px-8 shadow-xl bg-gold-gradient hover:bg-gold-dark-gradient text-gold-foreground transform transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              Get Started <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;

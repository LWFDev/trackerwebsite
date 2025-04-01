
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!"
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers using our platform today.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-10">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
              required
            />
            <Button type="submit" className="h-12 bg-[#7C3AED] hover:bg-[#6D28D9] gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            No credit card required. Start with a free 14-day trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

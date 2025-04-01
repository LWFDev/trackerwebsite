
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send this to your API
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Get the latest articles, product updates, and workflow tips delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-800 border-zinc-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="gold">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

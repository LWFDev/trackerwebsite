
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Tracker has transformed our development workflow. The components are beautiful, accessible, and incredibly easy to customize. It's saved us weeks of development time.",
    author: "Sarah Johnson",
    role: "Lead Developer at TechFlow",
    avatar: "/placeholder.svg",
    initials: "SJ",
    delay: 0.3
  },
  {
    id: 2,
    content: "I've used many tracking systems, but Tracker stands out. The documentation is excellent, and the features are so well designed. It's now our go-to for all projects.",
    author: "Michael Chen",
    role: "Frontend Engineer at StartupX",
    avatar: "/placeholder.svg",
    initials: "MC",
    delay: 0.4
  },
  {
    id: 3,
    content: "The level of polish in Tracker is impressive. Every feature feels thoughtfully crafted, and the automation system is powerful yet simple. Absolutely worth every penny.",
    author: "Emily Rodriguez",
    role: "UI/UX Designer at DesignCo",
    avatar: "/placeholder.svg",
    initials: "ER",
    delay: 0.5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See what our users have to say about Tracker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-zinc-800 bg-zinc-900 animate-fade-in text-white" style={{ animationDelay: `${testimonial.delay}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-gold-DEFAULT fill-gold-DEFAULT" size={18} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gold-DEFAULT text-black">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

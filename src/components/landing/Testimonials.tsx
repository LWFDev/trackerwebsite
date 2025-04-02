
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Tracker saved us two days a week of human time, absolutely huge!",
    author: "Adrian Noott",
    role: "AGAME Sports",
    avatar: "https://mebuisworks.com/wp-content/uploads/2024/12/adrian-agame-150x150-1.webp",
    initials: "AN",
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
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[130px] -top-1/4 -right-1/4"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-zinc-800/30 blur-[100px] -bottom-1/4 -left-1/4"></div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 mb-6">
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Businesses Worldwide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our users have to say about Tracker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-zinc-800 bg-zinc-900/90 backdrop-blur-sm text-white hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${testimonial.delay}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-[#D4AF37]" size={18} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border border-[#D4AF37]/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-[#D4AF37]">{testimonial.role}</p>
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

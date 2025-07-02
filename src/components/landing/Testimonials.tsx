
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Tracker saved us two days a week of human time, absolutely huge! The automation tools eliminated all our repetitive tasks.",
    author: "Adrian Noott",
    role: "AGAME Sports",
    avatar: "https://mebuisworks.com/wp-content/uploads/2024/12/adrian-agame-150x150-1.webp",
    initials: "AN",
    delay: 0.3,
    company: "AGAME Sports"
  },
  {
    id: 2,
    content: "We can pick and pack 50 orders per hour per person, we calculate Tracker is a minimum of 10 times faster than our old manual process.",
    author: "Richard Curran",
    role: "Pure Optical",
    avatar: "https://mebuisworks.com/wp-content/uploads/2024/12/richard-pure-optical-150x150.webp",
    initials: "RC",
    delay: 0.4,
    company: "Pure Optical"
  },
  {
    id: 3,
    content: "Tracker has transformed our internal systems completely, allowing us the freedom to concentrate on development and growth.",
    author: "Josie Morris",
    role: "Woolcool",
    avatar: "https://mebuisworks.com/wp-content/uploads/2024/12/josie-coolwool-150x150.webp",
    initials: "JM",
    delay: 0.5,
    company: "Woolcool"
  },
  {
    id: 4,
    content: "Since implementing Tracker, we've seen a 40% increase in order fulfillment efficiency. Our team can now focus on scaling rather than managing spreadsheets.",
    author: "Thomas Reynolds",
    role: "Director of Operations",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    initials: "TR",
    delay: 0.6,
    company: "Embroidery Express"
  },
  {
    id: 5,
    content: "The customer portal feature has revolutionized our client communications. Approvals that used to take a week now happen in hours.",
    author: "Sarah Johnson",
    role: "Customer Service Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    initials: "SJ",
    delay: 0.7,
    company: "PrintPerfect Inc"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card key={testimonial.id} className="border-emerald-600/30 dark:border-emerald-700/30 light:border-emerald-600/30 bg-gradient-to-br from-emerald-800/90 via-green-800/80 to-emerald-900/90 dark:from-emerald-900/80 dark:via-green-900/70 dark:to-emerald-950/80 light:from-emerald-800/90 light:via-green-800/80 light:to-emerald-900/90 backdrop-blur-sm text-white hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${testimonial.delay}s` }}>
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-emerald-400 fill-emerald-400" size={18} />
          ))}
        </div>
        <p className="text-emerald-100 mb-6">"{testimonial.content}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border border-emerald-400/30">
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-green-400 text-white">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-white">{testimonial.author}</p>
            <p className="text-sm text-emerald-400">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextPage = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage, 
    (activeIndex * itemsPerPage) + itemsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-900/95 via-emerald-800/90 to-green-950/95 dark:from-green-900/80 dark:via-emerald-800/75 dark:to-green-950/80 light:from-green-900/95 light:via-emerald-800/90 light:to-green-950/95 relative overflow-hidden">
      {/* Enhanced background elements with green theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px] -top-1/4 -right-1/4"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-green-400/5 blur-[100px] -bottom-1/4 -left-1/4"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-emerald-400/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-green-500/15 rounded-lg rotate-45 opacity-25"></div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-emerald-800/60 dark:bg-emerald-900/60 light:bg-emerald-800/60 backdrop-blur-sm rounded-full border border-emerald-600/50 dark:border-emerald-700/50 light:border-emerald-600/50 mb-6">
              <span className="text-sm text-emerald-300 uppercase font-medium tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-200">Businesses Worldwide</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              See what our users have to say about Tracker
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Enhanced navigation controls with green theme */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-emerald-800/70 dark:bg-emerald-900/70 light:bg-emerald-800/70 border-emerald-600/50 dark:border-emerald-700/50 light:border-emerald-600/50 hover:bg-emerald-700/70 dark:hover:bg-emerald-800/70 light:hover:bg-emerald-700/70 hover:border-emerald-400/50"
              onClick={prevPage}
            >
              <ChevronLeft className="h-5 w-5 text-emerald-200" />
            </Button>
            <div className="flex gap-2 items-center">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  className={`h-2 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-emerald-600/50'}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-emerald-800/70 dark:bg-emerald-900/70 light:bg-emerald-800/70 border-emerald-600/50 dark:border-emerald-700/50 light:border-emerald-600/50 hover:bg-emerald-700/70 dark:hover:bg-emerald-800/70 light:hover:bg-emerald-700/70 hover:border-emerald-400/50"
              onClick={nextPage}
            >
              <ChevronRight className="h-5 w-5 text-emerald-200" />
            </Button>
          </div>
        )}
        
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={`logo-${testimonial.id}`} 
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="text-xl font-bold text-emerald-300">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;

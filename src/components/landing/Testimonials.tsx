
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Tracker saved us two days a week of human time, absolutely huge! The automation tools eliminated all our repetitive tasks.",
      author: "Adrian Noott",
      role: "AGAME Sports",
      avatar: "/lovable-uploads/afc5ca77-21a0-489c-a1e6-175ab043eefc.png",
      rating: 5
    },
    {
      quote: "We can pick and pack 50 orders per hour per person, we calculate Tracker is a minimum of 10 times faster than our old manual process.",
      author: "Richard Curran",
      role: "Pure Optical",
      avatar: "/lovable-uploads/bd71cf26-6d3f-4aa3-a4e0-d2aa9db5670f.png",
      rating: 5
    },
    {
      quote: "Tracker has transformed our internal systems completely, allowing us the freedom to concentrate on development and growth.",
      author: "Josie Morris",
      role: "Woolcool",
      avatar: "/lovable-uploads/cac46aad-7090-45f2-b15d-50e424cf84d1.png",
      rating: 5
    }
  ];

  const companies = [
    { name: "AGAME Sports", logo: "/lovable-uploads/afc5ca77-21a0-489c-a1e6-175ab043eefc.png" },
    { name: "Pure Optical", logo: "/lovable-uploads/bd71cf26-6d3f-4aa3-a4e0-d2aa9db5670f.png" },
    { name: "Woolcool", logo: "/lovable-uploads/cac46aad-7090-45f2-b15d-50e424cf84d1.png" },
    { name: "Embroidery Express", logo: "/lovable-uploads/89b9b32f-faca-405b-a272-133d79b8a435.png" },
    { name: "PrintPerfe", logo: "/lovable-uploads/da887be9-f204-4f42-8349-f1ee3a8bd239.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-zinc-900 dark:bg-zinc-900 light:bg-gray-50 text-white dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-gray-200/30 blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-zinc-800/90 dark:bg-zinc-800/90 light:bg-gray-100/90 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-6 transition-colors duration-300">
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">TESTIMONIALS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Businesses Worldwide</span>
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">
              See what our users have to say about Tracker
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Slider */}
        <ScrollReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-zinc-800/60 dark:bg-zinc-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-zinc-700 dark:border-zinc-700 light:border-gray-200 text-center transition-colors duration-300">
                      {/* Star Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl text-gray-200 dark:text-gray-200 light:text-gray-700 mb-8 italic leading-relaxed transition-colors duration-300">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-zinc-700 dark:bg-zinc-700 light:bg-gray-200 border-2 border-[#D4AF37]/30 mr-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-600 dark:to-zinc-800 light:from-gray-300 light:to-gray-400"></div>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white dark:text-white light:text-gray-900 transition-colors duration-300">{testimonial.author}</div>
                          <div className="text-[#D4AF37] text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-gray-200 flex items-center justify-center text-white dark:text-white light:text-gray-900 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-gray-200 flex items-center justify-center text-white dark:text-white light:text-gray-900 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#D4AF37] scale-125' 
                      : 'bg-zinc-600 dark:bg-zinc-600 light:bg-gray-400 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Company logos */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <div key={index} className="text-gray-500 dark:text-gray-500 light:text-gray-400 font-medium text-lg transition-colors duration-300">
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
